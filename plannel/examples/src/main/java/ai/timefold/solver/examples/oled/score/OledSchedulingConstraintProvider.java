package ai.timefold.solver.examples.oled.score;

import ai.timefold.solver.core.api.score.buildin.hardmediumsoft.HardMediumSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import ai.timefold.solver.examples.oled.domain.*;
import ai.timefold.solver.examples.oled.domain.solver.OledUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import static ai.timefold.solver.core.api.score.stream.ConstraintCollectors.*;
import static ai.timefold.solver.core.api.score.stream.Joiners.equal;
import static ai.timefold.solver.examples.oled.domain.OledConstraintConfiguration.*;
import static java.time.temporal.ChronoUnit.DAYS;

public class OledSchedulingConstraintProvider implements ConstraintProvider {

    private static final Logger LOGGER = LoggerFactory.getLogger(OledSchedulingConstraintProvider.class);

    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[] {
                // Hard constraints
                requiredEquipment(constraintFactory),
                unavailableTimeslotPenalty(constraintFactory),
                chamberCapacity(constraintFactory),
                dueDateFence(constraintFactory),
                bakingJob(constraintFactory),
//                bakingOperationMax(constraintFactory),
    //          simultaneousProductionChamberCapacity(constraintFactory),
                // Medium constraints
                assignJobToAChamberConstraint(constraintFactory),
    //                orderContinuousProduction(constraintFactory),
    //                oneOrderProduction(constraintFactory),
    //                itemConflict(constraintFactory),
                // Soft constraints
//                chamberUtilization(constraintFactory), // commenting for now as useful for fine-grained jobs
                bakingJob2(constraintFactory),
                continuousProduction(constraintFactory),
                continuousProductionCategory(constraintFactory),
                //forwardPlanning(constraintFactory), // forward planning vs backward planning, we might need a buffer with due date
                fillingTime(constraintFactory),
                remainderQuantityProduction(constraintFactory),
                chamberStability(constraintFactory),
    //                leastStockKeepingDay(constraintFactory)
        };
    }

    //Hard
    Constraint requiredEquipment(ConstraintFactory constraintFactory) {
        // A project can be produced using specific EL device
        return constraintFactory
                .forEach(ProductionJob.class)
                .filter(a -> !OledUtil.hasRequiredEquipment(a.getOrder(), a.getChamber().getPhase()))
//                .penalize(HardMediumSoftScore.ONE_HARD)
                .penalizeConfigurable()
                .asConstraint(REQUIRED_EQUIPMENT);
    }

    Constraint unavailableTimeslotPenalty(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(UnavailableTimeslotPenalty.class)
                .join(ProductionJob.class,
                        equal(UnavailableTimeslotPenalty::getChamber, ProductionJob::getChamber),
                        equal(UnavailableTimeslotPenalty::getTimeslot, ProductionJob::getTimeslot))
                .filter( (penalty, job) -> !job.isMaintenanceJob())
                .penalizeConfigurable()
                .asConstraint(UNAVAILABLE_TIMESLOT_PENALTY);
    }

    Constraint chamberCapacity(ConstraintFactory constraintFactory) {
        // A chamber has capacity limitation
//        return constraintFactory
//                .forEach(ProductionJob.class)
//                .join(Chamber.class, equal(ProductionJob::getChamber, c -> c))
//                .groupBy((job, chamber) -> job.getTimeslot(), (job, chamber) -> chamber, sumLong((job, chamber) -> job.getQuantity()))
//                .filter((timeslot, chamber, capa) -> CapacityType.XL.getCapacitySize() < capa)
////                .penalize(HardMediumSoftScore.ONE_HARD)
//                .penalizeConfigurable((timeslot, chamber, aLong) -> (aLong.intValue() - CapacityType.XL.getCapacitySize()))
//                .asConstraint(CHAMBER_CAPACITY);
        return constraintFactory
                .forEach(ProductionJob.class)
                .filter(job -> job.getChamber() != null && job.getTimeslot() != null && job.getQuantity() > 0)
                .groupBy(ProductionJob::getChamber, ProductionJob::getTimeslot, sum(ProductionJob::getQuantity))
                .filter((chamber, timeslot, prodQty) -> chamber.getCapacityType().getCapacitySize() < prodQty)
                .penalizeConfigurable((chamber, timeslot, prodQty) -> {
//                .penalize(HardMediumSoftScore.ONE_HARD, (chamber, timeslot, capa) -> {
//                    LOGGER.debug("chamber : " + chamber.getName() + "Timeslot : " + timeslot.getDate() + "qty : " + String.valueOf(capa));
                    return prodQty - chamber.getCapacityType().getCapacitySize();
                })
                .asConstraint(CHAMBER_CAPACITY);
    }

    Constraint dueDateFence(ConstraintFactory constraintFactory) {
        // Production should be finished before due date
        return constraintFactory
                .forEach(ProductionJob.class)
                .filter(job -> job.getQuantity() > 0 && job.getTimeslot().getDate().isAfter(job.getOrder().getDueDate()))
                .penalizeConfigurable()
                .asConstraint(DUE_DATE_FENCE);
    }

    Constraint bakingJob(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(ProductionJob.class)
                .groupBy(ProductionJob::getChamber, ProductionJob::getTimeslot, toList())
//                .penalize(HardMediumSoftScore.ONE_HARD, (c, t, jobList) -> {
                .penalizeConfigurable((c, t, jobList) -> {
                    boolean hasBakingJob = false;
                    int bakingJobCount = 0;
                    int score = 0;

                    for(ProductionJob job : jobList) {
                        if (!hasBakingJob && job.isBakingJob()) {
                            hasBakingJob = true;
                        }
                        if (!job.isBakingJob()) {
                            score++;
                        } else {
                            bakingJobCount++;
                        }
                    }
                    if (!hasBakingJob) {
                        return 0;
                    } else {
                        return score + bakingJobCount - 1;
                    }
                })
                .asConstraint(BAKING_JOB);
    }

    Constraint bakingOperationMax(ConstraintFactory constraintFactory) {
        // baking should be for 2 days max
        return constraintFactory
                .forEach(ProductionJob.class)
                .filter(job -> job.getChamber() != null && job.getTimeslot() != null && job.isBakingJob())
                .groupBy(ProductionJob::getChamber, ProductionJob::getOrder, toList())
                .filter((chamber, order, jobList) -> {
                    if (Math.abs(jobList.size() - 2) == 0) {
                        return false;
                    } else {
                        return true;
                    }
                })
                .penalize(HardMediumSoftScore.ONE_MEDIUM)
//                .penalize(HardMediumSoftScore.ONE_HARD, (chamber, order, jobList) -> {
//                .penalizeConfigurable((chamber, order, jobList) -> {
//                    int score = Math.abs(jobList.size() - 2);
//                    return score;
//                })
                .asConstraint(BAKING_OPERATION_MAX);
    }

