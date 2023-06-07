package ai.timefold.solver.examples.oled.persistence;

import ai.timefold.solver.core.api.score.buildin.hardmediumsoft.HardMediumSoftScore;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.examples.common.persistence.AbstractXlsxSolutionFileIO;
import ai.timefold.solver.examples.oled.app.OledSchedulingApp;
import ai.timefold.solver.examples.oled.domain.*;
import org.apache.commons.io.input.TimestampedObserver;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.*;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

import static ai.timefold.solver.examples.oled.domain.OledConstraintConfiguration.*;
import static java.time.temporal.ChronoUnit.DAYS;
import static java.util.stream.Collectors.joining;

public class OledSchedulingXlsxFileIO extends AbstractXlsxSolutionFileIO<OledSchedule> {

    @Override
    public OledSchedule read(File inputScheduleFile) {
        try (InputStream in = new BufferedInputStream(new FileInputStream(inputScheduleFile))) {
            XSSFWorkbook workbook = new XSSFWorkbook(in);
            return new OledSchedulingXlsxFileIO.OledSchedulingXlsxReader(workbook).read();
        } catch (IOException | RuntimeException e) {
            throw new IllegalStateException("Failed reading inputScheduleFile ("
                    + inputScheduleFile + ").", e);
        }
    }

    private static class OledSchedulingXlsxReader extends AbstractXlsxReader<OledSchedule, HardSoftScore> {

        OledSchedulingXlsxReader(XSSFWorkbook workbook) {
            super(workbook, OledSchedulingApp.SOLVER_CONFIG);
        }

        @Override
        public OledSchedule read() {
            solution = new OledSchedule();
            readConfiguration();
            readTimeslotList();
            readPhaseList();
            readChamberList();
            raadProductList();
            readEquipmentList();
            readPhaseEquipmentList();
            readProductEquipmentList();
            readProductPhaseFillingTimeList();
            readUnavailableTimeslotPenaltyList();
            readOrderList();
            readProductionJobList();
//            generateActivityList();

            return solution;
        }

