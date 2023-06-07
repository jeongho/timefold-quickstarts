package ai.timefold.solver.examples.oled.swingui;

import ai.timefold.solver.examples.common.swingui.CommonIcons;
import ai.timefold.solver.examples.common.swingui.SolutionPanel;
import ai.timefold.solver.examples.common.swingui.components.LabeledComboBoxRenderer;
import ai.timefold.solver.examples.common.swingui.timetable.TimeTablePanel;
import ai.timefold.solver.examples.common.util.Pair;
import ai.timefold.solver.examples.oled.domain.*;
import ai.timefold.solver.examples.oled.domain.solver.OledUtil;
import ai.timefold.solver.swing.impl.SwingUtils;
import ai.timefold.solver.swing.impl.TangoColorFactory;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.time.Duration;
import java.time.LocalDate;
import java.util.List;
import java.util.*;
import java.util.stream.Collectors;

import static ai.timefold.solver.examples.common.swingui.timetable.TimeTablePanel.HeaderColumnKey.HEADER_COLUMN;
import static ai.timefold.solver.examples.common.swingui.timetable.TimeTablePanel.HeaderColumnKey.HEADER_COLUMN_GROUP1;
import static ai.timefold.solver.examples.common.swingui.timetable.TimeTablePanel.HeaderRowKey.HEADER_ROW;
import static java.time.temporal.ChronoUnit.DAYS;

public class OledPanel extends SolutionPanel<OledSchedule> {

    public static final String LOGO_PATH = "/ai/timefold/solver/examples/oled/swingui/oledLogo.png";

    private final TimeTablePanel<Timeslot, Chamber> chambersPanel;
    private final TimeTablePanel<Timeslot, Chamber> chamberSummary;
    private final TimeTablePanel<String, Chamber> chamberUtilization;
    private final TimeTablePanel<String, Order> orderSummary;

    public OledPanel() {
        setLayout(new BorderLayout());
        JTabbedPane tabbedPane = new JTabbedPane();
        chambersPanel = new TimeTablePanel<>();
        tabbedPane.add("Chambers", new JScrollPane(chambersPanel));
        chamberSummary = new TimeTablePanel<>();
        tabbedPane.add("Chamber Summary", new JScrollPane(chamberSummary));
        chamberUtilization = new TimeTablePanel<>();
        tabbedPane.add("Chamber Utilization", new JScrollPane(chamberUtilization));
        orderSummary = new TimeTablePanel<>();
        tabbedPane.add("Order Summary", new JScrollPane(orderSummary));
        add(tabbedPane, BorderLayout.CENTER);
        setPreferredSize(PREFERRED_SCROLLABLE_VIEWPORT_SIZE);
    }

    @Override
    public boolean isWrapInScrollPane() { return false; }

    @Override
    public void resetPanel(OledSchedule oledSchedule) {
        chambersPanel.reset();
        chamberSummary.reset();
        chamberUtilization.reset();
        orderSummary.reset();
        defineGrid(oledSchedule);
        fillCells(oledSchedule);
        repaint(); // Hack to force a repaint of TimeTableLayout during "refresh screen while solving"
    }