/*    Constraint simultaneousProductionChamberCapacity(ConstraintFactory constraintFactory) {
        // A chamber capacity is decreased when production two items in same bucket
        return constraintFactory
                .forEach(ProductionJob.class)
                .groupBy(ProductionJob::getTimeslot, ProductionJob::getChamber, sumLong(ProductionJob::getQuantity), toSet(a -> a.getOrder().getProject()))
                .filter((ts, c, capa, ps) -> ps.size() > 1 && CapacityType.L.getCapacitySize() < capa)
                .penalize(HardMediumSoftScore.ONE_HARD)
                .asConstraint("Simultaneous production chamber capacity");
    }*/

    //Medium
    public Constraint assignJobToAChamberConstraint(ConstraintFactory constraintFactory) {
        return constraintFactory.forEachIncludingNullVars(ProductionJob.class)
                .filter(job -> job.getChamber() == null || job.getTimeslot() == null)
                .groupBy(ProductionJob::getId, count())
                .penalizeConfigurable((id, cnt) -> cnt)
                .asConstraint(ASSIGN_EVERY_JOB_TO_CHAMBER);
    }

    //Soft
    Constraint chamberUtilization(ConstraintFactory constraintFactory) {
        // It is good to use chamber capacity as many as possible
        return constraintFactory
                .forEach(ProductionJob.class)
                .join(Chamber.class, equal(ProductionJob::getChamber, c -> c))
                .groupBy((job, c) -> job.getTimeslot(), (job, c) -> c, sumLong((job, c) -> job.getQuantity()))
                .filter((tb, c, capa) -> {
                    return capa < c.getCapacityType().getCapacitySize();
                })
                .penalizeConfigurable((tb, c, capa) -> {
                    return c.getCapacityType().getCapacitySize() - capa.intValue();
                })
//                .penalize(HardMediumSoftScore.ONE_SOFT, (tb, c, capa) -> {
//                })
                .asConstraint(CHAMBER_UTILIZATION);
    }
    Constraint bakingJob2(ConstraintFactory constraintFactory) {
        // baking
        return constraintFactory
                .forEach(ProductionJob.class)
                .join(ProductionJob.class, Joiners.equal(ProductionJob::getChamber))
                .filter((job1, job2) -> {
                            if (job1 == job2) return false;
                            Duration between = Duration.ofDays((DAYS.between(job1.getTimeslot().getDate(),
                                    job2.getTimeslot().getDate())));
                            return (job1.requiresBakingJob() && job2.isBakingJob())
                                    && !between.isNegative()
                                    && between.compareTo(Duration.ofDays(1)) <= 0;
                        }
                )
//                .reward(HardMediumSoftScore.ofSoft(5))
                .rewardConfigurable()
                .asConstraint(BAKING_OPERATION);
    }
    Constraint continuousProduction(ConstraintFactory constraintFactory) {
        // It is good to produce same item continuously
        return constraintFactory
                .forEach(ProductionJob.class)
                .join(ProductionJob.class, Joiners.equal(ProductionJob::getOrder),
                        Joiners.equal(ProductionJob::getChamber))
                .filter((job1, job2) -> {
                    if (job1 == job2) return false;
                    Duration between = Duration.ofDays((DAYS.between(job1.getTimeslot().getDate(),
                            job2.getTimeslot().getDate())));
                    return !between.isNegative() && between.compareTo(Duration.ofDays(1)) <= 0;
                })
//                .reward(HardMediumSoftScore.ofSoft(10))
                .rewardConfigurable()
                .asConstraint(CONTINUOUS_PRODUCTION);
    }

    Constraint continuousProductionCategory(ConstraintFactory constraintFactory) {
        // It is good to produce same item continuously
        return constraintFactory
                .forEach(ProductionJob.class)
                .join(ProductionJob.class, Joiners.equal(ProductionJob::getChamber))
                .filter((job1, job2) -> {
                    if (job1 == job2) return false;
                    if (job1.getOrder().getProduct().getCategory() != job2.getOrder().getProduct().getCategory()) return false;
                    Duration between = Duration.ofDays((DAYS.between(job1.getTimeslot().getDate(),
                            job2.getTimeslot().getDate())));
                    return !between.isNegative() && between.compareTo(Duration.ofDays(1)) <= 0;
                })
//                .reward(HardMediumSoftScore.ONE_SOFT)
                .rewardConfigurable()
                .asConstraint(CONTINUOUS_PRODUCTION_CATEGORY);
    }

    // Calculate total consecutive production hours at the same chamber
    Constraint fillingTime(ConstraintFactory constraintFactory) {
        boolean debug = false;
        return constraintFactory.forEach(ProductionJob.class)
                .filter(job -> job.getChamber() != null && job.getTimeslot() != null)
                .groupBy(ProductionJob::getChamber, ProductionJob::getOrder, toList())
                .penalizeConfigurable((chamber, order, jobList) -> {

                    Product product = order.getProduct();
                    Phase phase = chamber.getPhase();
                    int fillingTime = 0;
                    LocalDate date1 = null;
                    LocalDate date2 = null;

                    List<ProductPhaseFillingTime> productPhaseFillingTimeList = product.getProductPhaseFillingTimeList();
                    if (productPhaseFillingTimeList == null) return 0;
                    for (ProductPhaseFillingTime ppft : productPhaseFillingTimeList) {
                        if (ppft.getProduct().getName().equals(product.getName())
                                && ppft.getPhase().getName().equals(phase.getName())) {
                            fillingTime = ppft.getFillingTime();
                        }
                    }
                    if (fillingTime == 0) {
                        return 0;
                    }
                    List<Timeslot> timeslots = jobList.stream()
                            .map(ProductionJob::getTimeslot).distinct().sorted()
                            .collect(Collectors.toList());

                    int continuousProductionDays = 1;
                    int continuousProductionHours = 0;
                    int score = 0;

                    if (timeslots.size() > 1) {
                        date1 = timeslots.get(0).getDate();
                        date2 = null;
                        for (int i=1; i< timeslots.size(); i++) {
                            date2 = timeslots.get(i).getDate();
                            if (date2.equals(date1.plusDays(1))) {
                                continuousProductionDays++;
                                date1 = date2;
                            } else {
                                break;
                            }
                        }
                    }
                    continuousProductionHours = continuousProductionDays * 24;
                    int hourDiff = continuousProductionHours - fillingTime;
                    if (hourDiff < 0) {
                        score = -hourDiff;
                    }

                    if (debug) {
                        LOGGER.debug(new StringBuilder()
                                .append("Constraint fillingTime: ")
                                .append("Chamber: " + chamber)
                                .append(", Capacity: " + chamber.getCapacityType().getCapacitySize())
                                .append(", Project: " + product)
                                .append(", \tPhase: " + phase)
                                .append(", \t\tFilling Time: " + fillingTime)
                                .append(", Timeslots: " + timeslots.size())
                                .append(", Cont. prod days: " + continuousProductionDays)
                                .append(", Cont. prod hrs: " + continuousProductionHours)
                                .append(", Hour Diff: " + hourDiff)
                                .append(", Score: " + score)
                                .toString());
                    }

                    return score;

                })
                .asConstraint(FILLING_TIME);
    }

    // FIXME simplify?
    //  by joining two jobs with the same order and chamber and check the next prod quantity small
    Constraint remainderQuantityProduction(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(ProductionJob.class)
                .join(ProductionJob.class, Joiners.equal(ProductionJob::getOrder),
                        Joiners.equal(ProductionJob::getChamber))
                .filter((job1, job2) -> {
                    if (job1 == job2) return false;
                    Duration between = Duration.ofDays((DAYS.between(job1.getTimeslot().getDate(),
                            job2.getTimeslot().getDate())));
                    return !between.isNegative() && job1.getQuantity() >= job2.getQuantity();
                })
//                .reward(HardMediumSoftScore.ofSoft(10))
                .rewardConfigurable()
                .asConstraint(REMAINDER_QUANTITY_PRODUCTION);
//        return constraintFactory
//                .forEach(ProductionJob.class)
//                .filter(job -> job.getTimeslot() != null && job.getChamber() != null)
//                .groupBy(ProductionJob::getChamber, ProductionJob::getOrder, toList())
//                .penalize(HardMediumSoftScore.ofSoft(100), (chamber, order, jobList) -> {
//                    List<ProductionJob> sortedProductionJob = jobList.stream()
//                            .sorted(Comparator.comparing(ProductionJob::getTimeslot)) // Assuming there is a getter method for the 'timeslot' field.
//                            .collect(Collectors.toList());
//                    int minProductionQuantity = jobList.stream()
//                            .mapToInt(ProductionJob::getQuantity).min().orElse(0);
//                    int score = sortedProductionJob.get(sortedProductionJob.size() -1).getQuantity() - minProductionQuantity;
//
//                    return score;
//                })
//                .asConstraint("Remainder quantity production");
    }

    Constraint chamberStability(ConstraintFactory constraintFactory) {
        //teacherRoomStability
        return constraintFactory
                .forEachUniquePair(ProductionJob.class,
                        Joiners.equal(ProductionJob::getOrder))
                .filter((job1, job2) -> job1.getChamber().getPhase().getName().equals(job2.getChamber().getPhase().getName()))
                .filter((job1, job2) -> !job1.getChamber().getName().equals(job2.getChamber().getName()))
//                .penalize(HardMediumSoftScore.ONE_SOFT)
                .penalizeConfigurable()
                .asConstraint("Chamber stability");
    }

    // TODO : refactoring if this constraint is required