        private void readConfiguration() {
            nextSheet("Configuration");
            nextRow();
            nextRow(true);
            readHeaderCell("Constraint");
            readHeaderCell("Weight");
            readHeaderCell("Description");

            OledConstraintConfiguration constraintConfiguration = new OledConstraintConfiguration(0L);

            // TODO refactor this to allow setting pos/neg, weight and score level
            //Hard
            readIntConstraintParameterLine(REQUIRED_EQUIPMENT,
                    hardScore -> constraintConfiguration.setRequiredEquipment(HardMediumSoftScore.ofHard(hardScore)), "");
            readIntConstraintParameterLine(UNAVAILABLE_TIMESLOT_PENALTY,
                    hardScore -> constraintConfiguration.setUnavailableTimeslotPenalty(HardMediumSoftScore.ofHard(hardScore)), "");
            readIntConstraintParameterLine(CHAMBER_CAPACITY,
                    hardScore -> constraintConfiguration.setChamberCapacity(HardMediumSoftScore.ofHard(hardScore)), "");
            readIntConstraintParameterLine(DUE_DATE_FENCE,
                    hardScore -> constraintConfiguration.setDueDateFence(HardMediumSoftScore.ofHard(hardScore)), "");
            readIntConstraintParameterLine(BAKING_JOB,
                    hardScore -> constraintConfiguration.setBakingJob(HardMediumSoftScore.ofHard(hardScore)), "");
//            readIntConstraintParameterLine(BAKING_OPERATION_MAX,
//                    hardScore -> constraintConfiguration.setBakingOperationMax(HardMediumSoftScore.ofHard(hardScore)), "");
            //Medium
            readIntConstraintParameterLine(ASSIGN_EVERY_JOB_TO_CHAMBER,
                    mediumScore -> constraintConfiguration.setAssignEveryJobToChamber(HardMediumSoftScore.ofMedium(mediumScore)), "");
            //Soft
//            readIntConstraintParameterLine(CHAMBER_UTILIZATION,
//                    softScore -> constraintConfiguration.setChamberUtilization(HardMediumSoftScore.ofSoft(softScore)), "");
            readIntConstraintParameterLine(BAKING_OPERATION,
                    softScore -> constraintConfiguration.setBakingOperation(HardMediumSoftScore.ofSoft(softScore)), "");
            readIntConstraintParameterLine(CONTINUOUS_PRODUCTION,
                    softScore -> constraintConfiguration.setContinuousProduction(HardMediumSoftScore.ofSoft(softScore)), "");
            readIntConstraintParameterLine(CONTINUOUS_PRODUCTION_CATEGORY,
                    softScore -> constraintConfiguration.setContinuousProductionCategory(HardMediumSoftScore.ofSoft(softScore)), "");
            readIntConstraintParameterLine(FILLING_TIME,
                    softScore -> constraintConfiguration.setFillingTime(HardMediumSoftScore.ofSoft(softScore)), "");
            readIntConstraintParameterLine(REMAINDER_QUANTITY_PRODUCTION,
                    softScore -> constraintConfiguration.setRemainderQuantityProduction(HardMediumSoftScore.ofSoft(softScore)), "");
            readIntConstraintParameterLine(CHAMBER_STABILITY,
                    softScore -> constraintConfiguration.setChamberStability(HardMediumSoftScore.ofSoft(softScore)), "");
            solution.setConstraintConfiguration(constraintConfiguration);
        }
        private void readTimeslotList() {
            nextSheet("Timeslots");
            nextRow(false);
            readHeaderCell("Timeslot");
            List<Timeslot> timeslotList = new ArrayList<>(currentSheet.getLastRowNum() -1);
            long id = 0L;
            while (nextRow()) {
                Timeslot timeslot = new Timeslot(id++, LocalDate.parse(nextStringCell().getStringCellValue(), DateTimeFormatter.ofPattern("yyyy/MM/dd")));
                timeslotList.add(timeslot);
            }
            solution.setTimeslotList(timeslotList);
        }
        private void readPhaseList() {
            nextSheet("Phases");
            nextRow(false);
            readHeaderCell("Phase");
            List<Phase> phaseList = new ArrayList<>(currentSheet.getLastRowNum() - 1);
            long id = 0L;
            while (nextRow()) {
                Phase phase = new Phase(id++, nextStringCell().getStringCellValue());
                phaseList.add(phase);
            }
            solution.setPhaseList(phaseList);
        }
        private void raadProductList() {
            nextSheet("Products");
            nextRow(false);
            readHeaderCell("Product");
            readHeaderCell("Category");
            List<Product> productList = new ArrayList<>(currentSheet.getLastRowNum() - 1);
            long id = 0L;
            while (nextRow()) {
                String projectName = nextStringCell().getStringCellValue();
                String category = nextStringCell().getStringCellValue();
                Product product = new Product(id++, projectName, ProductCategory.valueOf(category));
                productList.add(product);
            }
            solution.setProductList(productList);
        }
        private void readChamberList() {
            nextSheet("Chambers");
            nextRow(false);
            readHeaderCell("Chamber");
            readHeaderCell("Phase");
            List<Chamber> chamberList = new ArrayList<>(currentSheet.getLastRowNum() - 1);
            long id = 0L;
            while (nextRow()) {
                String chamberName = nextStringCell().getStringCellValue();
                String phaseName = nextStringCell().getStringCellValue();

                for (Phase phase : solution.getPhaseList()) {
                    if (phase.getName().equals(phaseName)) {
                        Chamber chamber = new Chamber(id++, chamberName, phase);
                        chamberList.add(chamber);
                    }
                }
            }
            solution.setChamberList(chamberList);
        }
        private void readEquipmentList() {
            nextSheet("Equipments");
            nextRow(false);
            readHeaderCell("Equipment");
            List<Equipment> equipmentList = new ArrayList<>(currentSheet.getLastRowNum() - 1);
            long id = 0L;
            while (nextRow()) {
                String equipmentName = nextStringCell().getStringCellValue();
                Equipment equipment = new Equipment(id++, equipmentName);
                equipmentList.add(equipment);
            }
            solution.setEquipmentList(equipmentList);
        }

        private void readPhaseEquipmentList() {
            nextSheet("PhaseEquipmentList");
            nextRow(false);
            readHeaderCell("Phase");
            readHeaderCell("Equipment");
            List<PhaseEquipment> phaseEquipmentList = new ArrayList<>(currentSheet.getLastRowNum() - 1);
            long id = 0L;
            while (nextRow()) {
                String phaseName = nextStringCell().getStringCellValue();
                String equipmentName = nextStringCell().getStringCellValue();
                for (Phase phase : solution.getPhaseList()) {
                    for (Equipment equipment : solution.getEquipmentList()) {
                        if (phase.getName().equals(phaseName)
                                && equipment.getName().equals(equipmentName)) {
                            PhaseEquipment phaseEquipment = new PhaseEquipment(id++, phase, equipment);
                            phaseEquipmentList.add(phaseEquipment);
                        }
                    }
                }
            }

            for (PhaseEquipment pe : phaseEquipmentList) {
                Phase p = pe.getPhase();
                if (p.getPhaseEquipmentList() == null) {
                    List<PhaseEquipment> pel = new ArrayList<>();
                    pel.add(pe);
                    p.setPhaseEquipmentList(pel);
                } else {
                    p.getPhaseEquipmentList().add(pe);
                }
            }
            solution.setPhaseEquipmentList(phaseEquipmentList);
        }

