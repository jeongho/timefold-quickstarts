package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.constraintweight.ConstraintConfiguration;
import ai.timefold.solver.core.api.domain.constraintweight.ConstraintWeight;
import ai.timefold.solver.core.api.score.buildin.hardmediumsoft.HardMediumSoftScore;
import ai.timefold.solver.examples.common.domain.AbstractPersistable;

@ConstraintConfiguration(constraintPackage = "ai.timefold.solver.examples.oled.score")
public class OledConstraintConfiguration extends AbstractPersistable {

    //Hard
    public static final String REQUIRED_EQUIPMENT = "Producible product";
    public static final String UNAVAILABLE_TIMESLOT_PENALTY = "Unavailable timeslot penalty";
    public static final String CHAMBER_CAPACITY = "Chamber capacity";
    public static final String DUE_DATE_FENCE = "Due date";
    public static final String BAKING_JOB = "Baking job";
    public static final String BAKING_OPERATION = "Baking operation";
    public static final String BAKING_OPERATION_MAX = "Baking max 2 days";
    //Medium
    public static final String ASSIGN_EVERY_JOB_TO_CHAMBER = "Assign every job to chamber";
    //Soft
    public static final String CONTINUOUS_PRODUCTION = "Continuous production";
    public static final String CONTINUOUS_PRODUCTION_CATEGORY = "Continuous production category";
    public static final String FILLING_TIME = "Filling time";
    public static final String CHAMBER_UTILIZATION = "Chamber utilization";
    public static final String REMAINDER_QUANTITY_PRODUCTION = "Remainder quantity production";
    public static final String CHAMBER_STABILITY = "Chamber stability";

    @ConstraintWeight(REQUIRED_EQUIPMENT)
    private HardMediumSoftScore requiredEquipment = HardMediumSoftScore.ofHard(1);
    @ConstraintWeight(UNAVAILABLE_TIMESLOT_PENALTY)
    private HardMediumSoftScore unavailableTimeslotPenalty = HardMediumSoftScore.ofHard(1);
    @ConstraintWeight(CHAMBER_CAPACITY)
    private HardMediumSoftScore chamberCapacity = HardMediumSoftScore.ofHard(1);
    @ConstraintWeight(DUE_DATE_FENCE)
    private HardMediumSoftScore dueDateFence = HardMediumSoftScore.ofHard(1);
    @ConstraintWeight(BAKING_JOB)
    private HardMediumSoftScore bakingJob = HardMediumSoftScore.ofHard(1);
    @ConstraintWeight(BAKING_OPERATION_MAX)
    private HardMediumSoftScore bakingOperationMax = HardMediumSoftScore.ofHard(1);

    @ConstraintWeight(ASSIGN_EVERY_JOB_TO_CHAMBER)
    private HardMediumSoftScore assignEveryJobToChamber = HardMediumSoftScore.ofMedium(1);

    @ConstraintWeight(CHAMBER_UTILIZATION)
    private HardMediumSoftScore chamberUtilization = HardMediumSoftScore.ofSoft(1);
    @ConstraintWeight(BAKING_OPERATION)
    private HardMediumSoftScore bakingOperation = HardMediumSoftScore.ofSoft(5);
    @ConstraintWeight(CONTINUOUS_PRODUCTION)
    private HardMediumSoftScore continuousProduction = HardMediumSoftScore.ofSoft(10);
    @ConstraintWeight(CONTINUOUS_PRODUCTION_CATEGORY)
    private HardMediumSoftScore continuousProductionCategory = HardMediumSoftScore.ofSoft(1);
    @ConstraintWeight(FILLING_TIME)
    private HardMediumSoftScore fillingTime = HardMediumSoftScore.ofSoft(1);
    @ConstraintWeight(REMAINDER_QUANTITY_PRODUCTION)
    private HardMediumSoftScore remainderQuantityProduction = HardMediumSoftScore.ofSoft(10);
    @ConstraintWeight(CHAMBER_STABILITY)
    private HardMediumSoftScore chamberStability = HardMediumSoftScore.ofSoft(1);


    public OledConstraintConfiguration() {
    }

    public OledConstraintConfiguration(long id) {
        super(id);
    }

    // ************************************************************************
    // Simple getters and setters
    // ************************************************************************

    public HardMediumSoftScore getRequiredEquipment() {
        return requiredEquipment;
    }
    public HardMediumSoftScore getUnavailableTimeslotPenalty() { return unavailableTimeslotPenalty; }

    public HardMediumSoftScore getChamberCapacity() {
        return chamberCapacity;
    }
    public HardMediumSoftScore getDueDateFence() {
        return dueDateFence;
    }
    public HardMediumSoftScore getBakingJob() { return bakingJob; }
    public HardMediumSoftScore getBakingOperationMax() { return bakingOperationMax; }

    public HardMediumSoftScore getAssignEveryJobToChamber() {
        return assignEveryJobToChamber;
    }

    public HardMediumSoftScore getChamberUtilization() { return chamberUtilization; }
    public HardMediumSoftScore getBakingOperation() { return bakingOperation; }
    public HardMediumSoftScore getContinuousProduction() {
        return continuousProduction;
    }
    public HardMediumSoftScore getContinuousProductionCategory() {
        return continuousProductionCategory;
    }
    public HardMediumSoftScore getFillingTime() {
        return fillingTime;
    }
    public HardMediumSoftScore getRemainderQuantityProduction() { return remainderQuantityProduction; }
    public HardMediumSoftScore getChamberStability() { return chamberStability; }

    public void setRequiredEquipment(HardMediumSoftScore requiredEquipment) {
        this.requiredEquipment = requiredEquipment;
    }
    public void setUnavailableTimeslotPenalty(HardMediumSoftScore unavailableTimeslotPenalty) {
        this.unavailableTimeslotPenalty = unavailableTimeslotPenalty;
    }
    public void setChamberCapacity(HardMediumSoftScore chamberCapacity) {
        this.chamberCapacity = chamberCapacity;
    }
    public void setDueDateFence(HardMediumSoftScore dueDateFence) {
        this.dueDateFence = dueDateFence;
    }
    public void setBakingJob(HardMediumSoftScore bakingJob) { this.bakingJob = bakingJob; }
    public void setBakingOperationMax(HardMediumSoftScore bakingOperationMax) {
        this.bakingOperationMax = bakingOperationMax;
    }

    public void setAssignEveryJobToChamber(HardMediumSoftScore assignEveryJobToChamber) {
        this.assignEveryJobToChamber = assignEveryJobToChamber;
    }

    public void setChamberUtilization(HardMediumSoftScore chamberUtilization) {
        this.chamberUtilization = chamberUtilization;
    }
    public void setBakingOperation(HardMediumSoftScore bakingOperation) {
        this.bakingOperation = bakingOperation;
    }
    public void setContinuousProduction(HardMediumSoftScore continuousProduction) {
        this.continuousProduction = continuousProduction;
    }
    public void setContinuousProductionCategory(HardMediumSoftScore continuousProductionCategory) {
        this.continuousProductionCategory = continuousProductionCategory;
    }
    public void setFillingTime(HardMediumSoftScore fillingTime) {
        this.fillingTime = fillingTime;
    }
    public void setRemainderQuantityProduction(HardMediumSoftScore remainderQuantityProduction) {
        this.remainderQuantityProduction = remainderQuantityProduction;
    }
    public void setChamberStability(HardMediumSoftScore chamberStability) {
        this.chamberStability = chamberStability;
    }

}