/*    Constraint orderContinuousProduction(ConstraintFactory constraintFactory) {
        // An order must be produced continuously
        return constraintFactory
                .forEachUniquePair(Activity.class, equal(Activity::getOrder), equal(Activity::getChamber))
                .filter((activity1, activity2) -> {
                    int term = activity1.getTimeslot().getIndex() - activity2.getTimeslot().getIndex();
                    return term == 1 || term == -1;
                })
                .reward(HardMediumSoftScore.ONE_SOFT)
                .asConstraint("Order continuous production");
    }*/

    // TODO : refactoring if this constraint is required
/*    Constraint oneOrderProduction(ConstraintFactory constraintFactory) {
        // An order must be produced by a single chamber
        return constraintFactory
                .forEachUniquePair(Activity.class, equal(Activity::getOrder))
                .filter((activity1, activity2) -> !activity1.getChamber().equals(activity2.getChamber()))
                .penalize(HardMediumSoftScore.ONE_SOFT)
                .asConstraint("Order production");
    }*/

    // TODO : refactoring if this constraint is required
/*    Constraint itemConflict(ConstraintFactory constraintFactory) {
        // An item can not be produced by several chambers in one time bucket
        return constraintFactory
                .forEachUniquePair(Activity.class, equal(Activity::getTimeslot), equal(Activity::getItem))
                .penalize(HardMediumSoftScore.ONE_SOFT)
                .asConstraint("Item conflict");
    }*/