        private void readProductEquipmentList() {
            nextSheet("ProductEquipmentList");
            nextRow();
            readHeaderCell("Product");
            readHeaderCell("Equipment");
            List<ProductEquipment> productEquipmentList = new ArrayList<>(currentSheet.getLastRowNum() - 1);
            long id = 0L;
            while (nextRow()) {
                String projectName = nextStringCell().getStringCellValue();
                String equipmentName = nextStringCell().getStringCellValue();
                for (Product product : solution.getProductList()) {
                    for (Equipment equipment : solution.getEquipmentList()) {
                        if (product.getName().equals(projectName)
                                && equipment.getName().equals(equipmentName)) {
                            ProductEquipment productEquipment = new ProductEquipment(id++, product, equipment);
                            productEquipmentList.add(productEquipment);
                        }
                    }
                }
            }

            for (ProductEquipment pe : productEquipmentList) {
                Product p = pe.getProject();
                if (p.getProductEquipmentList() == null) {
                    List<ProductEquipment> pel = new ArrayList<>();
                    pel.add(pe);
                    p.setProductEquipmentList(pel);
                } else {
                    p.getProductEquipmentList().add(pe);
                }
            }
            solution.setProductEquipmentList(productEquipmentList);
        }

        private void readProductPhaseFillingTimeList() {
            nextSheet("ProductPhaseFillingTimeList");
            nextRow();
            readHeaderCell("Product");
            readHeaderCell("Phase");
            readHeaderCell("Filling Time");
            List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
            long id = 0L;
            while (nextRow()) {
                String projectName = nextStringCell().getStringCellValue();
                String phaseName = nextStringCell().getStringCellValue();
                int fillingTime = (int) nextNumericCell().getNumericCellValue();
                for (Product product : solution.getProductList()) {
                    for (Phase phase : solution.getPhaseList()) {
                        if (product.getName().equals(projectName)
                                && phase.getName().equals(phaseName)
                                && fillingTime > 0
                        ) {
                            ProductPhaseFillingTime productPhaseFillingTime = new ProductPhaseFillingTime(id++, product, phase, fillingTime);
                            productPhaseFillingTimeList.add(productPhaseFillingTime);
                        }
                    }
                }
            }

            for (ProductPhaseFillingTime ppft : productPhaseFillingTimeList) {
                Product p = ppft.getProduct();
                if (p.getProductPhaseFillingTimeList() == null) {
                    List<ProductPhaseFillingTime> list = new ArrayList<>();
                    list.add(ppft);
                    p.setProductPhaseFillingTimeList(list);
                } else {
                    p.getProductPhaseFillingTimeList().add(ppft);
                }
            }
            solution.setProductPhaseFillingTimeList(productPhaseFillingTimeList);
        }

        private void readUnavailableTimeslotPenaltyList() {
            nextSheet("UnavailableTimeslotPenaltyList");
            nextRow();
            readHeaderCell("Chamber");
            readHeaderCell("Date");
            if (currentSheet.getLastRowNum() == 0) {
                List<UnavailableTimeslotPenalty> unavailableTimeslotPenaltyList = new ArrayList<>();
                solution.setUnavailableTimeslotPenaltyList(unavailableTimeslotPenaltyList);
            } else {
                List<UnavailableTimeslotPenalty> unavailableTimeslotPenaltyList = new ArrayList<>(currentSheet.getLastRowNum() - 1);
                long id = 0L;
                while (nextRow()) {
                    String chamberName = nextStringCell().getStringCellValue();
                    String chamberDate = nextStringCell().getStringCellValue();
                    for (Chamber chamber : solution.getChamberList()) {
                        for (Timeslot timeslot : solution.getTimeslotList()) {
                            if (chamber.getName().equals(chamberName)
                                    && timeslot.getDate().equals(LocalDate.parse(chamberDate, DateTimeFormatter.ofPattern("yyyy/MM/dd")))) {
                                UnavailableTimeslotPenalty penalty = new UnavailableTimeslotPenalty(id++, chamber, timeslot);
                                unavailableTimeslotPenaltyList.add(penalty);
                            }
                        }
                    }
                }
                solution.setUnavailableTimeslotPenaltyList(unavailableTimeslotPenaltyList);
            }
        }

        private void readOrderList() {
            nextSheet("Orders");
            nextRow(false);
            readHeaderCell("Order");
            readHeaderCell("Product");
            readHeaderCell("Due Date");
            readHeaderCell("Quantity");
            List<Order> orderList = new ArrayList<>(currentSheet.getLastRowNum() - 1);
            long id = 0L;
            while (nextRow()) {
                String orderName = nextStringCell().getStringCellValue();
                String projectName = nextStringCell().getStringCellValue();
                String dueDate = nextStringCell().getStringCellValue();
                int quantity = (int) nextNumericCell().getNumericCellValue();

                for (Product product : solution.getProductList()) {
                    if (product.getName().equals(projectName)) {
                        Order order = new Order(id++, orderName, product, dueDate, quantity);
                        orderList.add(order);
                    }
                }
            }
            solution.setOrderList(orderList);
        }