    private void defineGrid(OledSchedule oledSchedule) {
        JButton footprint = SwingUtils.makeSmallButton(new JButton("99999999"));
        int footprintWidth = footprint.getPreferredSize().width;

        chambersPanel.defineColumnHeaderByKey(HEADER_COLUMN_GROUP1); // Phase header
        chambersPanel.defineColumnHeaderByKey(HEADER_COLUMN); // Chamber Header

        chamberSummary.defineColumnHeaderByKey(HEADER_COLUMN_GROUP1); // Phase header
        chamberSummary.defineColumnHeaderByKey(HEADER_COLUMN); // Chamber Header

        for (Timeslot timeslot : oledSchedule.getTimeslotList()) {
            chambersPanel.defineColumnHeader(timeslot);
            chamberSummary.defineColumnHeader(timeslot);
        }
        chambersPanel.defineColumnHeader(null); // Unassigned

        // Chamber Utilization
        chamberUtilization.defineColumnHeaderByKey(HEADER_COLUMN_GROUP1); // Phase header
        chamberUtilization.defineColumnHeaderByKey(HEADER_COLUMN);
        chamberUtilization.defineColumnHeader("DAYS");
        chamberUtilization.defineColumnHeader("USED");
        chamberUtilization.defineColumnHeader("<= CAPA");
        chamberUtilization.defineColumnHeader("> CAPA");
        chamberUtilization.defineColumnHeader("TOT CAPA");
        chamberUtilization.defineColumnHeader("TOT PROD");
        chamberUtilization.defineColumnHeader("TOT UTIL");
        chamberUtilization.defineColumnHeader("AVG PROD");

        // Order Summary
        orderSummary.defineColumnHeaderByKey(HEADER_COLUMN);
        orderSummary.defineColumnHeader("DUE DATE");
        orderSummary.defineColumnHeader("PRODUCT");
        orderSummary.defineColumnHeader("ORDER QTY");
        orderSummary.defineColumnHeader("PROD QTY");
        orderSummary.defineColumnHeader("OF(%)");
        orderSummary.defineColumnHeader("BEGIN");
        orderSummary.defineColumnHeader("END");
        orderSummary.defineColumnHeader("DAYS");
        orderSummary.defineColumnHeader("HOURS");
        orderSummary.defineColumnHeader("CHAMBERS");

        // row
        chambersPanel.defineRowHeaderByKey(HEADER_ROW); // Time header
        chamberSummary.defineRowHeaderByKey(HEADER_ROW);
        chamberUtilization.defineRowHeaderByKey(HEADER_ROW);
        for (Chamber chamber : oledSchedule.getChamberList()) {
            chambersPanel.defineRowHeader(chamber);
            chamberSummary.defineRowHeader(chamber);
            chamberUtilization.defineRowHeader(chamber);
        }

        orderSummary.defineRowHeaderByKey(HEADER_ROW);
        for (Order order : oledSchedule.getOrderList()) {
            orderSummary.defineRowHeader(order);
        }
        chambersPanel.defineRowHeader(null, footprintWidth); // Unassigned
    }

    private void fillCells(OledSchedule oledSchedule) {
        chambersPanel.addCornerHeader(HEADER_COLUMN_GROUP1, HEADER_ROW, createTableHeader(new JLabel("Phase"), null));
        chambersPanel.addCornerHeader(HEADER_COLUMN, HEADER_ROW, createTableHeader(new JLabel("Chamber"), null));
        chamberSummary.addCornerHeader(HEADER_COLUMN_GROUP1, HEADER_ROW, createTableHeader(new JLabel("Phase"), null));
        chamberSummary.addCornerHeader(HEADER_COLUMN, HEADER_ROW, createTableHeader(new JLabel("Chamber"), null));
        chamberUtilization.addCornerHeader(HEADER_COLUMN_GROUP1, HEADER_ROW, createTableHeader(new JLabel("Phase"), null));
        chamberUtilization.addCornerHeader(HEADER_COLUMN, HEADER_ROW, createTableHeader(new JLabel("Chamber"), null));
        orderSummary.addCornerHeader(HEADER_COLUMN, HEADER_ROW, createTableHeader(new JLabel("Order"), null));
        fillChamberCells(oledSchedule);
        fillTimeslotCells(oledSchedule);
        fillProductionJobCells(oledSchedule);
        fillChamberSummary(oledSchedule);
        fillOrderSummary(oledSchedule);
    }