//    Constraint bakingOperation(ConstraintFactory constraintFactory) {
//        // baking
//        return constraintFactory
//                .forEach(ProductionJob.class)
////                .filter(job -> job.getTimeslot() != null && job.getChamber() != null)
//                .filter(job -> {
//                    LOGGER.debug("TRIGGER");
//                    if (job.getOrder().getProduct().getName().equals("Lucky")) {
//                        LOGGER.debug("BAKING JOB" + job.getOrder().getProduct().getName());
//                        LOGGER.debug("BAKING JOB" + job.getOrder().getProduct().getName());
//                        return true;
//                    } else {
//                        return false;
//                    }
//                })
////                .penalizeConfigurable()
//                .penalize(HardMediumSoftScore.ofHard(1))
//                .asConstraint(BAKING_OPERATION);
//    }

    Constraint forwardPlanning(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(ProductionJob.class)
//                .join(ProductionJob.class, Joiners.equal(ProductionJob::getChamber))
                .filter(job -> job.getTimeslot() != null && job.getChamber() != null)
                .reward(HardMediumSoftScore.ONE_SOFT, job -> {
                    int score = 0;
                    Duration between = Duration.ofDays((DAYS.between(job.getTimeslot().getDate(),
                            job.getOrder().getDueDate())));

                    if ((int) between.toDays() > 0) {
                        score = (int) between.toDays();
                    }
                    return score;
                })
                .asConstraint("ASAP");

    }

    // TODO : refactoring if this constraint is required
/*    Constraint leastStockKeepingDay(ConstraintFactory constraintFactory) {
        // It is good to reduce stock cost
        return constraintFactory
                .forEach(Activity.class)
                .filter(activity -> 0 < activity.getDueDate() - activity.getTimeslot().getIndex())
                .penalize(HardMediumSoftScore.ONE_SOFT, activity -> activity.getDueDate() - activity.getTimeslot().getIndex())
                .asConstraint("Least stock keeping day");
    }*/

}