        private void readProductionJobList() {
            nextSheet("ProductionJobs");
            nextRow(false);
            readHeaderCell("Order");
            readHeaderCell("Product");
            readHeaderCell("Due Date");
            readHeaderCell("Quantity");
            readHeaderCell("Prod Quantity");
            readHeaderCell("Pinned");
            readHeaderCell("Chamber");
            readHeaderCell("Timeslot");
            List<ProductionJob> productionJobList = new ArrayList<>(currentSheet.getLastRowNum() - 1);

            long id = 0L;
            while (nextRow()) {
                String orderName = nextStringCell().getStringCellValue();
                String orderProjectName =nextStringCell().getStringCellValue();
                String orderDueDate = nextStringCell().getStringCellValue();
                int orderQuantity = (int) nextNumericCell().getNumericCellValue();
                int activityProdQuantity = (int) nextNumericCell().getNumericCellValue();
                boolean activityIsPinned = (boolean) nextBooleanCell().getBooleanCellValue();
                String activityChamberName = nextStringCell().getStringCellValue();
                String activityTimeslotDate = nextStringCell().getStringCellValue();

                for (Order order : solution.getOrderList()) {
                    if (order.getName().equals(orderName)
                            && order.getProduct().getName().equals(orderProjectName)
                            && order.getDueDate().equals(LocalDate.parse(orderDueDate, DateTimeFormatter.ofPattern("yyyy/MM/dd")))
                            && order.getQuantity() == orderQuantity) {
                        ProductionJob productionJob = new ProductionJob(id++, order, activityProdQuantity);
                        for (Chamber chamber : solution.getChamberList()) {
                            if (chamber.getName().equals(activityChamberName)) {
                                productionJob.setChamber(chamber);
                            }
                        }
                        for (Timeslot ts : solution.getTimeslotList()) {
                            if (!StringUtils.isEmpty(activityTimeslotDate) && ts.getDate().equals(LocalDate.parse(activityTimeslotDate, DateTimeFormatter.ofPattern("yyyy/MM/dd")))) {
                                productionJob.setTimeslot(ts);
                            }
                        }
                        productionJob.setPinned(activityIsPinned);
                        productionJobList.add(productionJob);
                    }
                }
            }
            solution.setProductionJobList(productionJobList);
        }
    }

    @Override
    public void write(OledSchedule solution, File outputScheduleFile) {
        try (FileOutputStream out = new FileOutputStream(outputScheduleFile);
             Workbook workbook = new OledSchedulingXlsxFileIO.OledSchedulingXlsxWriter(solution).write()) {
            workbook.write(out);
        } catch (IOException | RuntimeException e) {
            throw new IllegalStateException("Failed writing outputScheduleFile (" + outputScheduleFile
                    + ") for schedule (" + solution + ").", e);
        }
    }

    private static final class OledSchedulingXlsxWriter extends AbstractXlsxWriter<OledSchedule, HardSoftScore> {

        OledSchedulingXlsxWriter(OledSchedule solution) {
            super(solution, OledSchedulingApp.SOLVER_CONFIG);
        }

        @Override
        public Workbook write() {
            workbook = new XSSFWorkbook();
            creationHelper = workbook.getCreationHelper();
            createStyles();
            writeConfiguration();
            writeTimeslotList();
            writePhaseList();
            writeChamberList();
            writeProjectList();
            writeEquipmentList();
            writePhaseEquipmentList();
            writeProjectEquipmentList();
            writeProjectPhaseFillingTimeList();
            writeUnavailableTimeslotPenaltyList();
            writeOrderList();
            writeProductionJobList();
            writeChamberView();
//            writeChamberAssignView();
            writeChamberSummaryView();
            writeChamberStatsStatsView();;
            writeOrderView();
            writePrintedFormView();
            // justificationList is a Timefold idiom
            writeScoreView(justificationList -> justificationList.stream()
                    .filter(ProductionJob.class::isInstance)
                    .map(Object::toString)
                    .collect(joining(", ")));
            return workbook;
        }