    private void fillTimeslotCells(OledSchedule oledSchedule) {
        for (Timeslot timeslot : oledSchedule.getTimeslotList()) {
            chambersPanel.addColumnHeader(timeslot, HEADER_ROW,
                    createTableHeader(new JLabel(timeslot.getDate().toString(), SwingConstants.CENTER), null));
            chamberSummary.addColumnHeader(timeslot, HEADER_ROW,
                    createTableHeader(new JLabel(timeslot.getDate().toString(), SwingConstants.CENTER), null));
        }
        chambersPanel.addColumnHeader(null, HEADER_ROW,
                createTableHeader(new JLabel("Unassigned", SwingConstants.CENTER), null));

        chamberUtilization.addColumnHeader("DAYS", HEADER_ROW,
                createTableHeader(new JLabel("DAYS", SwingConstants.CENTER), null));
        chamberUtilization.addColumnHeader("USED", HEADER_ROW,
                createTableHeader(new JLabel("USED", SwingConstants.CENTER), null));
        chamberUtilization.addColumnHeader("<= CAPA", HEADER_ROW,
                createTableHeader(new JLabel("<= CAPA", SwingConstants.CENTER), null));
        chamberUtilization.addColumnHeader("> CAPA", HEADER_ROW,
                createTableHeader(new JLabel("> CAPA", SwingConstants.CENTER), null));
        chamberUtilization.addColumnHeader("TOT CAPA", HEADER_ROW,
                createTableHeader(new JLabel("TOT CAPA", SwingConstants.CENTER), null));
        chamberUtilization.addColumnHeader("TOT PROD", HEADER_ROW,
                createTableHeader(new JLabel("TOT PROD", SwingConstants.CENTER), null));
        chamberUtilization.addColumnHeader("TOT UTIL", HEADER_ROW,
                createTableHeader(new JLabel("TOT UTIL", SwingConstants.CENTER), null));
        chamberUtilization.addColumnHeader("AVG PROD", HEADER_ROW,
                createTableHeader(new JLabel("AVG PROD", SwingConstants.CENTER), null));

        orderSummary.addColumnHeader("DUE DATE", HEADER_ROW,
                createTableHeader(new JLabel("DUE DATE", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("PRODUCT", HEADER_ROW,
                createTableHeader(new JLabel("PRODUCT", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("ORDER QTY", HEADER_ROW,
                createTableHeader(new JLabel("ORDER QTY", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("PROD QTY", HEADER_ROW,
                createTableHeader(new JLabel("PROD QTY", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("OF(%)", HEADER_ROW,
                createTableHeader(new JLabel("OF(%)", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("BEGIN", HEADER_ROW,
                createTableHeader(new JLabel("BEGIN", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("END", HEADER_ROW,
                createTableHeader(new JLabel("END", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("DAYS", HEADER_ROW,
                createTableHeader(new JLabel("DAYS", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("HOURS", HEADER_ROW,
                createTableHeader(new JLabel("HOURS", SwingConstants.CENTER), null));
        orderSummary.addColumnHeader("CHAMBERS", HEADER_ROW,
                createTableHeader(new JLabel("CHAMBERS", SwingConstants.CENTER), null));
    }

    private void fillChamberCells(OledSchedule oledSchedule) {
        chambersPanel.addRowHeader(HEADER_COLUMN_GROUP1, null, HEADER_COLUMN, null,
                createTableHeader(new JLabel("Unassigned", SwingConstants.CENTER), null));
        for (Phase phase : oledSchedule.getPhaseList()) {
            List<Chamber> phaseChamberList = new ArrayList<>();
            for (Chamber chamber : oledSchedule.getChamberList()) {
                if (phase.getName() == chamber.getPhase().getName()) {
                    phaseChamberList.add(chamber);
                }
            }
            chambersPanel.addRowHeader(HEADER_COLUMN_GROUP1, phaseChamberList.get(0),
                    HEADER_COLUMN_GROUP1, phaseChamberList.get(phaseChamberList.size() - 1),
                    createTableHeader(new JLabel(phase.getName(), SwingConstants.CENTER), null));
            chamberSummary.addRowHeader(HEADER_COLUMN_GROUP1, phaseChamberList.get(0),
                    HEADER_COLUMN_GROUP1, phaseChamberList.get(phaseChamberList.size() - 1),
                    createTableHeader(new JLabel(phase.getName(), SwingConstants.CENTER), null));
            chamberUtilization.addRowHeader(HEADER_COLUMN_GROUP1, phaseChamberList.get(0),
                    HEADER_COLUMN_GROUP1, phaseChamberList.get(phaseChamberList.size() - 1),
                    createTableHeader(new JLabel(phase.getName(), SwingConstants.CENTER), null));
            for (Chamber chamber : oledSchedule.getChamberList()) {
                if (phase.getName() == chamber.getPhase().getName()) {
                    chambersPanel.addRowHeader(HEADER_COLUMN, chamber,
                    createTableHeader(new JLabel(chamber.getName(), SwingConstants.CENTER), null));
                    chamberSummary.addRowHeader(HEADER_COLUMN, chamber,
                            createTableHeader(new JLabel(chamber.getName(), SwingConstants.CENTER), null));
                    chamberUtilization.addRowHeader(HEADER_COLUMN, chamber,
                            createTableHeader(new JLabel(chamber.getName(), SwingConstants.CENTER), null));
                }

            }
        }
    }

    private void fillProductionJobCells(OledSchedule oledSchedule) {
        preparePlanningEntityColors(oledSchedule.getProdutionJobList());
        for (ProductionJob productionJob : oledSchedule.getProdutionJobList()) {
            Color color = null;
            if (productionJob.isBakingJob() || productionJob.isMaintenanceJob()) {
                color = determinePlanningEntityColor(productionJob, ProductCategory.OPS);
            } else {
                color = determinePlanningEntityColor(productionJob, productionJob.getOrder().getProduct().getCategory());
            }

            Order order = productionJob.getOrder();
            String toolTip =  "<html>Order: " + order.getName() + " <br/>"
                    + "Product Cat: " + order.getProduct().getCategory() + "<br/>"
                    + "Product: " + order.getProduct().getName() + "<br/>"
                    + "Order Qty: " + order.getQuantity() + " <br/>"
                    + "Due Date: " + order.getDueDate() + " <br/>"
                    + "Prod Qty: " + productionJob.getQuantity() + " <br/>"
                    + "Baking: " + productionJob.requiresBakingJob() + " <br/>"
                    + "Pinned: " + productionJob.isPinned()
                    + "</html>";
            if (productionJob.isBakingJob()) {
                toolTip = "<html>Baking Job after:" + " <br/>"
                        + "Order: " + order.getName() + "<br/>"
                        + "Product Cat: " + order.getProduct().getCategory() + "<br/>"
                        + "Product: " + order.getProduct().getName() + "<br/>"
                        + "Order Qty: " + order.getQuantity() + " <br/>"
                        + "Due Date: " + order.getDueDate() + " <br/>"
                        + "Prod Qty: " + productionJob.getQuantity() + " <br/>"
                        + "Baking: " + productionJob.requiresBakingJob() + " <br/>"
                        + "Pinned: " + productionJob.isPinned()
                        + "</html>";
            } else if (productionJob.isMaintenanceJob()) {
                toolTip = "<html>Maintenance<html/>";
            }
            Timeslot timeslot = productionJob.getTimeslot();
            chambersPanel.addCell(timeslot, productionJob.getChamber(),
                    createButton(productionJob, color, toolTip));
        }
    }

    private void fillChamberSummary(OledSchedule oledSchedule) {
        Map<Timeslot, List<ProductionJob>> timeToChamberListMap = new HashMap<>(
                oledSchedule.getTimeslotList().size());

        for (Timeslot timeslot : oledSchedule.getTimeslotList()) {
            timeToChamberListMap.put(timeslot, new ArrayList<>());
        }
        // initialize
        Map<Pair<Timeslot, Chamber>, Integer> timeChamberPairToSumtMap = new HashMap<>();
        for (Timeslot timeslot : oledSchedule.getTimeslotList()) {
            for (Chamber chamber : oledSchedule.getChamberList()) {
                timeChamberPairToSumtMap.put(Pair.of(timeslot, chamber), 0);
            }
        }
        // sum
        for (ProductionJob productionJob : oledSchedule.getProdutionJobList()) {
            Timeslot timeslot = productionJob.getTimeslot();
            Chamber chamber = productionJob.getChamber();
            int quantity = productionJob.getQuantity();
            if (timeslot != null && chamber != null) {
                int quantitySum = timeChamberPairToSumtMap.get(Pair.of(timeslot, chamber));
                quantitySum += quantity;
                timeChamberPairToSumtMap.put(Pair.of(timeslot, chamber), quantitySum);
            }
        }

        // Chamber Summary
        for (Map.Entry<Pair<Timeslot, Chamber>, Integer> timeChamberPairSum : timeChamberPairToSumtMap.entrySet()) {
            Pair<Timeslot, Chamber> timeChamberPair = timeChamberPairSum.getKey();
            int capacity = timeChamberPair.getValue().getCapacityType().getCapacitySize();
            int sumQuantity = timeChamberPairSum.getValue();
            String utilization = String.format("%,9.1f", (double) sumQuantity / capacity * 100.0) + "%";
            String label = "<html> " + capacity + "<br/>"
                    + sumQuantity + "<br/>"
                    + utilization;
            chamberSummary.addCell(timeChamberPair.getKey(), timeChamberPair.getValue(),
                    createTableHeader(new JLabel(label, SwingConstants.RIGHT), null));
        }

        Map<Chamber, Map<Timeslot, Integer>> chamberTimeslotSum = oledSchedule.getProdutionJobList().stream()
                .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                .collect(Collectors.groupingBy(
                        ProductionJob::getChamber,
                        Collectors.groupingBy(
                                ProductionJob::getTimeslot,
                                Collectors.summingInt(ProductionJob::getQuantity))));

        // Chamber Utilization
        for (Chamber chamber : oledSchedule.getChamberList()) {
            Map<Timeslot, Integer> timeslotSum = chamberTimeslotSum.getOrDefault(chamber, Collections.emptyMap());
            int daysOfPossibleProduction = oledSchedule.getTimeslotList().size();
            int daysOfProduction = timeslotSum.size();
            int chamberCapacity = chamber.getCapacityType().getCapacitySize();
            int totalChamberCapacity = chamberCapacity * daysOfPossibleProduction;
            int totalProductionQuantity = timeslotSum.values().stream().mapToInt(Integer::intValue).sum();
            double averageProductionQuantity = timeslotSum.values().stream()
                    .mapToInt(Integer::intValue).average().orElse(0.0);
            double totalUtilizationPct = (double) totalProductionQuantity / totalChamberCapacity * 100.0;
            int daysUnderCapacity = 0;
            int daysOverCapacity=0;
            for (int quantity : timeslotSum.values()) {
                if (quantity <= chamberCapacity) {
                    daysUnderCapacity++;
                } else if (quantity > chamberCapacity) {
                    daysOverCapacity++;
                }
            }
            chamberUtilization.addCell("DAYS", chamber,
                    createTableHeader(new JLabel(String.format("%,10d", daysOfPossibleProduction), SwingConstants.RIGHT), null));
            chamberUtilization.addCell("USED", chamber,
                    createTableHeader(new JLabel(String.format("%,10d", daysOfProduction), SwingConstants.RIGHT), null));
            chamberUtilization.addCell("<= CAPA", chamber,
                    createTableHeader(new JLabel(String.format("%,10d", daysUnderCapacity), SwingConstants.RIGHT), null));
            chamberUtilization.addCell("> CAPA", chamber,
                    createTableHeader(new JLabel(String.format("%,10d", daysOverCapacity), SwingConstants.RIGHT), null));
            chamberUtilization.addCell("TOT CAPA", chamber,
                    createTableHeader(new JLabel(String.format("%,10d", totalChamberCapacity), SwingConstants.RIGHT), null));
            chamberUtilization.addCell("TOT PROD", chamber,
                    createTableHeader(new JLabel(String.format("%,10d", totalProductionQuantity), SwingConstants.RIGHT), null));
            chamberUtilization.addCell("TOT UTIL", chamber,
                    createTableHeader(new JLabel(String.format("%,9.2f", totalUtilizationPct) + "%", SwingConstants.RIGHT), null));
            chamberUtilization.addCell("AVG PROD", chamber,
                    createTableHeader(new JLabel(String.format("%,10.2f", averageProductionQuantity), SwingConstants.RIGHT), null));
        }
    }

    private void fillOrderSummary(OledSchedule oledSchedule) {
        Map<Order, Map<Chamber, Integer>> orderChamberSum = oledSchedule.getProdutionJobList().stream()
                .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                .collect(Collectors.groupingBy(
                        ProductionJob::getOrder,
                        Collectors.groupingBy(
                                ProductionJob::getChamber,
                                Collectors.summingInt(ProductionJob::getQuantity))));

        for (Order order : oledSchedule.getOrderList()) {
            List<ProductionJob> scheduledActivities = oledSchedule.getProdutionJobList().stream()
                    .filter(job -> job.getOrder().getId() == order.getId()
                            && job.getChamber() != null && job.getTimeslot() != null)
                    .collect(Collectors.toList());
            if (scheduledActivities.size() > 0 ) {
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

                for (Chamber chamber : chamberList) {
                    chambers.add(chamber.getName() + "(" + String.format("%,d",chamberSum.get(chamber)) + ")");
                }
                String productionChambers = chambers.stream().collect(Collectors.joining(","));

                orderSummary.addRowHeader(HEADER_COLUMN, order,
                        createTableHeader(new JLabel(order.getName(), SwingConstants.CENTER), null));

                orderSummary.addCell("DUE DATE", order,
                        createTableHeader(new JLabel(String.format("%-10s", order.getDueDate()),
                                SwingConstants.CENTER), null));
                orderSummary.addCell("PRODUCT", order,
                        createTableHeader(new JLabel(String.format("%-10s", order.getProduct().getName()),
                                SwingConstants.LEFT), null));
                orderSummary.addCell("ORDER QTY", order,
                        createTableHeader(new JLabel(String.format("%,10d", order.getQuantity()),
                                SwingConstants.RIGHT), null));
                orderSummary.addCell("PROD QTY", order,
                        createTableHeader(new JLabel(String.format("%,10d", productionQuantity),
                                SwingConstants.RIGHT), null));
                orderSummary.addCell("OF(%)", order,
                        createTableHeader(new JLabel(String.format("%,9.2f", orderFulfillmentPct) + "%",
                                SwingConstants.RIGHT), null));
                orderSummary.addCell("BEGIN", order,
                        createTableHeader(new JLabel(String.format("%-10s", productionBegin),
                                SwingConstants.CENTER), null));
                orderSummary.addCell("END", order,
                        createTableHeader(new JLabel(String.format("%-10s", productionEnd),
                                SwingConstants.CENTER), null));
                orderSummary.addCell("DAYS", order,
                        createTableHeader(new JLabel(String.format("%,10d", productionDuration.toDays()),
                                SwingConstants.RIGHT), null));
                orderSummary.addCell("HOURS", order,
                        createTableHeader(new JLabel(String.format("%,10d", productionDuration.toHours()),
                                SwingConstants.RIGHT), null));
                orderSummary.addCell("CHAMBERS", order,
                        createTableHeader(new JLabel(String.format("%-40s", productionChambers),
                                SwingConstants.LEADING), null));
            }
        }
    }

    private JPanel createTableHeader(JLabel label, String toolTip) {
        if (toolTip != null) {
            label.setToolTipText(toolTip);
        }
        JPanel headerPanel = new JPanel(new BorderLayout());
        headerPanel.add(label, BorderLayout.NORTH);
        headerPanel.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(TangoColorFactory.ALUMINIUM_5),
                BorderFactory.createEmptyBorder(2, 2, 2, 2)));
        return headerPanel;
    }

    private JButton createButton(ProductionJob productionJob, Color color, String toolTip) {
        JButton button = SwingUtils.makeSmallButton(new JButton(new ProductionJobAction(productionJob)));
        button.setHorizontalTextPosition(JButton.CENTER);
        button.setBackground(color);
        button.setToolTipText(toolTip);
        if (productionJob.isPinned()) {
            button.setIcon(CommonIcons.PINNED_ICON);
        }
        return button;
    }

    @Override
    public boolean isIndictmentHeatMapEnabled() { return true; }

    private class ProductionJobAction extends AbstractAction {

        private ProductionJob productionJob;

        public ProductionJobAction(ProductionJob productionJob) {
            super(productionJob.getPanelName()
                    , new ProductionJobIcon(productionJob));
            this.productionJob = productionJob;
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            JPanel listFieldsPanel = new JPanel(new GridLayout(3, 2));
            listFieldsPanel.add(new JLabel("Timeslot:"));
            OledSchedule oledSchedule = getSolution();
            List<Timeslot> timeslotList = oledSchedule.getTimeslotList();
            // Add 1 to array size to add null, which makes the entity unassigned
            JComboBox timeslotListField = new JComboBox(
                    timeslotList.toArray(new Object[timeslotList.size() + 1]));
            LabeledComboBoxRenderer.applyToComboBox(timeslotListField);
            timeslotListField.setSelectedItem(productionJob.getTimeslot());
            listFieldsPanel.add(timeslotListField);
            listFieldsPanel.add(new JLabel("Chamber:"));
            List<Chamber> chamberList = oledSchedule.getChamberList();
            // Add 1 to array size to add null, which makes the entity unassigned
            JComboBox chamberListField = new JComboBox(
                    chamberList.toArray(new Object[chamberList.size() + 1]));
            LabeledComboBoxRenderer.applyToComboBox(chamberListField);
            chamberListField.setSelectedItem(productionJob.getChamber());
            listFieldsPanel.add(chamberListField);
            listFieldsPanel.add(new JLabel("Pinned:"));
            JCheckBox pinnedField = new JCheckBox("cannot move during solving");
            pinnedField.setSelected(productionJob.isPinned());
            listFieldsPanel.add(pinnedField);
            int result = JOptionPane.showConfirmDialog(OledPanel.this.getRootPane(), listFieldsPanel,
                    "Select timeslot and chamber", JOptionPane.OK_CANCEL_OPTION);
            if (result == JOptionPane.OK_OPTION) {
                boolean changedTimeslot = false;
                boolean changedChamber = false;
                Timeslot toTimeslot = (Timeslot) timeslotListField.getSelectedItem();
                Timeslot fromTimeslot = productionJob.getTimeslot();
                if (productionJob.getTimeslot() != toTimeslot) {
                    doProblemChange((workingSolution, problemChangeDirector) -> problemChangeDirector
                            .changeVariable(productionJob, "timeslot", j -> j.setTimeslot(toTimeslot)));
                    changedTimeslot = true;
                }
                Chamber toChamber = (Chamber) chamberListField.getSelectedItem();
                Chamber fromChamber = productionJob.getChamber();
                if (productionJob.getChamber() != toChamber) {
                    doProblemChange((workingSolution, problemChangeDirector) -> problemChangeDirector
                            .changeVariable(productionJob, "chamber", j -> j.setChamber(toChamber)));
                    changedChamber = true;
                }
                boolean toPinned = pinnedField.isSelected();
                if (productionJob.isPinned() != toPinned) {
                    doProblemChange((workingSolution, problemChangeDirector) -> problemChangeDirector
                            .changeProblemProperty(productionJob, j -> j.setPinned(toPinned)));
                }
                if (productionJob.isMaintenanceJob() && (changedChamber || changedTimeslot)) {
                    UnavailableTimeslotPenalty penalty = OledUtil.getUnavailableTimeslotPenalty(oledSchedule, fromChamber, fromTimeslot);
                    if (changedChamber) {
                        penalty.setChamber(toChamber);
                    }
                    if (changedTimeslot) {
                        penalty.setTimeslot(toTimeslot);
                    }
                }
                solverAndPersistenceFrame.resetScreen();
            }
        }
    }

    private class TimeslotIcon implements Icon {

        private static final int DIAMETER = 14;

        private final Timeslot timeslot;

        private TimeslotIcon(Timeslot timeslot) {
            this.timeslot = timeslot;
        }

        @Override
        public int getIconWidth() {
            return DIAMETER;
        }

        @Override
        public int getIconHeight() {
            return DIAMETER;
        }

        @Override
        public void paintIcon(Component c, Graphics g, int x, int y) {
//            g.setColor(TangoColorFactory.ALUMINIUM_6);
//            g.fillOval(x, y, DIAMETER, DIAMETER);
//            g.setColor(Color.WHITE);
//            g.fillArc(x, y, DIAMETER, DIAMETER, 90, -(360 * period.getDuration() / maximumPeriodDuration));
//            g.setColor(TangoColorFactory.ALUMINIUM_6);
//            g.drawOval(x, y, DIAMETER, DIAMETER);
        }
    }

    private class ChamberIcon implements Icon {

        private static final int ICON_WIDTH = 10;
        private static final int ICON_HEIGHT = TimeslotIcon.DIAMETER;

        private final Chamber chamber;

        private ChamberIcon(Chamber chamber) {
            this.chamber = chamber;
        }

        @Override
        public int getIconWidth() {
            return ICON_WIDTH;
        }

        @Override
        public int getIconHeight() {
            return ICON_HEIGHT;
        }

        @Override
        public void paintIcon(Component c, Graphics g, int x, int y) {
//            g.setColor(TangoColorFactory.ALUMINIUM_6);
//            g.fillRect(x + 1, y, ICON_WIDTH - 2, ICON_HEIGHT);
//            g.setColor(Color.WHITE);
//            int capacityHeight = ICON_HEIGHT * chamber.getCapatity().getCapacitySize() / maximumRoomCapacity;
//            g.fillRect(x + 1, y + (ICON_HEIGHT - capacityHeight), ICON_WIDTH - 2, capacityHeight);
//            g.setColor(TangoColorFactory.ALUMINIUM_6);
//            g.drawRect(x + 1, y, ICON_WIDTH - 2, ICON_HEIGHT);
        }
    }

    private class ProductionJobIcon implements Icon {

        private static final int DIAMETER = TimeslotIcon.DIAMETER;
        private static final int ICON_WIDTH = ChamberIcon.ICON_WIDTH;
        private static final int ICON_HEIGHT = ChamberIcon.ICON_HEIGHT;

        private final ProductionJob productionJob;

        private ProductionJobIcon(ProductionJob productionJob) {
            this.productionJob = productionJob;
        }

        @Override
        public int getIconWidth() {
            return DIAMETER + ICON_WIDTH;
        }

        @Override
        public int getIconHeight() {
            return DIAMETER;
        }

        @Override
        public void paintIcon(Component c, Graphics g, int x, int y) {
//            g.setColor(Color.WHITE);
//            g.fillOval(x, y, DIAMETER, DIAMETER);
//            g.setColor(TangoColorFactory.ALUMINIUM_4);
//            g.fillArc(x, y, DIAMETER, DIAMETER, 90, -(360 * exam.getTopicDuration() / maximumPeriodDuration));
//            g.setColor(TangoColorFactory.ALUMINIUM_6);
//            g.drawOval(x, y, DIAMETER, DIAMETER);
//
//            x += DIAMETER + 1;
//            g.setColor(Color.WHITE);
//            g.fillRect(x + 1, y, ICON_WIDTH - 2, ICON_HEIGHT);
//            g.setColor(TangoColorFactory.ALUMINIUM_4);
//            int capacityHeight = ICON_HEIGHT * exam.getTopicStudentSize() / maximumRoomCapacity;
//            g.fillRect(x + 1, y + (ICON_HEIGHT - capacityHeight), ICON_WIDTH - 2, capacityHeight);
//            g.setColor(TangoColorFactory.ALUMINIUM_6);
//            g.drawRect(x + 1, y, ICON_WIDTH - 2, ICON_HEIGHT);
        }
    }
}
