package ai.timefold.solver.examples.oled.domain.solver;

import ai.timefold.solver.examples.common.persistence.AbstractSolutionImporter;
import ai.timefold.solver.examples.oled.domain.*;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigInteger;
import java.time.Duration;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

import static java.time.temporal.ChronoUnit.DAYS;

public class OledUtil {
    private static final Logger LOGGER = LoggerFactory.getLogger(OledUtil.class);

    public static boolean hasRequiredEquipment(Order order, Phase phase) {
        List<ProductEquipment> productEquipmentList = order.getProduct().getProductEquipmentList();
        List<PhaseEquipment> phaseEquipmentList = phase.getPhaseEquipmentList();

        if (productEquipmentList != null && phaseEquipmentList != null) {
            for (ProductEquipment productEquipment : productEquipmentList) {
                Equipment equipment1 = productEquipment.getEquipment();
                for (PhaseEquipment phaseEquipment : phaseEquipmentList) {
                    Equipment equipment2 = phaseEquipment.getEquipment();
                    if (equipment1.equals(equipment2)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public static void allocateProductionJob(OledSchedule schedule, int splitSize, boolean addBakingJob) {
        List<ProductionJob> productionJobList = new ArrayList<>();
        long id = 0L;

        for (Order order : schedule.getOrderList()) {
            int qty = order.getQuantity();
            int activityChunk = qty / splitSize;
            int activityRemainder = qty % splitSize;
            for (int i = 0; i < activityChunk; i++) {
                ProductionJob newProductionJob = new ProductionJob(id++, order, splitSize);
                productionJobList.add(newProductionJob);
            }
            if (activityRemainder > 0) {
                ProductionJob newProductionJob = new ProductionJob(id++, order, activityRemainder);
                productionJobList.add(newProductionJob);
            }
            if (addBakingJob) {
                if (order.getProduct().requiresBaking()) {
                    ProductionJob bakingJob1 = new ProductionJob(id++, order, 0);
                    ProductionJob bakingJob2 = new ProductionJob(id++, order, 0);
                    productionJobList.add(bakingJob1);
                    productionJobList.add(bakingJob2);
                }
            }
        }
        schedule.setProductionJobList(productionJobList);
    }

    public static List<UnavailableTimeslotPenalty> generateUnavailableTimeslotPenaltyList(OledSchedule schedule, Product product, int days) {
        Random random = new Random(0L);
        List<Chamber> chamberList = schedule.getChamberList();
        List<Timeslot> timeslotList = schedule.getTimeslotList();
        List<UnavailableTimeslotPenalty> unavailableTimeslotPenaltyList = new ArrayList<>(days);
        long penaltyId = 0L;
        for (Chamber chamber : chamberList) {
            for (int i = 0; i < days; i++) {
                UnavailableTimeslotPenalty penalty = new UnavailableTimeslotPenalty(
                        penaltyId++, chamber, timeslotList.get(random.nextInt(timeslotList.size())));
                unavailableTimeslotPenaltyList.add(penalty);
            }
        }
        return unavailableTimeslotPenaltyList;
    }

    public static UnavailableTimeslotPenalty getUnavailableTimeslotPenalty(
            OledSchedule schedule, Chamber chamber, Timeslot timeslot) {
        for(UnavailableTimeslotPenalty penalty : schedule.getUnavailableTimeslotPenaltyList()) {
            if (penalty.getChamber() == chamber && penalty.getTimeslot() == timeslot) {
                return penalty;
            }
        }
        return null;
    }

    public static void allocateMaintenanceJob(OledSchedule schedule, Product product) {
        List<UnavailableTimeslotPenalty> unavailableTimeslotPenaltyList = schedule.getUnavailableTimeslotPenaltyList();

        List<Order> orderList = schedule.getOrderList();
        List<Timeslot> timeslotList = schedule.getTimeslotList();
        LocalDate maxDate = timeslotList.get(timeslotList.size() - 1).getDate();
        List<ProductionJob> productionJobList = schedule.getProdutionJobList();

        Order order = new Order(orderList.size(), "OPS", product,
                maxDate, CapacityType.L.getCapacitySize() * unavailableTimeslotPenaltyList.size());
        orderList.add(order);

        long jobId = (long) productionJobList.size();
        for (UnavailableTimeslotPenalty penalty: unavailableTimeslotPenaltyList) {
            ProductionJob job = new ProductionJob(jobId++, order, CapacityType.L.getCapacitySize());
            job.setChamber(penalty.getChamber());
            job.setTimeslot(penalty.getTimeslot());
            job.setPinned(true);
            productionJobList.add(job);
        }
    }

    public static void printResult(OledSchedule schedule) {
        printProductionSchedule(schedule);
        printChamberSummary(schedule);
        printChamberStats(schedule);
        printOrderSummary(schedule);
    }

    public static void printProductionSchedule(OledSchedule schedule) {
        String splitter = "├" + "────────────│".repeat(schedule.getTimeslotList().size() + 1);
        LOGGER.info("");
        LOGGER.info("*** OLED SCHEDULE");
        LOGGER.info(splitter);
        LOGGER.info("│            │ " +
                schedule.getTimeslotList().stream()
                        .map(timeslot -> String.format("%-10s", "Index " + schedule.getTimeslotList().indexOf(timeslot)))
                        .collect(Collectors.joining(" │ ")) + " │");
        LOGGER.info("│            │ " +
                schedule.getTimeslotList().stream()
                        .map(timeslot -> String.format("%-10s", timeslot.getDate()))
                        .collect(Collectors.joining(" │ ")) + " │");
        LOGGER.info(splitter);

        Map<Chamber, Map<Timeslot, List<ProductionJob>>> activityMap = schedule.getProdutionJobList().stream()
                .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                .collect(Collectors.groupingBy(ProductionJob::getChamber, Collectors.groupingBy(ProductionJob::getTimeslot)));

        for (Chamber chamber : schedule.getChamberList()) {
            List<Map<Order, Integer>> cellList = schedule.getTimeslotList().stream().map(timeslot -> {
                        Map<Timeslot, List<ProductionJob>> byTimeslotMap = activityMap.get(chamber);
                        if (byTimeslotMap == null) {
                            return Collections.<Order, Integer>emptyMap();
                        }
                        List<ProductionJob> cellProductionJobList = byTimeslotMap.get(timeslot);
                        if (cellProductionJobList == null) {
                            return Collections.<Order, Integer>emptyMap();
                        }
                        Map<Order, Integer> orderQuantityMap = cellProductionJobList.stream()
                                .collect((Collectors.toMap(
                                        ProductionJob::getOrder,
                                        ProductionJob::getQuantity,
                                        Integer::sum
                                )));
                        SortedMap<Order, Integer> sortedOrderQuantityMap = new TreeMap<>(orderQuantityMap);
                        return sortedOrderQuantityMap;
                    }
            ).toList();
            LOGGER.info("│ " +
                    String.format("%-10s", chamber.getPhase().getName()) + " │ " +
                    cellList.stream()
                            .map(cellActivityList -> {
                                // Sort the entries of the SortedMap based on Order keys
                                List<String> sortedEntries = cellActivityList.entrySet().stream()
                                        .sorted(Map.Entry.comparingByKey(Comparator.comparing(Order::getName)))
                                        .map(cellData -> cellData.getKey().getName() + " : " +
                                                cellData.getKey().getProduct().getName())
                                        .collect(Collectors.toList());

                                return String.format("%-10s", String.join(", ", sortedEntries));
                            })
                            .collect(Collectors.joining(" │ ")) + " │");
            LOGGER.info("│ " +
                    String.format("%-10s", chamber.getName()) + " │ " +
                    cellList.stream()
                            .map(cellActivityList -> String.format("%-10s", cellActivityList.entrySet().stream()
                                    .map(cellData -> cellData.getValue().toString())
                                    .collect(Collectors.joining(", "))))
                            .collect(Collectors.joining(" │ ")) + " │");
            LOGGER.info(splitter);
        }

        List<ProductionJob> unassignedActivities = schedule.getProdutionJobList().stream()
                .filter(activity -> activity.getChamber() == null || activity.getTimeslot() == null).toList();
        if (!unassignedActivities.isEmpty()) {
            LOGGER.info("");
            LOGGER.info("Unassigned activities");
            for (ProductionJob productionJob : unassignedActivities) {
                LOGGER.info(" - " + productionJob.getOrder().getName() + " - " + productionJob.getOrder());
            }
        }
    }

    public static void printChamberSummary(OledSchedule schedule) {
        String splitter = "├" + "────────────│".repeat(schedule.getTimeslotList().size() + 1);
        LOGGER.info("");
        LOGGER.info("*** CHAMBER UTILIZATION SUMMARY");
        LOGGER.info(splitter);
        LOGGER.info("│            │ " +
                schedule.getTimeslotList().stream()
                        .map(timeslot -> String.format("%-10s", "Index " + schedule.getTimeslotList().indexOf(timeslot)))
                        .collect(Collectors.joining(" │ ")) + " │");
        LOGGER.info("│            │ " +
                schedule.getTimeslotList().stream()
                        .map(timeslot -> String.format("%-10s", timeslot.getDate()))
                        .collect(Collectors.joining(" │ ")) + " │");
        LOGGER.info(splitter);

        Map<Chamber, Map<Timeslot, List<ProductionJob>>> chamberAssignMap = schedule.getProdutionJobList().stream()
                .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                .collect(Collectors.groupingBy(ProductionJob::getChamber, Collectors.groupingBy(ProductionJob::getTimeslot)));

        for (Chamber chamber : schedule.getChamberList()) {
            LOGGER.info("| " +
                    String.format("%-10s", chamber.getPhase().getName()) + " │ " +
                    schedule.getTimeslotList().stream()
                            .map(timeslot -> String.format("%,10d", chamber.getCapacityType().getCapacitySize()))
                            .collect(Collectors.joining(" | ")) + " |");
            LOGGER.info("| " +
                    String.format("%-10s", chamber.getName()) + " │ " +
                    schedule.getTimeslotList().stream()
                            .map(timeslot -> {
                                int productionQuantity = 0;
                                Map<Timeslot, List<ProductionJob>> byTimeslotMap = chamberAssignMap.get(chamber);
                                if (byTimeslotMap != null) {
                                    List<ProductionJob> activities = byTimeslotMap.get(timeslot);
                                    if (activities != null) {
                                        productionQuantity = activities.stream().mapToInt(ProductionJob::getQuantity).sum();
                                    }
                                }
                                return String.format("%,10d", productionQuantity);
                            })
                            .collect(Collectors.joining(" | ")) + " |");
            LOGGER.info("| " +
                    String.format("%-10s", "") + " │ " +
                    schedule.getTimeslotList().stream()
                            .map(timeslot -> {
                                int productionQuantity = 0;
                                double productionUtilizationPct = 0.0;
                                Map<Timeslot, List<ProductionJob>> byTimeslotMap = chamberAssignMap.get(chamber);
                                if (byTimeslotMap != null) {
                                    List<ProductionJob> activities = byTimeslotMap.get(timeslot);
                                    if (activities != null) {
                                        productionQuantity = activities.stream().mapToInt(ProductionJob::getQuantity).sum();
                                        productionUtilizationPct = (double) productionQuantity / chamber.getCapacityType().getCapacitySize() * 100.0;
                                    }
                                }
                                return String.format("%,9.1f", productionUtilizationPct) + "%";
                            })
                            .collect(Collectors.joining(" | ")) + " |");
            LOGGER.info(splitter);
        }
    }

    public static void printChamberStats(OledSchedule schedule) {
        LOGGER.info("*** CHAMBER UTILIZATION STATS");
        List<String> columns = Arrays.asList(
                "CHAMBER",
                "DAYS",
                "USED",
                "<= CAPA",
                ">  CAPA",
                "TOT CAPA",
                "TOT PROD",
                "TOT UTIL",
                "AVG PROD"
        );
        String splitter = "├" + "────────────│".repeat(columns.size());

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) schedule.getTimeslotList().size() * schedule.getChamberList().size())
                        .pow(schedule.getProdutionJobList().size());
        LOGGER.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                "oled-schedule1",
                schedule.getProdutionJobList().size(),
                schedule.getTimeslotList().size(),
                schedule.getChamberList().size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));
        LOGGER.info("SCORE: " + schedule.getScore().toString());
        LOGGER.info(splitter);
        LOGGER.info("| " +
                columns.stream()
                        .map(column -> String.format("%-10s", column))
                        .collect(Collectors.joining(" | ")) + " |");
        LOGGER.info(splitter);

        Map<Chamber, Map<Timeslot, Integer>> chamberTimeslotSum = schedule.getProdutionJobList().stream()
                .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                .collect(Collectors.groupingBy(
                        ProductionJob::getChamber,
                        Collectors.groupingBy(
                                ProductionJob::getTimeslot,
                                Collectors.summingInt(ProductionJob::getQuantity))));
        for (Chamber chamber : schedule.getChamberList()) {
            Map<Timeslot, Integer> timeslotSum = chamberTimeslotSum.getOrDefault(chamber, Collections.emptyMap());
            int daysOfPossibleProduction = schedule.getTimeslotList().size();
            int daysOfProduction = timeslotSum.size();
            int chamberCapacity = chamber.getCapacityType().getCapacitySize();
            int totalChamberCapacity = chamberCapacity * daysOfPossibleProduction;
            int totalProductionQuantity = timeslotSum.values().stream().mapToInt(Integer::intValue).sum();
            double averageProductionQuantity = timeslotSum.values().stream()
                    .mapToInt(Integer::intValue).average().orElse(0.0);
            double totalUtilizationPct = (double) totalProductionQuantity / totalChamberCapacity * 100.0;
            int daysUnderCapacity = 0;
            int daysOverCapacity = 0;
            for (int quantity : timeslotSum.values()) {
                if (quantity <= chamberCapacity) {
                    daysUnderCapacity++;
                } else if (quantity > chamberCapacity) {
                    daysOverCapacity++;
                }
            }
            String chamberStats = "| " +
                    String.format("%-10s", chamber.getName()) + " | " +
                    String.format("%,10d", daysOfPossibleProduction) + " | " +
                    String.format("%,10d", daysOfProduction) + " | " +
                    String.format("%,10d", daysUnderCapacity) + " | " +
                    String.format("%,10d", daysOverCapacity) + " | " +
                    String.format("%,10d", totalChamberCapacity) + " | " +
                    String.format("%,10d", totalProductionQuantity) + " | " +
                    String.format("%,9.2f", totalUtilizationPct) + "% | " +
                    String.format("%,10.2f", averageProductionQuantity) + " |";
            LOGGER.info((chamberStats));
        }
        LOGGER.info(splitter);
    }

    public static void printOrderSummary(OledSchedule schedule) {
        List<String> columns = Arrays.asList(
                "ORDER",
                "DUE DATE",
                "PROJECT",
                "ORDER QTY",
                "PROD QTY",
                "OF(%)",
                "BEGIN",
                "END",
                "DAYS",
                "HOURS",
//                "FILLING TIME",
                "CHAMBERS");
        String splitter = "├" + "────────────│".repeat(columns.size() - 1) +
//                StringUtils.repeat("─", 42) + "| " +
                StringUtils.repeat("─", 42) + "|";

        LOGGER.info("");
        LOGGER.info("*** ORDER SUMMARY");
        LOGGER.info(splitter);
        LOGGER.info("| " +
                        columns.subList(0, columns.size() - 1).stream()
                                .map(column -> String.format("%-10s", column))
                                .collect(Collectors.joining(" | ")) +
                        " | " +
//                String.format("%-30s","") + " | " +
//                        String.format("%-40s",columns.get(columns.size()-2)) + " | " +
                        String.format("%-40s", columns.get(columns.size() - 1)) + " |"
        );
        LOGGER.info(splitter);

        for (Order order : schedule.getOrderList()) {
            String orderSummary = "│ " +
                    String.format("%-10s", order.getName()) + " │ " +
                    String.format("%-10s", order.getDueDate()) + " │ " +
                    String.format("%-10s", order.getProduct().getName()) + " │ " +
                    String.format("%,10d", order.getQuantity()) + " │ ";

            List<ProductionJob> scheduledActivities = schedule.getProdutionJobList().stream()
                    .filter(activity -> activity.getOrder().getId() == order.getId()
                            && activity.getChamber() != null && activity.getTimeslot() != null)
                    .collect(Collectors.toList());

            Map<Order, Map<Chamber, Integer>> orderChamberSum = schedule.getProdutionJobList().stream()
                    .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                    .collect(Collectors.groupingBy(
                            ProductionJob::getOrder,
                            Collectors.groupingBy(
                                    ProductionJob::getChamber,
                                    Collectors.summingInt(ProductionJob::getQuantity))));

            if (scheduledActivities.size() > 0) {
                List<Chamber> chamberList = scheduledActivities.stream()
                        .map(ProductionJob::getChamber).distinct()
                        .sorted(Comparator.comparing(Chamber::getName))
                        .collect(Collectors.toList());
                List<String> chambers = new ArrayList<>();
                Map<Chamber, Integer> chamberSum = orderChamberSum.getOrDefault(order, Collections.emptyMap());
                int productionQuantity = scheduledActivities.stream().mapToInt(ProductionJob::getQuantity).sum();
                double orderFulfillmentPct = (double) productionQuantity / order.getQuantity() * 100.0;
                List<Timeslot> timeslots = scheduledActivities.stream().map(ProductionJob::getTimeslot).sorted().toList();
                LocalDate productionBegin = timeslots.get(0).getDate();
                LocalDate productionEnd = timeslots.get(timeslots.size() - 1).getDate();
                Duration productionDuration = Duration.ofDays((DAYS.between(productionBegin, productionEnd.plusDays(1))));
//                String productionChambers = scheduledActivities.stream()
//                        .map(ProductionJob::getChamber)
//                        .map(Chamber::getName).distinct().sorted()
//                        .collect(Collectors.joining(","));
                for (Chamber chamber : chamberList) {
                    chambers.add(chamber.getName() + "(" + String.format("%,d", chamberSum.get(chamber)) + ")");
                }
                String productionChambers = chambers.stream().collect(Collectors.joining(", "));

                orderSummary = orderSummary +
                        String.format("%,10d", productionQuantity) + " │ " +
                        String.format("%,9.2f", orderFulfillmentPct) + "% | " +
                        String.format("%-10s", productionBegin) + " │ " +
                        String.format("%-10s", productionEnd) + " │ " +
                        String.format("%,10d", productionDuration.toDays()) + " │ " +
                        String.format("%,10d", productionDuration.toHours()) + " │ " +
                        String.format("%-40s", productionChambers) + " │";
            } else {
                orderSummary = orderSummary +
                        String.format("%-10s", "") + " │ " + //productionQuantity
                        String.format("%-10s", "") + " │ " + //orderFulfillmentPct
                        String.format("%-10s", "") + " │ " + //productionBegin
                        String.format("%-10s", "") + " │ " + //productionEnd
                        String.format("%-10s", "") + " │ " + //productionDuration.toDays()
                        String.format("%-10s", "") + " │ " + //productionDuration.toHours()
                        String.format("%-40s", "") + " │"; // productionChambers
            }
            LOGGER.info(orderSummary);
        }
        LOGGER.info(splitter);
    }

    private OledUtil() {
        // private constructor
    }

}