        private void writeConfiguration() {
            nextSheet("Configuration", 1, 3, false);
            nextRow();
            nextCell()
                    .setCellValue(DAY_FORMATTER.format(LocalDateTime.now()) + " " + TIME_FORMATTER.format(LocalDateTime.now()));
            nextRow();
            nextRow();
            nextHeaderCell("Constraint");
            nextHeaderCell("Weight");
            nextHeaderCell("Description");

            OledConstraintConfiguration constraintConfiguration = solution.getConstraintConfiguration();

            //Hard
            writeIntConstraintParameterLine(REQUIRED_EQUIPMENT, constraintConfiguration.getRequiredEquipment().hardScore(), "");
            writeIntConstraintParameterLine(UNAVAILABLE_TIMESLOT_PENALTY, constraintConfiguration.getUnavailableTimeslotPenalty().hardScore(), "");
            writeIntConstraintParameterLine(CHAMBER_CAPACITY, constraintConfiguration.getChamberCapacity().hardScore(),"");
            writeIntConstraintParameterLine(DUE_DATE_FENCE, constraintConfiguration.getDueDateFence().hardScore(),"");
            writeIntConstraintParameterLine(BAKING_JOB, constraintConfiguration.getBakingJob().hardScore(), "");
//            writeIntConstraintParameterLine(BAKING_OPERATION_MAX, constraintConfiguration.getBakingOperationMax().hardScore(),"");
            //Medium
            writeIntConstraintParameterLine(ASSIGN_EVERY_JOB_TO_CHAMBER, constraintConfiguration.getAssignEveryJobToChamber().mediumScore(),"");
            //Soft
//            writeIntConstraintParameterLine(CHAMBER_UTILIZATION, constraintConfiguration.getChamberUtilization().softScore(),"");
            writeIntConstraintParameterLine(BAKING_OPERATION, constraintConfiguration.getBakingOperation().softScore(),"");
            writeIntConstraintParameterLine(CONTINUOUS_PRODUCTION, constraintConfiguration.getContinuousProduction().softScore(),"");
            writeIntConstraintParameterLine(CONTINUOUS_PRODUCTION_CATEGORY, constraintConfiguration.getContinuousProductionCategory().softScore(),"");
            writeIntConstraintParameterLine(FILLING_TIME, constraintConfiguration.getFillingTime().softScore(),"");
            writeIntConstraintParameterLine(REMAINDER_QUANTITY_PRODUCTION, constraintConfiguration.getRemainderQuantityProduction().softScore(),"");
            writeIntConstraintParameterLine(CHAMBER_STABILITY, constraintConfiguration.getChamberStability().softScore(),"");
            autoSizeColumnsWithHeader();
        }
        private void writeTimeslotList() {
            nextSheet("Timeslots", 1, 0, false);
            nextRow();
            nextHeaderCell("Timeslot");
            for (Timeslot timeslot : solution.getTimeslotList()) {
                nextRow();
                nextCell().setCellValue(timeslot.getDate().format(DateTimeFormatter.ofPattern("yyyy/MM/dd")));
            }
            autoSizeColumnsWithHeader();
        }
        private void writePhaseList() {
            nextSheet("Phases", 1, 0, false);
            nextRow();
            nextHeaderCell("Phase");
            for (Phase phase : solution.getPhaseList()) {
                nextRow();
                nextCell().setCellValue(phase.getName());
            }
            autoSizeColumnsWithHeader();
        }
        private void writeProjectList() {
            nextSheet("Products", 1, 0, false);
            nextRow();
            nextHeaderCell("Product");
            nextHeaderCell("Category");
            for (Product product : solution.getProductList()) {
                nextRow();
                nextCell().setCellValue(product.getName());
                nextCell().setCellValue(product.getCategory().name());
            }
            autoSizeColumnsWithHeader();
        }
        private void writeChamberList() {
            nextSheet("Chambers", 1, 0, false);
            nextRow();
            nextHeaderCell("Chamber");
            nextHeaderCell("Phase");
            nextHeaderCell("Capacity");
            nextHeaderCell("Capacity Size");

            for (Chamber chamber : solution.getChamberList()) {
                nextRow();
                nextCell().setCellValue(chamber.getName());
                nextCell().setCellValue(chamber.getPhase().getName());
                nextCell().setCellValue(chamber.getCapacityType().name());
                nextCell().setCellValue(chamber.getCapacityType().getCapacitySize());
            }
            autoSizeColumnsWithHeader();
        }
        private void writeEquipmentList() {
            nextSheet("Equipments", 1, 0, false);
            nextRow();
            nextHeaderCell("Equipment");
            for (Equipment equipment : solution.getEquipmentList()) {
                nextRow();
                nextCell().setCellValue(equipment.getName());
            }
            autoSizeColumnsWithHeader();
        }
        private void writePhaseEquipmentList() {
            nextSheet("PhaseEquipmentList", 1, 0, false);
            nextRow();
            nextHeaderCell("Phase");
            nextHeaderCell("Equipment");
            for (PhaseEquipment phaseEquipment : solution.getPhaseEquipmentList()) {
                if (phaseEquipment.getPhase() != null && phaseEquipment.getEquipment() != null) {
                    nextRow();
                    nextCell().setCellValue(phaseEquipment.getPhase().getName());
                    nextCell().setCellValue(phaseEquipment.getEquipment().getName());
                }
            }
            autoSizeColumnsWithHeader();
        }
        private void writeProjectEquipmentList() {
            nextSheet("ProductEquipmentList", 1, 0, false);
            nextRow();
            nextHeaderCell("Product");
            nextHeaderCell("Equipment");
            for (ProductEquipment productEquipment : solution.getProductEquipmentList()) {
                if (productEquipment.getProject() != null && productEquipment.getEquipment() != null) {
                    nextRow();
                    nextCell().setCellValue(productEquipment.getProject().getName());
                    nextCell().setCellValue(productEquipment.getEquipment().getName());
                }
            }
            autoSizeColumnsWithHeader();
        }
        private void writeProjectPhaseFillingTimeList() {
            nextSheet("ProductPhaseFillingTimeList", 1, 0, false);
            nextRow();
            nextHeaderCell("Product");
            nextHeaderCell("Phase");
            nextHeaderCell("Filling Time");
            for (ProductPhaseFillingTime productPhaseFillingTime : solution.getProductPhaseFillingTimeList()) {
                if (productPhaseFillingTime.getProduct() != null && productPhaseFillingTime.getPhase() != null) {
                    nextRow();
                    nextCell().setCellValue(productPhaseFillingTime.getProduct().getName());
                    nextCell().setCellValue(productPhaseFillingTime.getPhase().getName());
                    nextCell().setCellValue(productPhaseFillingTime.getFillingTime());
                }
            }
            autoSizeColumnsWithHeader();
        }

        private void writeUnavailableTimeslotPenaltyList() {
            nextSheet("UnavailableTimeslotPenaltyList", 1, 0, false);
            nextRow();
            nextHeaderCell("Chamber");
            nextHeaderCell("Date");
            if (solution.getUnavailableTimeslotPenaltyList() != null) {
                for (UnavailableTimeslotPenalty penalty : solution.getUnavailableTimeslotPenaltyList()) {
                    if (penalty.getChamber() != null && penalty.getTimeslot() != null) {
                        nextRow();
                        nextCell().setCellValue(penalty.getChamber().getName());
                        nextCell().setCellValue(penalty.getTimeslot().getDate().format(DateTimeFormatter.ofPattern("yyyy/MM/dd")));
                    }
                }
            }
            autoSizeColumnsWithHeader();
        }
        private void writeOrderList() {
            nextSheet("Orders", 1, 0, false);
            nextRow();
            nextHeaderCell("Order");
            nextHeaderCell("Product");
            nextHeaderCell("Due Date");
            nextHeaderCell("Quantity");

            for (Order order : solution.getOrderList()) {
                nextRow();
                nextCell().setCellValue(order.getName());
                nextCell().setCellValue(order.getProduct().getName());
                nextCell().setCellValue(order.getDueDate().format(DateTimeFormatter.ofPattern("yyyy/MM/dd")));
                nextCell().setCellValue(order.getQuantity());
            }
            autoSizeColumnsWithHeader();
        }
        private void writeProductionJobList() {
            nextSheet("ProductionJobs", 1, 0, false);
            nextRow();
//            nextHeaderCell("Activity");
            nextHeaderCell("Order");
            nextHeaderCell("Product");
            nextHeaderCell("Due Date");
            nextHeaderCell("Quantity");
            nextHeaderCell("Prod Quantity");
            nextHeaderCell("Pinned");
            nextHeaderCell("Chamber");
            nextHeaderCell("Timeslot");

            for (ProductionJob productionJob : solution.getProdutionJobList()) {
                nextRow();
//                nextCell().setCellValue(activity.getId());
                nextCell().setCellValue(productionJob.getOrder().getName());
                nextCell().setCellValue(productionJob.getOrder().getProduct().getName());
                nextCell().setCellValue(productionJob.getOrder().getDueDate().format(DateTimeFormatter.ofPattern("yyyy/MM/dd")));
                nextCell().setCellValue(productionJob.getOrder().getQuantity());
                nextCell().setCellValue(productionJob.getQuantity());
                nextCell().setCellValue(productionJob.isPinned());
                nextCell().setCellValue(productionJob.getChamber() == null ? "" : productionJob.getChamber().getName());
                nextCell().setCellValue(productionJob.getTimeslot() == null ? "" : productionJob.getTimeslot().getDate().format(DateTimeFormatter.ofPattern("yyyy/MM/dd")));
//                nextCell().setCellValue((Date) (activity.getTimeslot() == null ? "" : activity.getTimeslot().getDate()));
            }
            autoSizeColumnsWithHeader();
        }
        private void writeChamberView() {
            Map<Chamber, Map<Timeslot, List<ProductionJob>>> activityMap = solution.getProdutionJobList().stream()
                    .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                    .collect(Collectors.groupingBy(ProductionJob::getChamber, Collectors.groupingBy(ProductionJob::getTimeslot)));

            nextSheet("Chamber view", 1, 1, true);
            nextRow();
            nextHeaderCell("Chamber");
            writeTimeSlotDatesHeaders();
            for (Chamber chamber : solution.getChamberList()) {
                List<Map<Order, Integer>> cellList = solution.getTimeslotList().stream().map(timeslot -> {
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

                nextRow();
                currentRow.setHeightInPoints(2 * currentSheet.getDefaultRowHeightInPoints());
                nextCell().setCellValue(chamber.getName());

                int idx =0;
                for (Timeslot timeslot : solution.getTimeslotList()) {
                    Map<Order, Integer> orderIntegerMap = cellList.get(idx++);
                    orderIntegerMap.entrySet().stream()
                            .map(entry -> entry.getKey().getName() + " : " +
                                    entry.getKey().getProduct().getName())
                            .collect(Collectors.toList());

                    List<String> sortedEntries = orderIntegerMap.entrySet().stream()
                            .sorted(Map.Entry.comparingByKey(Comparator.comparing(Order::getName)))
                            .map(cellData -> cellData.getKey().getName() + " : " +
                                    cellData.getKey().getProduct().getName())
                            .collect(Collectors.toList());
                    String orderInfo = String.format("%-10s", String.join(", ", sortedEntries));
                    nextCell().setCellValue(orderInfo);
                }

                nextRow();
                currentRow.setHeightInPoints(2 * currentSheet.getDefaultRowHeightInPoints());
                nextCell().setCellValue("PROD");
                idx =0;
                for (Timeslot timeslot : solution.getTimeslotList()) {
                    Map<Order, Integer> orderIntegerMap = cellList.get(idx++);
                    orderIntegerMap.entrySet().stream()
                            .map(entry -> entry.getKey().getName() + " : " +
                                    entry.getKey().getProduct().getName())
                            .collect(Collectors.toList());
                    String orderInfo = orderIntegerMap.entrySet().stream()
                                    .map(cellData -> cellData.getValue().toString())
                                    .collect(Collectors.joining(", "));
                    nextCell().setCellValue(orderInfo);
                }
            }
            autoSizeColumnsWithHeader();
        }

        private void writeChamberAssignView() {
            // TODO: fill ChamberAssignView
            nextSheet("Chamber Assign view", 1, 1, true);
            nextRow();
            nextHeaderCell("Chamber");
            writeTimeSlotDatesHeaders();
            for (Chamber chamber : solution.getChamberList()) {
                nextRow();
                currentRow.setHeightInPoints(2 * currentSheet.getDefaultRowHeightInPoints());
                nextCell().setCellValue(chamber.getName());
            }
            autoSizeColumnsWithHeader();
        }

        private void writeChamberSummaryView() {
            Map<Chamber, Map<Timeslot, List<ProductionJob>>> chamberAssignMap = solution.getProdutionJobList().stream()
                    .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                    .collect(Collectors.groupingBy(ProductionJob::getChamber, Collectors.groupingBy(ProductionJob::getTimeslot)));

            nextSheet("Chamber Summary view", 1, 1, true);
            nextRow();
            nextHeaderCell("Chamber");
            writeTimeSlotDatesHeaders();
            for (Chamber chamber : solution.getChamberList()) {
                nextRow();
                currentRow.setHeightInPoints(2 * currentSheet.getDefaultRowHeightInPoints());
                nextCell().setCellValue(chamber.getName());

                for (Timeslot timeslot : solution.getTimeslotList()) {
                    nextCell().setCellValue(chamber.getCapacityType().getCapacitySize());
                }

                Map<Timeslot, List<ProductionJob>> byTimeslotMap = chamberAssignMap.get(chamber);
                nextRow();
                currentRow.setHeightInPoints(2 * currentSheet.getDefaultRowHeightInPoints());
                nextCell().setCellValue("PROD");
                for (Timeslot timeslot : solution.getTimeslotList()) {
                    int productionQuantity = 0;

                    if (byTimeslotMap != null) {
                        List<ProductionJob> activities = byTimeslotMap.get(timeslot);
                        if (activities != null) {
                            productionQuantity = activities.stream().mapToInt(ProductionJob::getQuantity).sum();
                        }
                    }
                    nextCell().setCellValue(productionQuantity);
                }

                nextRow();
                currentRow.setHeightInPoints(2 * currentSheet.getDefaultRowHeightInPoints());
                nextCell().setCellValue("UTIL%");
                for (Timeslot timeslot : solution.getTimeslotList()) {
                    int productionQuantity = 0;
                    double productionUtilizationPct = 0.0;

                    if (byTimeslotMap != null) {
                        List<ProductionJob> activities = byTimeslotMap.get(timeslot);
                        if (activities != null) {
                            productionQuantity = activities.stream().mapToInt(ProductionJob::getQuantity).sum();
                            productionUtilizationPct = (double) productionQuantity / chamber.getCapacityType().getCapacitySize() * 100.0;
                        }
                    }
                    nextCell().setCellValue(productionUtilizationPct);
                }
            }
            autoSizeColumnsWithHeader();

        }

        private void writeChamberStatsStatsView() {
            nextSheet("Chamber Stats view", 1,1,true);
            nextRow();
            nextHeaderCell("Chamber");
            nextHeaderCell("Schedule Horizon (D)");
            nextHeaderCell("Days of Production");
            nextHeaderCell("Days under Capacity");
            nextHeaderCell("Days over Capacity");
            nextHeaderCell("Total Capacity");
            nextHeaderCell("Total Production");
            nextHeaderCell("Total Utilization");
            nextHeaderCell("Avg Production");

            Map<Chamber, Map<Timeslot, Integer>> chamberTimeslotSum = solution.getProdutionJobList().stream()
                    .filter(activity -> activity.getChamber() != null && activity.getTimeslot() != null)
                    .collect(Collectors.groupingBy(
                            ProductionJob::getChamber,
                            Collectors.groupingBy(
                                    ProductionJob::getTimeslot,
                                    Collectors.summingInt(ProductionJob::getQuantity))));
            for (Chamber chamber : solution.getChamberList()) {
                Map<Timeslot, Integer> timeslotSum = chamberTimeslotSum.getOrDefault(chamber, Collections.emptyMap());
                int daysOfPossibleProduction = solution.getTimeslotList().size();
                int daysOfProduction = timeslotSum.size();
                int chamberCapacity = chamber.getCapacityType().getCapacitySize();
                int totalChamberCapacity = chamberCapacity * daysOfPossibleProduction;
                int totalProductionQuantity = timeslotSum.values().stream().mapToInt(Integer::intValue).sum();
                double averageProductionQuantity = timeslotSum.values().stream()
                        .mapToInt(Integer::intValue).average().orElse(0.0);
                double totalUtilization = (double) totalProductionQuantity / totalChamberCapacity;
                int daysUnderCapacity = 0;
                int daysOverCapacity=0;
                for (int quantity : timeslotSum.values()) {
                    if (quantity <= chamberCapacity) {
                        daysUnderCapacity++;
                    } else if (quantity > chamberCapacity) {
                        daysOverCapacity++;
                    }
                }
                nextRow();
                nextCell().setCellValue(chamber.getName());
                nextCell().setCellValue(daysOfPossibleProduction);
                nextCell().setCellValue(daysOfProduction);
                nextCell().setCellValue(daysUnderCapacity);
                nextCell().setCellValue(daysOverCapacity);
                nextCell().setCellValue(totalChamberCapacity);
                nextCell().setCellValue(totalProductionQuantity);
                nextCell().setCellValue(totalUtilization);
                nextCell().setCellValue(averageProductionQuantity);
            }
            autoSizeColumnsWithHeader();
        }

        private void writeOrderView() {
            nextSheet("Order view", 1,1,true);
            nextRow();
            nextHeaderCell("Order");
            nextHeaderCell("Due Date");
            nextHeaderCell("Product");
            nextHeaderCell("Order Qty");
            nextHeaderCell("Prod Qty");
            nextHeaderCell("Order Fulfillment");
            nextHeaderCell("Prod Begin");
            nextHeaderCell("Prod End");
            nextHeaderCell("Prod Days");
            nextHeaderCell("Prod Hours");
            nextHeaderCell("Prod Chambers");

            for (Order order : solution.getOrderList()){
                nextRow();
                nextCell().setCellValue(order.getName());
                nextCell().setCellValue(order.getDueDate().format(DateTimeFormatter.ofPattern("yyyy/MM//dd")));
                nextCell().setCellValue(order.getProduct().getName());
                nextCell().setCellValue(order.getQuantity());

                List<ProductionJob> scheduledActivities = solution.getProdutionJobList().stream()
                        .filter(activity -> activity.getOrder().getId() == order.getId()
                                && activity.getChamber() != null
                                && activity.getTimeslot() != null)
                        .collect(Collectors.toList());
                if (scheduledActivities.size() > 0) {
                    int productionQuantity = scheduledActivities.stream().mapToInt(ProductionJob::getQuantity).sum();
                    double orderFulfillment = (double) productionQuantity / order.getQuantity();
                    List<Timeslot> timeslots = scheduledActivities.stream().map(ProductionJob::getTimeslot).sorted().toList();
                    LocalDate productionBegin = timeslots.get(0).getDate();
                    LocalDate productionEnd = timeslots.get(timeslots.size() - 1).getDate();
                    Duration productionDuration = Duration.ofDays((DAYS.between(productionBegin, productionEnd.plusDays(1))));
                    String productionChambers = scheduledActivities.stream()
                            .map(ProductionJob::getChamber)
                            .map(Chamber::getName).distinct().sorted()
                            .collect(Collectors.joining(","));

                    nextCell().setCellValue(productionQuantity);
                    nextCell().setCellValue(orderFulfillment);
                    nextCell().setCellValue(productionBegin);
                    nextCell().setCellValue(productionEnd);
                    nextCell().setCellValue(productionDuration.toDays());
                    nextCell().setCellValue(productionDuration.toHours());
                    nextCell().setCellValue(productionChambers);
                }
            }
            autoSizeColumnsWithHeader();
        }
        private void writePrintedFormView() {}

        private void writeTimeSlotDatesHeaders() {
            for (Timeslot timeSlot : solution.getTimeslotList()) {
                LocalDate timeSlotDate = timeSlot.getDate();
//                nextHeaderCell(DAY_FORMATTER.format(LocalDate.ofYearDay(Year.now().getValue(), timeSlotDate.getDayOfYear())));
                nextHeaderCell(timeSlotDate.format(DateTimeFormatter.ofPattern("yyyy/MM/dd")));
            }
        }
    }
}

