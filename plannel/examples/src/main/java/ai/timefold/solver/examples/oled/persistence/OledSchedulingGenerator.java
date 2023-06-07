package ai.timefold.solver.examples.oled.persistence;

import ai.timefold.solver.examples.common.app.CommonApp;
import ai.timefold.solver.examples.common.app.LoggingMain;
import ai.timefold.solver.examples.common.persistence.AbstractSolutionImporter;
import ai.timefold.solver.examples.common.util.Pair;
import ai.timefold.solver.examples.oled.app.OledSchedulingApp;
import ai.timefold.solver.examples.oled.domain.*;
import ai.timefold.solver.examples.oled.domain.solver.OledUtil;
import ai.timefold.solver.persistence.common.api.domain.solution.SolutionFileIO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.*;

public class OledSchedulingGenerator extends LoggingMain {

    public static final String OLED_1 = "oled1";
    public static final String OLED_2 = "oled2";
    public static final String OLED_3 = "oled3";
    public static final String OLED_4 = "oled4";
    public static final String OLED_5 = "oled5";
    public static final String OLED_6 = "oled6";
    public static final String OLED_7 = "oled7";
    public static final String OLED_8 = "oled8";
    public static final String OLED_B = "oled-bench";
    public static void main(String[] args) {
        OledSchedulingGenerator generator = new OledSchedulingGenerator();
//        generator.writeOledSchedule(OLED_1, DEFAULT_SPLIT_SIZE, false, false, false); //2 chambers, 3 orders
//        generator.writeOledSchedule(OLED_2, DEFAULT_SPLIT_SIZE, false, false, false); //4 chambers, 3 orders
//        generator.writeOledSchedule(OLED_3, DEFAULT_SPLIT_SIZE, false, false, false); //6 chambers,15 orders
        // over-constrained case
//        generator.writeOledSchedule(OLED_1, 100, true, false, false); //2 chambers, 3 orders
//        generator.writeOledSchedule(OLED_1, DEFAULT_SPLIT_SIZE, true, false, false); //2 chambers, 3 orders
        // baking job
//        generator.writeOledSchedule(OLED_4, DEFAULT_SPLIT_SIZE, false, true, false); //2 chambers, 3 orders, baking
//        generator.writeOledSchedule(OLED_5, DEFAULT_SPLIT_SIZE, false, true, false); //6 chambers,19 orders, baking
        // baking job, 60 days horizon
//        generator.writeOledSchedule(OLED_6, DEFAULT_SPLIT_SIZE, false, true, false); //6 chambers,30 orders, baking
        // maintenance
//        generator.writeOledSchedule(OLED_7, DEFAULT_SPLIT_SIZE, false, true, true); //2 chambers, 3 orders, baking, maintenance
//        generator.writeOledSchedule(OLED_8, DEFAULT_SPLIT_SIZE, false, true, true); //6 chambers,19 orders, baking, maintenance
        // benchmark
        generator.writeBench();
    }

    private void writeBench() {
        int[] tsArray = {30, 60};
        int[] phaseArray = {1, 2, 3, 10, 20, 50, 100};
        int[] orderArray = {10, 20, 30, 100, 200, 500, 1000};

        for (int ts : tsArray) {
            for(int i = 0; i < phaseArray.length; i++) {
                this.benchTimeHorizon = ts;
                this.benchPhaseCnt = phaseArray[i];
                this.benchOrderCnt = orderArray[i];
                writeOledSchedule(OLED_B, DEFAULT_SPLIT_SIZE, false, true, true);
            }
        }
    }


    protected final SolutionFileIO<OledSchedule> solutionFileIO;
    protected  final File outputDir;

    public static final LocalDate DEFAULT_START_DATE = LocalDate.of(2023, 12, 1);
    public static final int DEFAULT_TIME_HORIZON = 30;
    public static final int DEFAULT_SPLIT_SIZE = CapacityType.L.getCapacitySize();
    private int splitSize = DEFAULT_SPLIT_SIZE;
    private boolean initialized = false;
    private boolean addBakingJob = false;
    private boolean addMaintJob = false;
    private int benchPhaseCnt = 50;
    private int benchOrderCnt = 250;
    private int benchTimeHorizon = DEFAULT_TIME_HORIZON;
    public void setAddBakingJob(boolean addBakingJob) {
        this.addBakingJob = addBakingJob;
    }
    private boolean overConstrained = false;
    public void setOverConstrained(boolean overConstrained) {
        this.overConstrained = overConstrained;
    }

    public OledSchedulingGenerator() {
        solutionFileIO = new OledSchedulingXlsxFileIO();
        outputDir = new File(CommonApp.determineDataDir(OledSchedulingApp.DATA_DIR_NAME), "unsolved");
    }

    private void writeOledSchedule(String example, int splitSize, boolean overconstrained, boolean addBakingJob, boolean addMaintJob) {
        this.splitSize = splitSize;
        this.overConstrained = overconstrained;
        this.addBakingJob = addBakingJob;
        this.addMaintJob = addMaintJob;
        OledSchedule oledSchedule = createOledSchedule(example, DEFAULT_START_DATE, DEFAULT_TIME_HORIZON, splitSize);
        if (OLED_6.equals(example)) {
            oledSchedule = createOledSchedule(example, DEFAULT_START_DATE, DEFAULT_TIME_HORIZON * 2, splitSize);
        }
        String fileName = determineFileName(example, oledSchedule);
        File outputFile = new File(outputDir, fileName + "." + solutionFileIO.getOutputFileExtension());
        solutionFileIO.write(oledSchedule, outputFile);
        logger.info("Saved: {}", outputFile);
    }

    public void writeOledSchedule(String example, OledSchedule oledSchedule) {
        this.initialized = true;
        String fileName = determineFileName(example, oledSchedule);
        File outputFile = new File(outputDir, fileName + "." + solutionFileIO.getOutputFileExtension());
        solutionFileIO.write(oledSchedule, outputFile);
        logger.info("Saved: {}", outputFile);
    }

    private String determineFileName(String example, OledSchedule schedule) {
        if (example.equals(OLED_1)
                || example.equals(OLED_2)
                || example.equals(OLED_3)
                || example.equals(OLED_4)
                || example.equals(OLED_5)
                || example.equals(OLED_6)
                || example.equals(OLED_7)
                || example.equals(OLED_8)
                || example.equals(OLED_B))
        {
            String fileName = example + "-" + schedule.getChamberList().size() + "c-" + schedule.getOrderList().size() + "o-" + schedule.getTimeslotList().size() + "ts";
            if (overConstrained) { fileName = fileName + "-over" + "-" + Integer.toString(splitSize); }
            if (addBakingJob) { fileName = fileName + "-baking"; };
            if (addMaintJob) { fileName = fileName + "-maint"; };
            if (initialized) { fileName = fileName + "-init"; }
            return fileName;
        } else {
            throw new IllegalArgumentException("Example not implemented for: " + example);
        }
    }
    
    public OledSchedule createOledSchedule(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        if (example.equals(OLED_1)) {
            return createOledScheduleOled1(example, startDate, timeHorizon, splitSize);
        } else if (example.equals(OLED_2)) {
            return createOledScheduleOled2(example, startDate, timeHorizon, splitSize);
        } else if (example.equals(OLED_3)) {
            return createOledScheduleOled3(example, startDate, timeHorizon, splitSize);
        } else if (example.equals(OLED_4)) {
            return createOledScheduleOled4(example, startDate, timeHorizon, splitSize);
        } else if (example.equals(OLED_5)) {
            return createOledScheduleOled5(example, startDate, timeHorizon, splitSize);
        } else if (example.equals(OLED_6)) {
            return createOledScheduleOled6(example, startDate, timeHorizon, splitSize);
        } else if (example.equals(OLED_7)) {
            return createOledScheduleOled7(example, startDate, timeHorizon, splitSize);
        } else if (example.equals(OLED_8)) {
            return createOledScheduleOled8(example, startDate, timeHorizon, splitSize);
        } else if (example.equals(OLED_B)) {
            return createOledScheduleOledB(example, startDate, timeHorizon, splitSize);
        }else {
            throw new IllegalArgumentException("Example not implemented for: " + example);
        }
    }

    //6 chambers,15 orders
    public OledSchedule createOledScheduleOled3(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        OledSchedule oledSchedule = new OledSchedule(0L);
        OledConstraintConfiguration constraintConfiguration = new OledConstraintConfiguration(0L);
        oledSchedule.setConstraintConfiguration(constraintConfiguration);

        List<Timeslot> timeslotList = new ArrayList<>();
        for (long i = 0; i < timeHorizon; i++) {
            timeslotList.add(new Timeslot(i, startDate.plusDays(i)));
        }
        oledSchedule.setTimeslotList(timeslotList);

        Phase phase1 = new Phase(1L,"PH1");
        Phase phase2 = new Phase(2L,"PH2");
        Phase phase3 = new Phase(3L,"PH3");

        List<Phase> phaseList = new ArrayList<>();
        phaseList.add(phase1);
        phaseList.add(phase2);
        phaseList.add(phase3);
        oledSchedule.setPhaseList(phaseList);

        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        Equipment equipment3 = new Equipment(3L, "GD");
        Equipment equipment4 = new Equipment(4L, "GD_MIXED");

        List<Equipment> equipmentList = new ArrayList<>();
        equipmentList.add(equipment1);
        equipmentList.add(equipment2);
        equipmentList.add(equipment3);
        equipmentList.add(equipment4);
        oledSchedule.setEquipmentList(equipmentList);

        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        PhaseEquipment phaseEquipment2 = new PhaseEquipment(2L, phase1, equipment2);
        PhaseEquipment phaseEquipment3 = new PhaseEquipment(3L, phase2, equipment2);
        PhaseEquipment phaseEquipment4 = new PhaseEquipment(4L, phase3, equipment1);
        PhaseEquipment phaseEquipment5 = new PhaseEquipment(5L, phase3, equipment3);

        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1, phaseEquipment2));
        phase2.setPhaseEquipmentList(Arrays.asList(phaseEquipment3));
        phase3.setPhaseEquipmentList(Arrays.asList(phaseEquipment4, phaseEquipment5));

        List<PhaseEquipment> phaseEquipmentList = new ArrayList<>();
        phaseEquipmentList.add(phaseEquipment1);
        phaseEquipmentList.add(phaseEquipment2);
        phaseEquipmentList.add(phaseEquipment3);
        phaseEquipmentList.add(phaseEquipment4);
        phaseEquipmentList.add(phaseEquipment5);
        oledSchedule.setPhaseEquipmentList(phaseEquipmentList);

        Product product1 = new Product(1,"HV075", ProductCategory.GREY);
        Product product2 = new Product(2,"HV076", ProductCategory.GREY);
        Product product3 = new Product(3,"HV081", ProductCategory.GREY);
        Product product4 = new Product(4,"HV088", ProductCategory.GREY);
        Product product5 = new Product(5,"HV089", ProductCategory.GREY);
        Product product6 = new Product(6,"Able", ProductCategory.ORANGE);
        Product product7 = new Product(7,"BF055", ProductCategory.ORANGE);
        Product product8 = new Product(8,"BF092", ProductCategory.ORANGE);
        Product product9 = new Product(9,"Bruce", ProductCategory.ORANGE);
        Product product10 = new Product(10,"Lucky", ProductCategory.ORANGE);
        Product product11 = new Product(11,"D3", ProductCategory.BLUE);
        Product product12 = new Product(12,"D6", ProductCategory.RED);
        Product product13 = new Product(13,"GN059", ProductCategory.GREEN);
        Product product14 = new Product(14,"GN059 BSM", ProductCategory.GREEN);
        Product product15 = new Product(15,"HM050", ProductCategory.GREEN);
        Product product16 = new Product(16,"HN058", ProductCategory.GREEN);
        Product product17 = new Product(17,"HN058 BSM", ProductCategory.GREEN);

        List<Product> productList = new ArrayList<>();
        productList.add(product1);
        productList.add(product2);
        productList.add(product3);
        productList.add(product4);
        productList.add(product5);
        productList.add(product6);
        productList.add(product7);
        productList.add(product8);
        productList.add(product9);
        productList.add(product10);
        productList.add(product11);
        productList.add(product12);
        productList.add(product13);
        productList.add(product14);
        productList.add(product15);
        productList.add(product16);
        productList.add(product17);
        oledSchedule.setProductList(productList);

        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment1);
        ProductEquipment productEquipment3 = new ProductEquipment(3L, product3, equipment1);
        ProductEquipment productEquipment4 = new ProductEquipment(4L, product4, equipment1);
        ProductEquipment productEquipment5 = new ProductEquipment(5L, product5, equipment1);
        ProductEquipment productEquipment6 = new ProductEquipment(6L, product6, equipment1);
        ProductEquipment productEquipment7 = new ProductEquipment(7L, product7, equipment1);
        ProductEquipment productEquipment8 = new ProductEquipment(8L, product8, equipment1);
        ProductEquipment productEquipment9 = new ProductEquipment(9L, product9, equipment1);
        ProductEquipment productEquipment10 = new ProductEquipment(10L, product10, equipment1);
        ProductEquipment productEquipment11 = new ProductEquipment(11L, product11, equipment2);
        ProductEquipment productEquipment12 = new ProductEquipment(12L, product12, equipment2);
        ProductEquipment productEquipment13 = new ProductEquipment(13L, product13, equipment3);
        ProductEquipment productEquipment14 = new ProductEquipment(14L, product14, equipment3);
        ProductEquipment productEquipment15 = new ProductEquipment(15L, product15, equipment3);
        ProductEquipment productEquipment16 = new ProductEquipment(16L, product16, equipment3);
        ProductEquipment productEquipment17 = new ProductEquipment(17L, product17, equipment3);

        List<ProductEquipment> productEquipmentList = new ArrayList<>();
        productEquipmentList.add(productEquipment1);
        productEquipmentList.add(productEquipment2);
        productEquipmentList.add(productEquipment3);
        productEquipmentList.add(productEquipment4);
        productEquipmentList.add(productEquipment5);
        productEquipmentList.add(productEquipment6);
        productEquipmentList.add(productEquipment7);
        productEquipmentList.add(productEquipment8);
        productEquipmentList.add(productEquipment9);
        productEquipmentList.add(productEquipment10);
        productEquipmentList.add(productEquipment11);
        productEquipmentList.add(productEquipment12);
        productEquipmentList.add(productEquipment13);
        productEquipmentList.add(productEquipment14);
        productEquipmentList.add(productEquipment15);
        productEquipmentList.add(productEquipment16);
        productEquipmentList.add(productEquipment17);
        oledSchedule.setProductEquipmentList(productEquipmentList);

        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
        product2.setProductEquipmentList(Arrays.asList(productEquipment2));
        product3.setProductEquipmentList(Arrays.asList(productEquipment3));
        product4.setProductEquipmentList(Arrays.asList(productEquipment4));
        product5.setProductEquipmentList(Arrays.asList(productEquipment5));
        product6.setProductEquipmentList(Arrays.asList(productEquipment6));
        product7.setProductEquipmentList(Arrays.asList(productEquipment7));
        product8.setProductEquipmentList(Arrays.asList(productEquipment8));
        product9.setProductEquipmentList(Arrays.asList(productEquipment9));
        product10.setProductEquipmentList(Arrays.asList(productEquipment10));
        product11.setProductEquipmentList(Arrays.asList(productEquipment11));
        product12.setProductEquipmentList(Arrays.asList(productEquipment12));
        product13.setProductEquipmentList(Arrays.asList(productEquipment13));
        product14.setProductEquipmentList(Arrays.asList(productEquipment14));
        product15.setProductEquipmentList(Arrays.asList(productEquipment15));
        product16.setProductEquipmentList(Arrays.asList(productEquipment16));
        product17.setProductEquipmentList(Arrays.asList(productEquipment17));

        ProductPhaseFillingTime productPhaseFillingTime1 = new ProductPhaseFillingTime(1L, product1, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime2 = new ProductPhaseFillingTime(2L, product2, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime3 = new ProductPhaseFillingTime(3L, product3, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime4 = new ProductPhaseFillingTime(4L, product4, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime5 = new ProductPhaseFillingTime(5L, product5, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime6 = new ProductPhaseFillingTime(6L, product6, phase1, 242);
        ProductPhaseFillingTime productPhaseFillingTime7 = new ProductPhaseFillingTime(7L, product6, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime8 = new ProductPhaseFillingTime(8L, product7, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime9 = new ProductPhaseFillingTime(9L, product7, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime10 = new ProductPhaseFillingTime(10L, product8, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime11 = new ProductPhaseFillingTime(11L, product8, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime12 = new ProductPhaseFillingTime(12L, product9, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime13 = new ProductPhaseFillingTime(13L, product9, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime14 = new ProductPhaseFillingTime(14L, product10, phase1, 242);
        ProductPhaseFillingTime productPhaseFillingTime15 = new ProductPhaseFillingTime(15L, product10, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime16 = new ProductPhaseFillingTime(16L, product11, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime17 = new ProductPhaseFillingTime(17L, product11, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime18 = new ProductPhaseFillingTime(18L, product12, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime19 = new ProductPhaseFillingTime(19L, product12, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime20 = new ProductPhaseFillingTime(20L, product13, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime21 = new ProductPhaseFillingTime(21L, product14, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime22 = new ProductPhaseFillingTime(22L, product15, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime23 = new ProductPhaseFillingTime(23L, product16, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime24 = new ProductPhaseFillingTime(24L, product17, phase3, 194);

        product1.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime1));
        product2.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime2));
        product3.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime3));
        product4.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime4));
        product5.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime5));
        product6.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime6, productPhaseFillingTime7));
        product7.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime8, productPhaseFillingTime9));
        product8.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime10, productPhaseFillingTime11));
        product9.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime12, productPhaseFillingTime13));
        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14, productPhaseFillingTime15));
        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16, productPhaseFillingTime17));
        product12.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime18, productPhaseFillingTime19));
        product13.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime20));
        product14.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime21));
        product15.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime22));
        product16.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime23));
        product17.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime24));

        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
        productPhaseFillingTimeList.add(productPhaseFillingTime1);
        productPhaseFillingTimeList.add(productPhaseFillingTime2);
        productPhaseFillingTimeList.add(productPhaseFillingTime3);
        productPhaseFillingTimeList.add(productPhaseFillingTime4);
        productPhaseFillingTimeList.add(productPhaseFillingTime5);
        productPhaseFillingTimeList.add(productPhaseFillingTime6);
        productPhaseFillingTimeList.add(productPhaseFillingTime7);
        productPhaseFillingTimeList.add(productPhaseFillingTime8);
        productPhaseFillingTimeList.add(productPhaseFillingTime9);
        productPhaseFillingTimeList.add(productPhaseFillingTime10);
        productPhaseFillingTimeList.add(productPhaseFillingTime11);
        productPhaseFillingTimeList.add(productPhaseFillingTime12);
        productPhaseFillingTimeList.add(productPhaseFillingTime13);
        productPhaseFillingTimeList.add(productPhaseFillingTime14);
        productPhaseFillingTimeList.add(productPhaseFillingTime15);
        productPhaseFillingTimeList.add(productPhaseFillingTime16);
        productPhaseFillingTimeList.add(productPhaseFillingTime17);
        productPhaseFillingTimeList.add(productPhaseFillingTime18);
        productPhaseFillingTimeList.add(productPhaseFillingTime19);
        productPhaseFillingTimeList.add(productPhaseFillingTime20);
        productPhaseFillingTimeList.add(productPhaseFillingTime21);
        productPhaseFillingTimeList.add(productPhaseFillingTime22);
        productPhaseFillingTimeList.add(productPhaseFillingTime23);
        productPhaseFillingTimeList.add(productPhaseFillingTime24);
        oledSchedule.setProductPhaseFillingTimeList(productPhaseFillingTimeList);

        Chamber chamber1 = new Chamber(1L,"PH1AB", phase1);
        Chamber chamber2 = new Chamber(2L,"PH1CD", phase1);
        Chamber chamber3 = new Chamber(3L,"PH2AB", phase2);
        Chamber chamber4 = new Chamber(4L,"PH2CD", phase2);
        Chamber chamber5 = new Chamber(5L,"PH3AB", phase3);
        Chamber chamber6 = new Chamber(6L,"PH3CD", phase3);

        phase1.setChamberList(Arrays.asList(chamber1, chamber2));
        phase2.setChamberList(Arrays.asList(chamber3, chamber4));
        phase3.setChamberList(Arrays.asList(chamber5, chamber6));

        List<Chamber> chamberList = new ArrayList<>();
        chamberList.add(chamber1);
        chamberList.add(chamber2);
        chamberList.add(chamber3);
        chamberList.add(chamber4);
        chamberList.add(chamber5);
        chamberList.add(chamber6);
        oledSchedule.setChamberList(chamberList);

        oledSchedule.setUnavailableTimeslotPenaltyList(new ArrayList<UnavailableTimeslotPenalty>());

        Order order1 = new Order(1L,"SO01", product1, "2023/12/13", 500);
        Order order2 = new Order(2L,"SO02", product2, "2023/12/13", 500);
        Order order3 = new Order(3L,"SO03", product3, "2023/12/13", 500);
        Order order4 = new Order(4L,"SO04", product4, "2023/12/13", 500);
        Order order5 = new Order(5L,"SO05", product5, "2023/12/13", 500);
        Order order6 = new Order(6L,"SO06", product8, "2023/12/17", 1900);
        Order order7 = new Order(7L,"SO07", product9, "2023/12/06", 240);
        Order order8 = new Order(8L,"SO08", product10, "2023/12/10", 2382);
        Order order9 = new Order(9L,"SO09", product11, "2023/12/21", 14115);
        Order order10 = new Order(10L,"SO10", product12, "2023/12/27", 20370);
        Order order11 = new Order(11L,"SO11", product13, "2023/12/17", 2764);
        Order order12 = new Order(12L,"SO12", product14, "2023/12/26", 4640);
        Order order13 = new Order(13L,"SO13", product15, "2023/12/16", 604);
        Order order14 = new Order(14L,"SO14", product16, "2023/12/15", 1154);
        Order order15 = new Order(15L,"SO15", product17, "2023/12/12", 156);

        List<Order> orderList = new ArrayList<>();
        orderList.add(order1);
        orderList.add(order2);
        orderList.add(order3);
        orderList.add(order4);
        orderList.add(order5);
        orderList.add(order6);
        orderList.add(order7);
        orderList.add(order8);
        orderList.add(order9);
        orderList.add(order10);
        orderList.add(order11);
        orderList.add(order12);
        orderList.add(order13);
        orderList.add(order14);
        orderList.add(order15);
        oledSchedule.setOrderList(orderList);

        OledUtil.allocateProductionJob(oledSchedule, splitSize, addBakingJob);

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) timeslotList.size() * chamberList.size())
                        .pow(oledSchedule.getProdutionJobList().size());
        logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                example, oledSchedule.getProdutionJobList().size(), timeslotList.size(), chamberList.size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

        return oledSchedule;
    }

    //2 chambers, 3 orders
    public OledSchedule createOledScheduleOled1(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        OledSchedule oledSchedule = new OledSchedule(0L);
        OledConstraintConfiguration constraintConfiguration = new OledConstraintConfiguration(0L);
        oledSchedule.setConstraintConfiguration(constraintConfiguration);

        List<Timeslot> timeslotList = new ArrayList<>();
        for (long i = 0; i < timeHorizon; i++) {
            timeslotList.add(new Timeslot(i, startDate.plusDays(i)));
        }
        oledSchedule.setTimeslotList(timeslotList);

        Phase phase1 = new Phase(1L,"PH1");
//        Phase phase2 = new Phase(2L,"PH2");
//        Phase phase3 = new Phase(3L,"PH3");

        List<Phase> phaseList = new ArrayList<>();
        phaseList.add(phase1);
//        phaseList.add(phase2);
//        phaseList.add(phase3);
        oledSchedule.setPhaseList(phaseList);

        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        Equipment equipment3 = new Equipment(3L, "GD");
        Equipment equipment4 = new Equipment(4L, "GD_MIXED");

        List<Equipment> equipmentList = new ArrayList<>();
        equipmentList.add(equipment1);
        equipmentList.add(equipment2);
        equipmentList.add(equipment3);
        equipmentList.add(equipment4);
        oledSchedule.setEquipmentList(equipmentList);

        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        PhaseEquipment phaseEquipment2 = new PhaseEquipment(2L, phase1, equipment2);
//        PhaseEquipment phaseEquipment3 = new PhaseEquipment(3L, phase2, equipment2);
//        PhaseEquipment phaseEquipment4 = new PhaseEquipment(4L, phase3, equipment1);
//        PhaseEquipment phaseEquipment5 = new PhaseEquipment(5L, phase3, equipment3);

        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1, phaseEquipment2));
//        phase2.setPhaseEquipmentList(Arrays.asList(phaseEquipment3));
//        phase3.setPhaseEquipmentList(Arrays.asList(phaseEquipment4, phaseEquipment5));

        List<PhaseEquipment> phaseEquipmentList = new ArrayList<>();
        phaseEquipmentList.add(phaseEquipment1);
        phaseEquipmentList.add(phaseEquipment2);
//        phaseEquipmentList.add(phaseEquipment3);
//        phaseEquipmentList.add(phaseEquipment4);
//        phaseEquipmentList.add(phaseEquipment5);
        oledSchedule.setPhaseEquipmentList(phaseEquipmentList);

//        Product product1 = new Product(1,"HV075", ProductCategory.GREY);
//        Product product2 = new Product(2,"HV076", ProductCategory.GREY);
//        Product product3 = new Product(3,"HV081", ProductCategory.GREY);
//        Product product4 = new Product(4,"HV088", ProductCategory.GREY);
//        Product product5 = new Product(5,"HV089", ProductCategory.GREY);
//        Product product6 = new Product(6,"Able", ProductCategory.ORANGE);
//        Product product7 = new Product(7,"BF055", ProductCategory.ORANGE);
//        Product product8 = new Product(8,"BF092", ProductCategory.ORANGE);
//        Product product9 = new Product(9,"Bruce", ProductCategory.ORANGE);
        Product product10 = new Product(10,"Lucky", ProductCategory.ORANGE);
        Product product11 = new Product(11,"D3", ProductCategory.BLUE);
//        Product product12 = new Product(12,"D6", ProductCategory.RED);
//        Product product13 = new Product(13,"GN059", ProductCategory.GREEN);
//        Product product14 = new Product(14,"GN059 BSM", ProductCategory.GREEN);
//        Product product15 = new Product(15,"HM050", ProductCategory.GREEN);
//        Product product16 = new Product(16,"HN058", ProductCategory.GREEN);
//        Product product17 = new Product(17,"HN058 BSM", ProductCategory.GREEN);

        List<Product> productList = new ArrayList<>();
//        productList.add(product1);
//        productList.add(product2);
//        productList.add(product3);
//        productList.add(product4);
//        productList.add(product5);
//        productList.add(product6);
//        productList.add(product7);
//        productList.add(product8);
//        productList.add(product9);
        productList.add(product10);
        productList.add(product11);
//        productList.add(product12);
//        productList.add(product13);
//        productList.add(product14);
//        productList.add(product15);
//        productList.add(product16);
//        productList.add(product17);
        oledSchedule.setProductList(productList);

//        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
//        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment1);
//        ProductEquipment productEquipment3 = new ProductEquipment(3L, product3, equipment1);
//        ProductEquipment productEquipment4 = new ProductEquipment(4L, product4, equipment1);
//        ProductEquipment productEquipment5 = new ProductEquipment(5L, product5, equipment1);
//        ProductEquipment productEquipment6 = new ProductEquipment(6L, product6, equipment1);
//        ProductEquipment productEquipment7 = new ProductEquipment(7L, product7, equipment1);
//        ProductEquipment productEquipment8 = new ProductEquipment(8L, product8, equipment1);
//        ProductEquipment productEquipment9 = new ProductEquipment(9L, product9, equipment1);
        ProductEquipment productEquipment10 = new ProductEquipment(10L, product10, equipment1);
        ProductEquipment productEquipment11 = new ProductEquipment(11L, product11, equipment2);
//        ProductEquipment productEquipment12 = new ProductEquipment(12L, product12, equipment2);
//        ProductEquipment productEquipment13 = new ProductEquipment(13L, product13, equipment3);
//        ProductEquipment productEquipment14 = new ProductEquipment(14L, product14, equipment3);
//        ProductEquipment productEquipment15 = new ProductEquipment(15L, product15, equipment3);
//        ProductEquipment productEquipment16 = new ProductEquipment(16L, product16, equipment3);
//        ProductEquipment productEquipment17 = new ProductEquipment(17L, product17, equipment3);

        List<ProductEquipment> productEquipmentList = new ArrayList<>();
//        productEquipmentList.add(productEquipment1);
//        productEquipmentList.add(productEquipment2);
//        productEquipmentList.add(productEquipment3);
//        productEquipmentList.add(productEquipment4);
//        productEquipmentList.add(productEquipment5);
//        productEquipmentList.add(productEquipment6);
//        productEquipmentList.add(productEquipment7);
//        productEquipmentList.add(productEquipment8);
//        productEquipmentList.add(productEquipment9);
        productEquipmentList.add(productEquipment10);
        productEquipmentList.add(productEquipment11);
//        productEquipmentList.add(productEquipment12);
//        productEquipmentList.add(productEquipment13);
//        productEquipmentList.add(productEquipment14);
//        productEquipmentList.add(productEquipment15);
//        productEquipmentList.add(productEquipment16);
//        productEquipmentList.add(productEquipment17);
        oledSchedule.setProductEquipmentList(productEquipmentList);

//        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
//        product2.setProductEquipmentList(Arrays.asList(productEquipment2));
//        product3.setProductEquipmentList(Arrays.asList(productEquipment3));
//        product4.setProductEquipmentList(Arrays.asList(productEquipment4));
//        product5.setProductEquipmentList(Arrays.asList(productEquipment5));
//        product6.setProductEquipmentList(Arrays.asList(productEquipment6));
//        product7.setProductEquipmentList(Arrays.asList(productEquipment7));
//        product8.setProductEquipmentList(Arrays.asList(productEquipment8));
//        product9.setProductEquipmentList(Arrays.asList(productEquipment9));
        product10.setProductEquipmentList(Arrays.asList(productEquipment10));
        product11.setProductEquipmentList(Arrays.asList(productEquipment11));
//        product12.setProductEquipmentList(Arrays.asList(productEquipment12));
//        product13.setProductEquipmentList(Arrays.asList(productEquipment13));
//        product14.setProductEquipmentList(Arrays.asList(productEquipment14));
//        product15.setProductEquipmentList(Arrays.asList(productEquipment15));
//        product16.setProductEquipmentList(Arrays.asList(productEquipment16));
//        product17.setProductEquipmentList(Arrays.asList(productEquipment17));

//        ProductPhaseFillingTime productPhaseFillingTime1 = new ProductPhaseFillingTime(1L, product1, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime2 = new ProductPhaseFillingTime(2L, product2, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime3 = new ProductPhaseFillingTime(3L, product3, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime4 = new ProductPhaseFillingTime(4L, product4, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime5 = new ProductPhaseFillingTime(5L, product5, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime6 = new ProductPhaseFillingTime(6L, product6, phase1, 242);
//        ProductPhaseFillingTime productPhaseFillingTime7 = new ProductPhaseFillingTime(7L, product6, phase3, 242);
//        ProductPhaseFillingTime productPhaseFillingTime8 = new ProductPhaseFillingTime(8L, product7, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime9 = new ProductPhaseFillingTime(9L, product7, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime10 = new ProductPhaseFillingTime(10L, product8, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime11 = new ProductPhaseFillingTime(11L, product8, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime12 = new ProductPhaseFillingTime(12L, product9, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime13 = new ProductPhaseFillingTime(13L, product9, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime14 = new ProductPhaseFillingTime(14L, product10, phase1, 242);
//        ProductPhaseFillingTime productPhaseFillingTime15 = new ProductPhaseFillingTime(15L, product10, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime16 = new ProductPhaseFillingTime(16L, product11, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime17 = new ProductPhaseFillingTime(17L, product11, phase3, 242);
//        ProductPhaseFillingTime productPhaseFillingTime18 = new ProductPhaseFillingTime(18L, product12, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime19 = new ProductPhaseFillingTime(19L, product12, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime20 = new ProductPhaseFillingTime(20L, product13, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime21 = new ProductPhaseFillingTime(21L, product14, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime22 = new ProductPhaseFillingTime(22L, product15, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime23 = new ProductPhaseFillingTime(23L, product16, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime24 = new ProductPhaseFillingTime(24L, product17, phase3, 194);

//        product1.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime1));
//        product2.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime2));
//        product3.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime3));
//        product4.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime4));
//        product5.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime5));
//        product6.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime6, productPhaseFillingTime7));
//        product7.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime8, productPhaseFillingTime9));
//        product8.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime10, productPhaseFillingTime11));
//        product9.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime12, productPhaseFillingTime13));
//        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14, productPhaseFillingTime15));
//        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16, productPhaseFillingTime17));
        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14));
        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16));
//        product12.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime18, productPhaseFillingTime19));
//        product13.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime20));
//        product14.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime21));
//        product15.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime22));
//        product16.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime23));
//        product17.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime24));

        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
//        productPhaseFillingTimeList.add(productPhaseFillingTime1);
//        productPhaseFillingTimeList.add(productPhaseFillingTime2);
//        productPhaseFillingTimeList.add(productPhaseFillingTime3);
//        productPhaseFillingTimeList.add(productPhaseFillingTime4);
//        productPhaseFillingTimeList.add(productPhaseFillingTime5);
//        productPhaseFillingTimeList.add(productPhaseFillingTime6);
//        productPhaseFillingTimeList.add(productPhaseFillingTime7);
//        productPhaseFillingTimeList.add(productPhaseFillingTime8);
//        productPhaseFillingTimeList.add(productPhaseFillingTime9);
//        productPhaseFillingTimeList.add(productPhaseFillingTime10);
//        productPhaseFillingTimeList.add(productPhaseFillingTime11);
//        productPhaseFillingTimeList.add(productPhaseFillingTime12);
//        productPhaseFillingTimeList.add(productPhaseFillingTime13);
        productPhaseFillingTimeList.add(productPhaseFillingTime14);
//        productPhaseFillingTimeList.add(productPhaseFillingTime15);
        productPhaseFillingTimeList.add(productPhaseFillingTime16);
//        productPhaseFillingTimeList.add(productPhaseFillingTime17);
//        productPhaseFillingTimeList.add(productPhaseFillingTime18);
//        productPhaseFillingTimeList.add(productPhaseFillingTime19);
//        productPhaseFillingTimeList.add(productPhaseFillingTime20);
//        productPhaseFillingTimeList.add(productPhaseFillingTime21);
//        productPhaseFillingTimeList.add(productPhaseFillingTime22);
//        productPhaseFillingTimeList.add(productPhaseFillingTime23);
//        productPhaseFillingTimeList.add(productPhaseFillingTime24);
        oledSchedule.setProductPhaseFillingTimeList(productPhaseFillingTimeList);

        Chamber chamber1 = new Chamber(1L,"PH1AB", phase1);
        Chamber chamber2 = new Chamber(2L,"PH1CD", phase1);
//        Chamber chamber3 = new Chamber(3L,"PH2AB", phase2);
//        Chamber chamber4 = new Chamber(4L,"PH2CD", phase2);
//        Chamber chamber5 = new Chamber(5L,"PH3AB", phase3);
//        Chamber chamber6 = new Chamber(6L,"PH3CD", phase3);

        phase1.setChamberList(Arrays.asList(chamber1, chamber2));
//        phase2.setChamberList(Arrays.asList(chamber3, chamber4));
//        phase3.setChamberList(Arrays.asList(chamber5, chamber6));

        List<Chamber> chamberList = new ArrayList<>();
        chamberList.add(chamber1);
        chamberList.add(chamber2);
//        chamberList.add(chamber3);
//        chamberList.add(chamber4);
//        chamberList.add(chamber5);
//        chamberList.add(chamber6);
        oledSchedule.setChamberList(chamberList);

        oledSchedule.setUnavailableTimeslotPenaltyList(new ArrayList<UnavailableTimeslotPenalty>());

//        Order order1 = new Order(1L,"SO01", product1, "2023/12/13", 500);
//        Order order2 = new Order(2L,"SO02", product2, "2023/12/13", 500);
//        Order order3 = new Order(3L,"SO03", product3, "2023/12/13", 500);
//        Order order4 = new Order(4L,"SO04", product4, "2023/12/13", 500);
//        Order order5 = new Order(5L,"SO05", product5, "2023/12/13", 500);
//        Order order6 = new Order(6L,"SO06", product8, "2023/12/17", 1900);
//        Order order7 = new Order(7L,"SO07", product9, "2023/12/06", 240);
//        Order order8 = new Order(8L,"SO08", product10, "2023/12/10", 2382);
//        Order order9 = new Order(9L,"SO09", product11, "2023/12/21", 14115);
//        Order order10 = new Order(10L,"SO10", product12, "2023/12/27", 20370);
        Order order8 = new Order(8L,"SO08", product10, "2023/12/10", 2382);
        Order order9 = new Order(9L,"SO09", product11, "2023/12/18", 6550);
        Order order10 = new Order(10L,"SO10", product11, "2023/12/20", 4600);
        if (overConstrained) {
            order8 = new Order(8L,"SO08", product10, "2023/12/10", 17000);
            order9 = new Order(9L,"SO09", product11, "2023/12/18", 13000);
            order10 = new Order(10L,"SO10", product11, "2023/12/20", 20000);
        }
//        Order order11 = new Order(11L,"SO11", product13, "2023/12/17", 2764);
//        Order order12 = new Order(12L,"SO12", product14, "2023/12/26", 4640);
//        Order order13 = new Order(13L,"SO13", product15, "2023/12/16", 604);
//        Order order14 = new Order(14L,"SO14", product16, "2023/12/15", 1154);
//        Order order15 = new Order(15L,"SO15", product17, "2023/12/12", 156);
        List<Order> orderList = new ArrayList<>();
//        orderList.add(order1);
//        orderList.add(order2);
//        orderList.add(order3);
//        orderList.add(order4);
//        orderList.add(order5);
//        orderList.add(order6);
//        orderList.add(order7);
        orderList.add(order8);
        orderList.add(order9);
        orderList.add(order10);
//        orderList.add(order11);
//        orderList.add(order12);
//        orderList.add(order13);
//        orderList.add(order14);
//        orderList.add(order15);
        oledSchedule.setOrderList(orderList);

        OledUtil.allocateProductionJob(oledSchedule, splitSize, addBakingJob);

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) timeslotList.size() * chamberList.size())
                        .pow(oledSchedule.getProdutionJobList().size());
        logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                example, oledSchedule.getProdutionJobList().size(), timeslotList.size(), chamberList.size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

        return oledSchedule;
    }

    //4 chambers, 3 orders
    public OledSchedule createOledScheduleOled2(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        OledSchedule oledSchedule = new OledSchedule(0L);
        OledConstraintConfiguration constraintConfiguration = new OledConstraintConfiguration(0L);
        oledSchedule.setConstraintConfiguration(constraintConfiguration);

        List<Timeslot> timeslotList = new ArrayList<>();
        for (int i = 0; i < timeHorizon; i++) {
            timeslotList.add(new Timeslot(i, startDate.plusDays(i)));
        }
        oledSchedule.setTimeslotList(timeslotList);

        Phase phase1 = new Phase(1L,"PH1");
        Phase phase2 = new Phase(2L,"PH2");
//        Phase phase3 = new Phase(3L,"PH3");

        List<Phase> phaseList = new ArrayList<>();
        phaseList.add(phase1);
        phaseList.add(phase2);
//        phaseList.add(phase3);
        oledSchedule.setPhaseList(phaseList);

        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        Equipment equipment3 = new Equipment(3L, "GD");
        Equipment equipment4 = new Equipment(4L, "GD_MIXED");

        List<Equipment> equipmentList = new ArrayList<>();
        equipmentList.add(equipment1);
        equipmentList.add(equipment2);
        equipmentList.add(equipment3);
        equipmentList.add(equipment4);
        oledSchedule.setEquipmentList(equipmentList);

        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        PhaseEquipment phaseEquipment2 = new PhaseEquipment(2L, phase1, equipment2);
        PhaseEquipment phaseEquipment3 = new PhaseEquipment(3L, phase2, equipment2);
//        PhaseEquipment phaseEquipment4 = new PhaseEquipment(4L, phase3, equipment1);
//        PhaseEquipment phaseEquipment5 = new PhaseEquipment(5L, phase3, equipment3);

        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1, phaseEquipment2));
        phase2.setPhaseEquipmentList(Arrays.asList(phaseEquipment3));
//        phase3.setPhaseEquipmentList(Arrays.asList(phaseEquipment4, phaseEquipment5));

        List<PhaseEquipment> phaseEquipmentList = new ArrayList<>();
        phaseEquipmentList.add(phaseEquipment1);
        phaseEquipmentList.add(phaseEquipment2);
        phaseEquipmentList.add(phaseEquipment3);
//        phaseEquipmentList.add(phaseEquipment4);
//        phaseEquipmentList.add(phaseEquipment5);
        oledSchedule.setPhaseEquipmentList(phaseEquipmentList);

//        Product product1 = new Product(1,"HV075", ProductCategory.GREY);
//        Product product2 = new Product(2,"HV076", ProductCategory.GREY);
//        Product product3 = new Product(3,"HV081", ProductCategory.GREY);
//        Product product4 = new Product(4,"HV088", ProductCategory.GREY);
//        Product product5 = new Product(5,"HV089", ProductCategory.GREY);
//        Product product6 = new Product(6,"Able", ProductCategory.ORANGE);
//        Product product7 = new Product(7,"BF055", ProductCategory.ORANGE);
//        Product product8 = new Product(8,"BF092", ProductCategory.ORANGE);
//        Product product9 = new Product(9,"Bruce", ProductCategory.ORANGE);
        Product product10 = new Product(10,"Lucky", ProductCategory.ORANGE);
        Product product11 = new Product(11,"D3", ProductCategory.BLUE);
        Product product12 = new Product(12,"D6", ProductCategory.RED);
//        Product product13 = new Product(13,"GN059", ProductCategory.GREEN);
//        Product product14 = new Product(14,"GN059 BSM", ProductCategory.GREEN);
//        Product product15 = new Product(15,"HM050", ProductCategory.GREEN);
//        Product product16 = new Product(16,"HN058", ProductCategory.GREEN);
//        Product product17 = new Product(17,"HN058 BSM", ProductCategory.GREEN);

        List<Product> productList = new ArrayList<>();
//        productList.add(product1);
//        productList.add(product2);
//        productList.add(product3);
//        productList.add(product4);
//        productList.add(product5);
//        productList.add(product6);
//        productList.add(product7);
//        productList.add(product8);
//        productList.add(product9);
        productList.add(product10);
        productList.add(product11);
        productList.add(product12);
//        productList.add(product13);
//        productList.add(product14);
//        productList.add(product15);
//        productList.add(product16);
//        productList.add(product17);
        oledSchedule.setProductList(productList);

//        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
//        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment1);
//        ProductEquipment productEquipment3 = new ProductEquipment(3L, product3, equipment1);
//        ProductEquipment productEquipment4 = new ProductEquipment(4L, product4, equipment1);
//        ProductEquipment productEquipment5 = new ProductEquipment(5L, product5, equipment1);
//        ProductEquipment productEquipment6 = new ProductEquipment(6L, product6, equipment1);
//        ProductEquipment productEquipment7 = new ProductEquipment(7L, product7, equipment1);
//        ProductEquipment productEquipment8 = new ProductEquipment(8L, product8, equipment1);
//        ProductEquipment productEquipment9 = new ProductEquipment(9L, product9, equipment1);
        ProductEquipment productEquipment10 = new ProductEquipment(10L, product10, equipment1);
        ProductEquipment productEquipment11 = new ProductEquipment(11L, product11, equipment2);
        ProductEquipment productEquipment12 = new ProductEquipment(12L, product12, equipment2);
//        ProductEquipment productEquipment13 = new ProductEquipment(13L, product13, equipment3);
//        ProductEquipment productEquipment14 = new ProductEquipment(14L, product14, equipment3);
//        ProductEquipment productEquipment15 = new ProductEquipment(15L, product15, equipment3);
//        ProductEquipment productEquipment16 = new ProductEquipment(16L, product16, equipment3);
//        ProductEquipment productEquipment17 = new ProductEquipment(17L, product17, equipment3);

        List<ProductEquipment> productEquipmentList = new ArrayList<>();
//        productEquipmentList.add(productEquipment1);
//        productEquipmentList.add(productEquipment2);
//        productEquipmentList.add(productEquipment3);
//        productEquipmentList.add(productEquipment4);
//        productEquipmentList.add(productEquipment5);
//        productEquipmentList.add(productEquipment6);
//        productEquipmentList.add(productEquipment7);
//        productEquipmentList.add(productEquipment8);
//        productEquipmentList.add(productEquipment9);
        productEquipmentList.add(productEquipment10);
        productEquipmentList.add(productEquipment11);
        productEquipmentList.add(productEquipment12);
//        productEquipmentList.add(productEquipment13);
//        productEquipmentList.add(productEquipment14);
//        productEquipmentList.add(productEquipment15);
//        productEquipmentList.add(productEquipment16);
//        productEquipmentList.add(productEquipment17);
        oledSchedule.setProductEquipmentList(productEquipmentList);

//        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
//        product2.setProductEquipmentList(Arrays.asList(productEquipment2));
//        product3.setProductEquipmentList(Arrays.asList(productEquipment3));
//        product4.setProductEquipmentList(Arrays.asList(productEquipment4));
//        product5.setProductEquipmentList(Arrays.asList(productEquipment5));
//        product6.setProductEquipmentList(Arrays.asList(productEquipment6));
//        product7.setProductEquipmentList(Arrays.asList(productEquipment7));
//        product8.setProductEquipmentList(Arrays.asList(productEquipment8));
//        product9.setProductEquipmentList(Arrays.asList(productEquipment9));
        product10.setProductEquipmentList(Arrays.asList(productEquipment10));
        product11.setProductEquipmentList(Arrays.asList(productEquipment11));
        product12.setProductEquipmentList(Arrays.asList(productEquipment12));
//        product13.setProductEquipmentList(Arrays.asList(productEquipment13));
//        product14.setProductEquipmentList(Arrays.asList(productEquipment14));
//        product15.setProductEquipmentList(Arrays.asList(productEquipment15));
//        product16.setProductEquipmentList(Arrays.asList(productEquipment16));
//        product17.setProductEquipmentList(Arrays.asList(productEquipment17));

//        ProductPhaseFillingTime productPhaseFillingTime1 = new ProductPhaseFillingTime(1L, product1, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime2 = new ProductPhaseFillingTime(2L, product2, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime3 = new ProductPhaseFillingTime(3L, product3, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime4 = new ProductPhaseFillingTime(4L, product4, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime5 = new ProductPhaseFillingTime(5L, product5, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime6 = new ProductPhaseFillingTime(6L, product6, phase1, 242);
//        ProductPhaseFillingTime productPhaseFillingTime7 = new ProductPhaseFillingTime(7L, product6, phase3, 242);
//        ProductPhaseFillingTime productPhaseFillingTime8 = new ProductPhaseFillingTime(8L, product7, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime9 = new ProductPhaseFillingTime(9L, product7, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime10 = new ProductPhaseFillingTime(10L, product8, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime11 = new ProductPhaseFillingTime(11L, product8, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime12 = new ProductPhaseFillingTime(12L, product9, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime13 = new ProductPhaseFillingTime(13L, product9, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime14 = new ProductPhaseFillingTime(14L, product10, phase1, 242);
//        ProductPhaseFillingTime productPhaseFillingTime15 = new ProductPhaseFillingTime(15L, product10, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime16 = new ProductPhaseFillingTime(16L, product11, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime17 = new ProductPhaseFillingTime(17L, product11, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime18 = new ProductPhaseFillingTime(18L, product12, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime19 = new ProductPhaseFillingTime(19L, product12, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime20 = new ProductPhaseFillingTime(20L, product13, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime21 = new ProductPhaseFillingTime(21L, product14, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime22 = new ProductPhaseFillingTime(22L, product15, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime23 = new ProductPhaseFillingTime(23L, product16, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime24 = new ProductPhaseFillingTime(24L, product17, phase3, 194);

//        product1.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime1));
//        product2.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime2));
//        product3.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime3));
//        product4.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime4));
//        product5.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime5));
//        product6.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime6, productPhaseFillingTime7));
//        product7.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime8, productPhaseFillingTime9));
//        product8.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime10, productPhaseFillingTime11));
//        product9.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime12, productPhaseFillingTime13));
//        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14, productPhaseFillingTime15));
//        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16, productPhaseFillingTime17));
//        product12.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime18, productPhaseFillingTime19));
        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14));
        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16));
        product12.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime18));
//        product13.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime20));
//        product14.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime21));
//        product15.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime22));
//        product16.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime23));
//        product17.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime24));

        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
//        productPhaseFillingTimeList.add(productPhaseFillingTime1);
//        productPhaseFillingTimeList.add(productPhaseFillingTime2);
//        productPhaseFillingTimeList.add(productPhaseFillingTime3);
//        productPhaseFillingTimeList.add(productPhaseFillingTime4);
//        productPhaseFillingTimeList.add(productPhaseFillingTime5);
//        productPhaseFillingTimeList.add(productPhaseFillingTime6);
//        productPhaseFillingTimeList.add(productPhaseFillingTime7);
//        productPhaseFillingTimeList.add(productPhaseFillingTime8);
//        productPhaseFillingTimeList.add(productPhaseFillingTime9);
//        productPhaseFillingTimeList.add(productPhaseFillingTime10);
//        productPhaseFillingTimeList.add(productPhaseFillingTime11);
//        productPhaseFillingTimeList.add(productPhaseFillingTime12);
//        productPhaseFillingTimeList.add(productPhaseFillingTime13);
        productPhaseFillingTimeList.add(productPhaseFillingTime14);
//        productPhaseFillingTimeList.add(productPhaseFillingTime15);
        productPhaseFillingTimeList.add(productPhaseFillingTime16);
//        productPhaseFillingTimeList.add(productPhaseFillingTime17);
        productPhaseFillingTimeList.add(productPhaseFillingTime18);
//        productPhaseFillingTimeList.add(productPhaseFillingTime19);
//        productPhaseFillingTimeList.add(productPhaseFillingTime20);
//        productPhaseFillingTimeList.add(productPhaseFillingTime21);
//        productPhaseFillingTimeList.add(productPhaseFillingTime22);
//        productPhaseFillingTimeList.add(productPhaseFillingTime23);
//        productPhaseFillingTimeList.add(productPhaseFillingTime24);
        oledSchedule.setProductPhaseFillingTimeList(productPhaseFillingTimeList);

        Chamber chamber1 = new Chamber(1L,"PH1AB", phase1);
        Chamber chamber2 = new Chamber(2L,"PH1CD", phase1);
        Chamber chamber3 = new Chamber(3L,"PH2AB", phase2);
        Chamber chamber4 = new Chamber(4L,"PH2CD", phase2);
//        Chamber chamber5 = new Chamber(5L,"PH3AB", phase3);
//        Chamber chamber6 = new Chamber(6L,"PH3CD", phase3);

        phase1.setChamberList(Arrays.asList(chamber1, chamber2));
        phase2.setChamberList(Arrays.asList(chamber3, chamber4));
//        phase3.setChamberList(Arrays.asList(chamber5, chamber6));

        List<Chamber> chamberList = new ArrayList<>();
        chamberList.add(chamber1);
        chamberList.add(chamber2);
        chamberList.add(chamber3);
        chamberList.add(chamber4);
//        chamberList.add(chamber5);
//        chamberList.add(chamber6);
        oledSchedule.setChamberList(chamberList);

        oledSchedule.setUnavailableTimeslotPenaltyList(new ArrayList<UnavailableTimeslotPenalty>());

//        Order order1 = new Order(1L,"SO01", product1, "2023/12/13", 500);
//        Order order2 = new Order(2L,"SO02", product2, "2023/12/13", 500);
//        Order order3 = new Order(3L,"SO03", product3, "2023/12/13", 500);
//        Order order4 = new Order(4L,"SO04", product4, "2023/12/13", 500);
//        Order order5 = new Order(5L,"SO05", product5, "2023/12/13", 500);
//        Order order6 = new Order(6L,"SO06", product8, "2023/12/17", 1900);
//        Order order7 = new Order(7L,"SO07", product9, "2023/12/06", 240);
        Order order8 = new Order(8L,"SO08", product10, "2023/12/10", 2382); // Lucky PH1AB
        Order order9 = new Order(9L,"SO09", product11, "2023/12/21", 14115); // D3 PH1CD
        Order order10 = new Order(10L,"SO10", product12, "2023/12/27", 20370); // D3 PH1AB
//        Order order11 = new Order(11L,"SO11", product13, "2023/12/17", 2764);
//        Order order12 = new Order(12L,"SO12", product14, "2023/12/26", 4640);
//        Order order13 = new Order(13L,"SO13", product15, "2023/12/16", 604);
//        Order order14 = new Order(14L,"SO14", product16, "2023/12/15", 1154);
//        Order order15 = new Order(15L,"SO15", product17, "2023/12/12", 156);

        List<Order> orderList = new ArrayList<>();
//        orderList.add(order1);
//        orderList.add(order2);
//        orderList.add(order3);
//        orderList.add(order4);
//        orderList.add(order5);
//        orderList.add(order6);
//        orderList.add(order7);
        orderList.add(order8);
        orderList.add(order9);
        orderList.add(order10);
//        orderList.add(order11);
//        orderList.add(order12);
//        orderList.add(order13);
//        orderList.add(order14);
//        orderList.add(order15);
        oledSchedule.setOrderList(orderList);

         OledUtil.allocateProductionJob(oledSchedule, splitSize, addBakingJob);

         BigInteger possibleSolutionSize =
                 BigInteger.valueOf((long) timeslotList.size() * chamberList.size())
                         .pow(oledSchedule.getProdutionJobList().size());
         logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                 example, oledSchedule.getProdutionJobList().size(), timeslotList.size(), chamberList.size(),
                 AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

         return oledSchedule;
    }

    //2 chambers, 3 orders, baking
    public OledSchedule createOledScheduleOled4(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        OledSchedule oledSchedule = new OledSchedule(0L);
        OledConstraintConfiguration constraintConfiguration = new OledConstraintConfiguration(0L);
        oledSchedule.setConstraintConfiguration(constraintConfiguration);

        List<Timeslot> timeslotList = new ArrayList<>();
        for (long i = 0; i < timeHorizon; i++) {
            timeslotList.add(new Timeslot(i, startDate.plusDays(i)));
        }
        oledSchedule.setTimeslotList(timeslotList);

        Phase phase1 = new Phase(1L,"PH1");
//        Phase phase2 = new Phase(2L,"PH2");
//        Phase phase3 = new Phase(3L,"PH3");

        List<Phase> phaseList = new ArrayList<>();
        phaseList.add(phase1);
//        phaseList.add(phase2);
//        phaseList.add(phase3);
        oledSchedule.setPhaseList(phaseList);

        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        Equipment equipment3 = new Equipment(3L, "GD");
        Equipment equipment4 = new Equipment(4L, "GD_MIXED");

        List<Equipment> equipmentList = new ArrayList<>();
        equipmentList.add(equipment1);
        equipmentList.add(equipment2);
        equipmentList.add(equipment3);
        equipmentList.add(equipment4);
        oledSchedule.setEquipmentList(equipmentList);

        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        PhaseEquipment phaseEquipment2 = new PhaseEquipment(2L, phase1, equipment2);
//        PhaseEquipment phaseEquipment3 = new PhaseEquipment(3L, phase2, equipment2);
//        PhaseEquipment phaseEquipment4 = new PhaseEquipment(4L, phase3, equipment1);
//        PhaseEquipment phaseEquipment5 = new PhaseEquipment(5L, phase3, equipment3);

        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1, phaseEquipment2));
//        phase2.setPhaseEquipmentList(Arrays.asList(phaseEquipment3));
//        phase3.setPhaseEquipmentList(Arrays.asList(phaseEquipment4, phaseEquipment5));

        List<PhaseEquipment> phaseEquipmentList = new ArrayList<>();
        phaseEquipmentList.add(phaseEquipment1);
        phaseEquipmentList.add(phaseEquipment2);
//        phaseEquipmentList.add(phaseEquipment3);
//        phaseEquipmentList.add(phaseEquipment4);
//        phaseEquipmentList.add(phaseEquipment5);
        oledSchedule.setPhaseEquipmentList(phaseEquipmentList);

//        Product product1 = new Product(1,"HV075", ProductCategory.GREY);
//        Product product2 = new Product(2,"HV076", ProductCategory.GREY);
//        Product product3 = new Product(3,"HV081", ProductCategory.GREY);
//        Product product4 = new Product(4,"HV088", ProductCategory.GREY);
//        Product product5 = new Product(5,"HV089", ProductCategory.GREY);
//        Product product6 = new Product(6,"Able", ProductCategory.ORANGE);
//        Product product7 = new Product(7,"BF055", ProductCategory.ORANGE);
//        Product product8 = new Product(8,"BF092", ProductCategory.ORANGE);
        Product product9 = new Product(9,"Bruce", ProductCategory.ORANGE);
        Product product10 = new Product(10,"Lucky", ProductCategory.ORANGE);
        Product product11 = new Product(11,"D3", ProductCategory.BLUE);
//        Product product12 = new Product(12,"D6", ProductCategory.RED);
//        Product product13 = new Product(13,"GN059", ProductCategory.GREEN);
//        Product product14 = new Product(14,"GN059 BSM", ProductCategory.GREEN);
//        Product product15 = new Product(15,"HM050", ProductCategory.GREEN);
//        Product product16 = new Product(16,"HN058", ProductCategory.GREEN);
//        Product product17 = new Product(17,"HN058 BSM", ProductCategory.GREEN);

        List<Product> productList = new ArrayList<>();
//        productList.add(product1);
//        productList.add(product2);
//        productList.add(product3);
//        productList.add(product4);
//        productList.add(product5);
//        productList.add(product6);
//        productList.add(product7);
//        productList.add(product8);
        productList.add(product9);
        productList.add(product10);
        productList.add(product11);
//        productList.add(product12);
//        productList.add(product13);
//        productList.add(product14);
//        productList.add(product15);
//        productList.add(product16);
//        productList.add(product17);
        oledSchedule.setProductList(productList);

//        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
//        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment1);
//        ProductEquipment productEquipment3 = new ProductEquipment(3L, product3, equipment1);
//        ProductEquipment productEquipment4 = new ProductEquipment(4L, product4, equipment1);
//        ProductEquipment productEquipment5 = new ProductEquipment(5L, product5, equipment1);
//        ProductEquipment productEquipment6 = new ProductEquipment(6L, product6, equipment1);
//        ProductEquipment productEquipment7 = new ProductEquipment(7L, product7, equipment1);
//        ProductEquipment productEquipment8 = new ProductEquipment(8L, product8, equipment1);
        ProductEquipment productEquipment9 = new ProductEquipment(9L, product9, equipment1);
        ProductEquipment productEquipment10 = new ProductEquipment(10L, product10, equipment1);
        ProductEquipment productEquipment11 = new ProductEquipment(11L, product11, equipment2);
//        ProductEquipment productEquipment12 = new ProductEquipment(12L, product12, equipment2);
//        ProductEquipment productEquipment13 = new ProductEquipment(13L, product13, equipment3);
//        ProductEquipment productEquipment14 = new ProductEquipment(14L, product14, equipment3);
//        ProductEquipment productEquipment15 = new ProductEquipment(15L, product15, equipment3);
//        ProductEquipment productEquipment16 = new ProductEquipment(16L, product16, equipment3);
//        ProductEquipment productEquipment17 = new ProductEquipment(17L, product17, equipment3);

        List<ProductEquipment> productEquipmentList = new ArrayList<>();
//        productEquipmentList.add(productEquipment1);
//        productEquipmentList.add(productEquipment2);
//        productEquipmentList.add(productEquipment3);
//        productEquipmentList.add(productEquipment4);
//        productEquipmentList.add(productEquipment5);
//        productEquipmentList.add(productEquipment6);
//        productEquipmentList.add(productEquipment7);
//        productEquipmentList.add(productEquipment8);
        productEquipmentList.add(productEquipment9);
        productEquipmentList.add(productEquipment10);
        productEquipmentList.add(productEquipment11);
//        productEquipmentList.add(productEquipment12);
//        productEquipmentList.add(productEquipment13);
//        productEquipmentList.add(productEquipment14);
//        productEquipmentList.add(productEquipment15);
//        productEquipmentList.add(productEquipment16);
//        productEquipmentList.add(productEquipment17);
        oledSchedule.setProductEquipmentList(productEquipmentList);

//        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
//        product2.setProductEquipmentList(Arrays.asList(productEquipment2));
//        product3.setProductEquipmentList(Arrays.asList(productEquipment3));
//        product4.setProductEquipmentList(Arrays.asList(productEquipment4));
//        product5.setProductEquipmentList(Arrays.asList(productEquipment5));
//        product6.setProductEquipmentList(Arrays.asList(productEquipment6));
//        product7.setProductEquipmentList(Arrays.asList(productEquipment7));
//        product8.setProductEquipmentList(Arrays.asList(productEquipment8));
        product9.setProductEquipmentList(Arrays.asList(productEquipment9));
        product10.setProductEquipmentList(Arrays.asList(productEquipment10));
        product11.setProductEquipmentList(Arrays.asList(productEquipment11));
//        product12.setProductEquipmentList(Arrays.asList(productEquipment12));
//        product13.setProductEquipmentList(Arrays.asList(productEquipment13));
//        product14.setProductEquipmentList(Arrays.asList(productEquipment14));
//        product15.setProductEquipmentList(Arrays.asList(productEquipment15));
//        product16.setProductEquipmentList(Arrays.asList(productEquipment16));
//        product17.setProductEquipmentList(Arrays.asList(productEquipment17));

//        ProductPhaseFillingTime productPhaseFillingTime1 = new ProductPhaseFillingTime(1L, product1, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime2 = new ProductPhaseFillingTime(2L, product2, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime3 = new ProductPhaseFillingTime(3L, product3, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime4 = new ProductPhaseFillingTime(4L, product4, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime5 = new ProductPhaseFillingTime(5L, product5, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime6 = new ProductPhaseFillingTime(6L, product6, phase1, 242);
//        ProductPhaseFillingTime productPhaseFillingTime7 = new ProductPhaseFillingTime(7L, product6, phase3, 242);
//        ProductPhaseFillingTime productPhaseFillingTime8 = new ProductPhaseFillingTime(8L, product7, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime9 = new ProductPhaseFillingTime(9L, product7, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime10 = new ProductPhaseFillingTime(10L, product8, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime11 = new ProductPhaseFillingTime(11L, product8, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime12 = new ProductPhaseFillingTime(12L, product9, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime13 = new ProductPhaseFillingTime(13L, product9, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime14 = new ProductPhaseFillingTime(14L, product10, phase1, 242);
//        ProductPhaseFillingTime productPhaseFillingTime15 = new ProductPhaseFillingTime(15L, product10, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime16 = new ProductPhaseFillingTime(16L, product11, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime17 = new ProductPhaseFillingTime(17L, product11, phase3, 242);
//        ProductPhaseFillingTime productPhaseFillingTime18 = new ProductPhaseFillingTime(18L, product12, phase1, 194);
//        ProductPhaseFillingTime productPhaseFillingTime19 = new ProductPhaseFillingTime(19L, product12, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime20 = new ProductPhaseFillingTime(20L, product13, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime21 = new ProductPhaseFillingTime(21L, product14, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime22 = new ProductPhaseFillingTime(22L, product15, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime23 = new ProductPhaseFillingTime(23L, product16, phase3, 194);
//        ProductPhaseFillingTime productPhaseFillingTime24 = new ProductPhaseFillingTime(24L, product17, phase3, 194);

//        product1.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime1));
//        product2.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime2));
//        product3.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime3));
//        product4.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime4));
//        product5.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime5));
//        product6.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime6, productPhaseFillingTime7));
//        product7.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime8, productPhaseFillingTime9));
//        product8.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime10, productPhaseFillingTime11));
//        product9.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime12, productPhaseFillingTime13));
//        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14, productPhaseFillingTime15));
//        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16, productPhaseFillingTime17));
        product9.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime12));
        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14));
        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16));
//        product12.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime18, productPhaseFillingTime19));
//        product13.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime20));
//        product14.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime21));
//        product15.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime22));
//        product16.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime23));
//        product17.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime24));

        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
//        productPhaseFillingTimeList.add(productPhaseFillingTime1);
//        productPhaseFillingTimeList.add(productPhaseFillingTime2);
//        productPhaseFillingTimeList.add(productPhaseFillingTime3);
//        productPhaseFillingTimeList.add(productPhaseFillingTime4);
//        productPhaseFillingTimeList.add(productPhaseFillingTime5);
//        productPhaseFillingTimeList.add(productPhaseFillingTime6);
//        productPhaseFillingTimeList.add(productPhaseFillingTime7);
//        productPhaseFillingTimeList.add(productPhaseFillingTime8);
//        productPhaseFillingTimeList.add(productPhaseFillingTime9);
//        productPhaseFillingTimeList.add(productPhaseFillingTime10);
//        productPhaseFillingTimeList.add(productPhaseFillingTime11);
        productPhaseFillingTimeList.add(productPhaseFillingTime12);
//        productPhaseFillingTimeList.add(productPhaseFillingTime13);
        productPhaseFillingTimeList.add(productPhaseFillingTime14);
//        productPhaseFillingTimeList.add(productPhaseFillingTime15);
        productPhaseFillingTimeList.add(productPhaseFillingTime16);
//        productPhaseFillingTimeList.add(productPhaseFillingTime17);
//        productPhaseFillingTimeList.add(productPhaseFillingTime18);
//        productPhaseFillingTimeList.add(productPhaseFillingTime19);
//        productPhaseFillingTimeList.add(productPhaseFillingTime20);
//        productPhaseFillingTimeList.add(productPhaseFillingTime21);
//        productPhaseFillingTimeList.add(productPhaseFillingTime22);
//        productPhaseFillingTimeList.add(productPhaseFillingTime23);
//        productPhaseFillingTimeList.add(productPhaseFillingTime24);
        oledSchedule.setProductPhaseFillingTimeList(productPhaseFillingTimeList);

        Chamber chamber1 = new Chamber(1L,"PH1AB", phase1);
        Chamber chamber2 = new Chamber(2L,"PH1CD", phase1);
//        Chamber chamber3 = new Chamber(3L,"PH2AB", phase2);
//        Chamber chamber4 = new Chamber(4L,"PH2CD", phase2);
//        Chamber chamber5 = new Chamber(5L,"PH3AB", phase3);
//        Chamber chamber6 = new Chamber(6L,"PH3CD", phase3);

        phase1.setChamberList(Arrays.asList(chamber1, chamber2));
//        phase2.setChamberList(Arrays.asList(chamber3, chamber4));
//        phase3.setChamberList(Arrays.asList(chamber5, chamber6));

        List<Chamber> chamberList = new ArrayList<>();
        chamberList.add(chamber1);
        chamberList.add(chamber2);
//        chamberList.add(chamber3);
//        chamberList.add(chamber4);
//        chamberList.add(chamber5);
//        chamberList.add(chamber6);
        oledSchedule.setChamberList(chamberList);

        oledSchedule.setUnavailableTimeslotPenaltyList(new ArrayList<UnavailableTimeslotPenalty>());

//        Order order1 = new Order(1L,"SO01", product1, "2023/12/13", 500);
//        Order order2 = new Order(2L,"SO02", product2, "2023/12/13", 500);
//        Order order3 = new Order(3L,"SO03", product3, "2023/12/13", 500);
//        Order order4 = new Order(4L,"SO04", product4, "2023/12/13", 500);
//        Order order5 = new Order(5L,"SO05", product5, "2023/12/13", 500);
//        Order order6 = new Order(6L,"SO06", product8, "2023/12/17", 1900);
//        Order order7 = new Order(7L,"SO07", product9, "2023/12/06", 240);
//        Order order8 = new Order(8L,"SO08", product10, "2023/12/10", 2382);
//        Order order9 = new Order(9L,"SO09", product11, "2023/12/21", 14115);
        Order order7 = new Order(7L,"SO07", product9, "2023/12/27", 2950);
        Order order8 = new Order(8L,"SO08", product10, "2023/12/10", 2382);
        Order order9 = new Order(9L,"SO09", product11, "2023/12/21", 14115);
//        Order order10 = new Order(10L,"SO10", product12, "2023/12/27", 20370);
//        Order order11 = new Order(11L,"SO11", product13, "2023/12/17", 2764);
//        Order order12 = new Order(12L,"SO12", product14, "2023/12/26", 4640);
//        Order order13 = new Order(13L,"SO13", product15, "2023/12/16", 604);
//        Order order14 = new Order(14L,"SO14", product16, "2023/12/15", 1154);
//        Order order15 = new Order(15L,"SO15", product17, "2023/12/12", 156);

        List<Order> orderList = new ArrayList<>();
//        orderList.add(order1);
//        orderList.add(order2);
//        orderList.add(order3);
//        orderList.add(order4);
//        orderList.add(order5);
//        orderList.add(order6);
        orderList.add(order7);
        orderList.add(order8);
        orderList.add(order9);
//        orderList.add(order10);
//        orderList.add(order11);
//        orderList.add(order12);
//        orderList.add(order13);
//        orderList.add(order14);
//        orderList.add(order15);
        oledSchedule.setOrderList(orderList);

        OledUtil.allocateProductionJob(oledSchedule, splitSize, addBakingJob);

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) timeslotList.size() * chamberList.size())
                        .pow(oledSchedule.getProdutionJobList().size());
        logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                example, oledSchedule.getProdutionJobList().size(), timeslotList.size(), chamberList.size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

        return oledSchedule;
    }

    //2 chambers, 3 orders, baking, maintenance
    public OledSchedule createOledScheduleOled7(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        OledSchedule oledSchedule = createOledScheduleOled4(example, startDate, timeHorizon,splitSize);

        Product productMaint = new Product(0L, Product.OPS_MAINT, ProductCategory.OPS);
        oledSchedule.getProductList().add(productMaint);

        List<ProductEquipment> pes = new ArrayList<>();
        // Map Product Maintenance to all equipments
        long peId = (long) oledSchedule.getPhaseEquipmentList().size();
        for (Equipment equipment : oledSchedule.getEquipmentList()) {
            ProductEquipment pe = new ProductEquipment(peId++, productMaint, equipment);
            oledSchedule.getProductEquipmentList().add(pe);
            pes.add(pe);
        }
        productMaint.setProductEquipmentList(pes);
        productMaint.setProductPhaseFillingTimeList(new ArrayList<>());

        oledSchedule.setUnavailableTimeslotPenaltyList(
                OledUtil.generateUnavailableTimeslotPenaltyList(oledSchedule, productMaint, 2));
        OledUtil.allocateMaintenanceJob(oledSchedule, productMaint);

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) oledSchedule.getTimeslotList().size() * oledSchedule.getChamberList().size())
                        .pow(oledSchedule.getProdutionJobList().size());
        logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                example, oledSchedule.getProdutionJobList().size(), oledSchedule.getTimeslotList().size(), oledSchedule.getChamberList().size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

        return oledSchedule;
    }

    //6 chambers,19 orders,baking
    public OledSchedule createOledScheduleOled5(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        OledSchedule oledSchedule = new OledSchedule(0L);
        OledConstraintConfiguration constraintConfiguration = new OledConstraintConfiguration(0L);
        oledSchedule.setConstraintConfiguration(constraintConfiguration);

        List<Timeslot> timeslotList = new ArrayList<>();
        for (long i = 0; i < timeHorizon; i++) {
            timeslotList.add(new Timeslot(i, startDate.plusDays(i)));
        }
        oledSchedule.setTimeslotList(timeslotList);

        Phase phase1 = new Phase(1L,"PH1");
        Phase phase2 = new Phase(2L,"PH2");
        Phase phase3 = new Phase(3L,"PH3");

        List<Phase> phaseList = new ArrayList<>();
        phaseList.add(phase1);
        phaseList.add(phase2);
        phaseList.add(phase3);
        oledSchedule.setPhaseList(phaseList);

        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        Equipment equipment3 = new Equipment(3L, "GD");
        Equipment equipment4 = new Equipment(4L, "GD_MIXED");

        List<Equipment> equipmentList = new ArrayList<>();
        equipmentList.add(equipment1);
        equipmentList.add(equipment2);
        equipmentList.add(equipment3);
        equipmentList.add(equipment4);
        oledSchedule.setEquipmentList(equipmentList);

        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        PhaseEquipment phaseEquipment2 = new PhaseEquipment(2L, phase1, equipment2);
        PhaseEquipment phaseEquipment3 = new PhaseEquipment(3L, phase2, equipment2);
        PhaseEquipment phaseEquipment4 = new PhaseEquipment(4L, phase3, equipment1);
        PhaseEquipment phaseEquipment5 = new PhaseEquipment(5L, phase3, equipment3);

        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1, phaseEquipment2));
        phase2.setPhaseEquipmentList(Arrays.asList(phaseEquipment3));
        phase3.setPhaseEquipmentList(Arrays.asList(phaseEquipment4, phaseEquipment5));

        List<PhaseEquipment> phaseEquipmentList = new ArrayList<>();
        phaseEquipmentList.add(phaseEquipment1);
        phaseEquipmentList.add(phaseEquipment2);
        phaseEquipmentList.add(phaseEquipment3);
        phaseEquipmentList.add(phaseEquipment4);
        phaseEquipmentList.add(phaseEquipment5);
        oledSchedule.setPhaseEquipmentList(phaseEquipmentList);

        Product product1 = new Product(1,"HV075", ProductCategory.GREY);
        Product product2 = new Product(2,"HV076", ProductCategory.GREY);
        Product product3 = new Product(3,"HV081", ProductCategory.GREY);
        Product product4 = new Product(4,"HV088", ProductCategory.GREY);
        Product product5 = new Product(5,"HV089", ProductCategory.GREY);
        Product product6 = new Product(6,"Able", ProductCategory.ORANGE);
        Product product7 = new Product(7,"BF055", ProductCategory.ORANGE);
        Product product8 = new Product(8,"BF092", ProductCategory.ORANGE);
        Product product9 = new Product(9,"Bruce", ProductCategory.ORANGE);
        Product product10 = new Product(10,"Lucky", ProductCategory.ORANGE);
        Product product11 = new Product(11,"D3", ProductCategory.BLUE);
        Product product12 = new Product(12,"D6", ProductCategory.RED);
        Product product13 = new Product(13,"GN059", ProductCategory.GREEN);
        Product product14 = new Product(14,"GN059 BSM", ProductCategory.GREEN);
        Product product15 = new Product(15,"HM050", ProductCategory.GREEN);
        Product product16 = new Product(16,"HN058", ProductCategory.GREEN);
        Product product17 = new Product(17,"HN058 BSM", ProductCategory.GREEN);

        List<Product> productList = new ArrayList<>();
        productList.add(product1);
        productList.add(product2);
        productList.add(product3);
        productList.add(product4);
        productList.add(product5);
        productList.add(product6);
        productList.add(product7);
        productList.add(product8);
        productList.add(product9);
        productList.add(product10);
        productList.add(product11);
        productList.add(product12);
        productList.add(product13);
        productList.add(product14);
        productList.add(product15);
        productList.add(product16);
        productList.add(product17);
        oledSchedule.setProductList(productList);

        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment1);
        ProductEquipment productEquipment3 = new ProductEquipment(3L, product3, equipment1);
        ProductEquipment productEquipment4 = new ProductEquipment(4L, product4, equipment1);
        ProductEquipment productEquipment5 = new ProductEquipment(5L, product5, equipment1);
        ProductEquipment productEquipment6 = new ProductEquipment(6L, product6, equipment1);
        ProductEquipment productEquipment7 = new ProductEquipment(7L, product7, equipment1);
        ProductEquipment productEquipment8 = new ProductEquipment(8L, product8, equipment1);
        ProductEquipment productEquipment9 = new ProductEquipment(9L, product9, equipment1);
        ProductEquipment productEquipment10 = new ProductEquipment(10L, product10, equipment1);
        ProductEquipment productEquipment11 = new ProductEquipment(11L, product11, equipment2);
        ProductEquipment productEquipment12 = new ProductEquipment(12L, product12, equipment2);
        ProductEquipment productEquipment13 = new ProductEquipment(13L, product13, equipment3);
        ProductEquipment productEquipment14 = new ProductEquipment(14L, product14, equipment3);
        ProductEquipment productEquipment15 = new ProductEquipment(15L, product15, equipment3);
        ProductEquipment productEquipment16 = new ProductEquipment(16L, product16, equipment3);
        ProductEquipment productEquipment17 = new ProductEquipment(17L, product17, equipment3);

        List<ProductEquipment> productEquipmentList = new ArrayList<>();
        productEquipmentList.add(productEquipment1);
        productEquipmentList.add(productEquipment2);
        productEquipmentList.add(productEquipment3);
        productEquipmentList.add(productEquipment4);
        productEquipmentList.add(productEquipment5);
        productEquipmentList.add(productEquipment6);
        productEquipmentList.add(productEquipment7);
        productEquipmentList.add(productEquipment8);
        productEquipmentList.add(productEquipment9);
        productEquipmentList.add(productEquipment10);
        productEquipmentList.add(productEquipment11);
        productEquipmentList.add(productEquipment12);
        productEquipmentList.add(productEquipment13);
        productEquipmentList.add(productEquipment14);
        productEquipmentList.add(productEquipment15);
        productEquipmentList.add(productEquipment16);
        productEquipmentList.add(productEquipment17);
        oledSchedule.setProductEquipmentList(productEquipmentList);

        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
        product2.setProductEquipmentList(Arrays.asList(productEquipment2));
        product3.setProductEquipmentList(Arrays.asList(productEquipment3));
        product4.setProductEquipmentList(Arrays.asList(productEquipment4));
        product5.setProductEquipmentList(Arrays.asList(productEquipment5));
        product6.setProductEquipmentList(Arrays.asList(productEquipment6));
        product7.setProductEquipmentList(Arrays.asList(productEquipment7));
        product8.setProductEquipmentList(Arrays.asList(productEquipment8));
        product9.setProductEquipmentList(Arrays.asList(productEquipment9));
        product10.setProductEquipmentList(Arrays.asList(productEquipment10));
        product11.setProductEquipmentList(Arrays.asList(productEquipment11));
        product12.setProductEquipmentList(Arrays.asList(productEquipment12));
        product13.setProductEquipmentList(Arrays.asList(productEquipment13));
        product14.setProductEquipmentList(Arrays.asList(productEquipment14));
        product15.setProductEquipmentList(Arrays.asList(productEquipment15));
        product16.setProductEquipmentList(Arrays.asList(productEquipment16));
        product17.setProductEquipmentList(Arrays.asList(productEquipment17));

        ProductPhaseFillingTime productPhaseFillingTime1 = new ProductPhaseFillingTime(1L, product1, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime2 = new ProductPhaseFillingTime(2L, product2, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime3 = new ProductPhaseFillingTime(3L, product3, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime4 = new ProductPhaseFillingTime(4L, product4, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime5 = new ProductPhaseFillingTime(5L, product5, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime6 = new ProductPhaseFillingTime(6L, product6, phase1, 242);
        ProductPhaseFillingTime productPhaseFillingTime7 = new ProductPhaseFillingTime(7L, product6, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime8 = new ProductPhaseFillingTime(8L, product7, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime9 = new ProductPhaseFillingTime(9L, product7, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime10 = new ProductPhaseFillingTime(10L, product8, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime11 = new ProductPhaseFillingTime(11L, product8, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime12 = new ProductPhaseFillingTime(12L, product9, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime13 = new ProductPhaseFillingTime(13L, product9, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime14 = new ProductPhaseFillingTime(14L, product10, phase1, 242);
        ProductPhaseFillingTime productPhaseFillingTime15 = new ProductPhaseFillingTime(15L, product10, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime16 = new ProductPhaseFillingTime(16L, product11, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime17 = new ProductPhaseFillingTime(17L, product11, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime18 = new ProductPhaseFillingTime(18L, product12, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime19 = new ProductPhaseFillingTime(19L, product12, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime20 = new ProductPhaseFillingTime(20L, product13, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime21 = new ProductPhaseFillingTime(21L, product14, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime22 = new ProductPhaseFillingTime(22L, product15, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime23 = new ProductPhaseFillingTime(23L, product16, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime24 = new ProductPhaseFillingTime(24L, product17, phase3, 194);

        product1.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime1));
        product2.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime2));
        product3.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime3));
        product4.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime4));
        product5.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime5));
        product6.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime6, productPhaseFillingTime7));
        product7.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime8, productPhaseFillingTime9));
        product8.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime10, productPhaseFillingTime11));
        product9.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime12, productPhaseFillingTime13));
        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14, productPhaseFillingTime15));
        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16, productPhaseFillingTime17));
        product12.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime18, productPhaseFillingTime19));
        product13.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime20));
        product14.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime21));
        product15.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime22));
        product16.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime23));
        product17.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime24));

        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
        productPhaseFillingTimeList.add(productPhaseFillingTime1);
        productPhaseFillingTimeList.add(productPhaseFillingTime2);
        productPhaseFillingTimeList.add(productPhaseFillingTime3);
        productPhaseFillingTimeList.add(productPhaseFillingTime4);
        productPhaseFillingTimeList.add(productPhaseFillingTime5);
        productPhaseFillingTimeList.add(productPhaseFillingTime6);
        productPhaseFillingTimeList.add(productPhaseFillingTime7);
        productPhaseFillingTimeList.add(productPhaseFillingTime8);
        productPhaseFillingTimeList.add(productPhaseFillingTime9);
        productPhaseFillingTimeList.add(productPhaseFillingTime10);
        productPhaseFillingTimeList.add(productPhaseFillingTime11);
        productPhaseFillingTimeList.add(productPhaseFillingTime12);
        productPhaseFillingTimeList.add(productPhaseFillingTime13);
        productPhaseFillingTimeList.add(productPhaseFillingTime14);
        productPhaseFillingTimeList.add(productPhaseFillingTime15);
        productPhaseFillingTimeList.add(productPhaseFillingTime16);
        productPhaseFillingTimeList.add(productPhaseFillingTime17);
        productPhaseFillingTimeList.add(productPhaseFillingTime18);
        productPhaseFillingTimeList.add(productPhaseFillingTime19);
        productPhaseFillingTimeList.add(productPhaseFillingTime20);
        productPhaseFillingTimeList.add(productPhaseFillingTime21);
        productPhaseFillingTimeList.add(productPhaseFillingTime22);
        productPhaseFillingTimeList.add(productPhaseFillingTime23);
        productPhaseFillingTimeList.add(productPhaseFillingTime24);
        oledSchedule.setProductPhaseFillingTimeList(productPhaseFillingTimeList);

        Chamber chamber1 = new Chamber(1L,"PH1AB", phase1);
        Chamber chamber2 = new Chamber(2L,"PH1CD", phase1);
        Chamber chamber3 = new Chamber(3L,"PH2AB", phase2);
        Chamber chamber4 = new Chamber(4L,"PH2CD", phase2);
        Chamber chamber5 = new Chamber(5L,"PH3AB", phase3);
        Chamber chamber6 = new Chamber(6L,"PH3CD", phase3);

        phase1.setChamberList(Arrays.asList(chamber1, chamber2));
        phase2.setChamberList(Arrays.asList(chamber3, chamber4));
        phase3.setChamberList(Arrays.asList(chamber5, chamber6));

        List<Chamber> chamberList = new ArrayList<>();
        chamberList.add(chamber1);
        chamberList.add(chamber2);
        chamberList.add(chamber3);
        chamberList.add(chamber4);
        chamberList.add(chamber5);
        chamberList.add(chamber6);
        oledSchedule.setChamberList(chamberList);

        oledSchedule.setUnavailableTimeslotPenaltyList(new ArrayList<UnavailableTimeslotPenalty>());

        List<Order> orderList = new ArrayList<>();
        Order order1 = new Order(1L,"SO01", product1, "2023/12/13", 500);
        Order order2 = new Order(2L,"SO02", product2, "2023/12/13", 500);
        Order order3 = new Order(3L,"SO03", product3, "2023/12/13", 500);
        Order order4 = new Order(4L,"SO04", product4, "2023/12/13", 500);
        Order order5 = new Order(5L,"SO05", product5, "2023/12/13", 500);
        Order order6 = new Order(6L,"SO06", product8, "2023/12/17", 1900);
        Order order7 = new Order(7L,"SO07", product9, "2023/12/06", 240);
        Order order8 = new Order(8L,"SO08", product10, "2023/12/10", 2382);
        Order order9 = new Order(9L,"SO09", product11, "2023/12/21", 14115/2);
        Order order10 = new Order(10L,"SO10", product12, "2023/12/27", 20370/2);
        Order order11 = new Order(11L,"SO11", product13, "2023/12/17", 2764);
        Order order12 = new Order(12L,"SO12", product14, "2023/12/26", 4640);
        Order order13 = new Order(13L,"SO13", product15, "2023/12/16", 604);
        Order order14 = new Order(14L,"SO14", product16, "2023/12/15", 1154);
        Order order15 = new Order(15L,"SO15", product17, "2023/12/12", 156);
        //---NEW ORDERS w.r.t. OLED_3
        Order order16 = new Order(16L,"SO16", product9, "2023/12/27", 2950);
        Order order17 = new Order(17L,"SO17", product12, "2023/12/27", 20370/2);
        Order order18 = new Order(18L,"SO18", product11, "2023/12/21", 14115/2+1);
        Order order19 = new Order(19L,"SO19", product10, "2023/12/30", 6500);
        orderList.add(order1);
        orderList.add(order2);
        orderList.add(order3);
        orderList.add(order4);
        orderList.add(order5);
        orderList.add(order6);
        orderList.add(order7);
        orderList.add(order8);
        orderList.add(order9);
        orderList.add(order10);
        orderList.add(order11);
        orderList.add(order12);
        orderList.add(order13);
        orderList.add(order14);
        orderList.add(order15);
        orderList.add(order16);
        orderList.add(order17);
        orderList.add(order18);
        orderList.add(order19);
        oledSchedule.setOrderList(orderList);

        OledUtil.allocateProductionJob(oledSchedule, splitSize, addBakingJob);

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) timeslotList.size() * chamberList.size())
                        .pow(oledSchedule.getProdutionJobList().size());
        logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                example, oledSchedule.getProdutionJobList().size(), timeslotList.size(), chamberList.size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

        return oledSchedule;
    }

    //6 chambers,19 orders, baking, maintenance
    public OledSchedule createOledScheduleOled8(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        OledSchedule oledSchedule = createOledScheduleOled5(example, startDate, timeHorizon, splitSize);

        Product productMaint = new Product(0L, Product.OPS_MAINT, ProductCategory.OPS);
        oledSchedule.getProductList().add(productMaint);

        List<ProductEquipment> pes = new ArrayList<>();
        // Map Product Maintenance to all equipments
        long peId = (long) oledSchedule.getPhaseEquipmentList().size();
        for (Equipment equipment : oledSchedule.getEquipmentList()) {
            ProductEquipment pe = new ProductEquipment(peId++, productMaint, equipment);
            oledSchedule.getProductEquipmentList().add(pe);
            pes.add(pe);
        }
        productMaint.setProductEquipmentList(pes);
        productMaint.setProductPhaseFillingTimeList(new ArrayList<>());

        oledSchedule.setUnavailableTimeslotPenaltyList(
                OledUtil.generateUnavailableTimeslotPenaltyList(oledSchedule, productMaint, 1));
        OledUtil.allocateMaintenanceJob(oledSchedule, productMaint);

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) oledSchedule.getTimeslotList().size() * oledSchedule.getChamberList().size())
                        .pow(oledSchedule.getProdutionJobList().size());
        logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                example, oledSchedule.getProdutionJobList().size(), oledSchedule.getTimeslotList().size(), oledSchedule.getChamberList().size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

        return oledSchedule;
    }

    //6 chambers,30 orders,baking
    public OledSchedule createOledScheduleOled6(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        OledSchedule oledSchedule = new OledSchedule(0L);
        OledConstraintConfiguration constraintConfiguration = new OledConstraintConfiguration(0L);
        oledSchedule.setConstraintConfiguration(constraintConfiguration);

        List<Timeslot> timeslotList = new ArrayList<>();
        for (long i = 0; i < timeHorizon; i++) {
            timeslotList.add(new Timeslot(i, startDate.plusDays(i)));
        }
        oledSchedule.setTimeslotList(timeslotList);

        Phase phase1 = new Phase(1L,"PH1");
        Phase phase2 = new Phase(2L,"PH2");
        Phase phase3 = new Phase(3L,"PH3");

        List<Phase> phaseList = new ArrayList<>();
        phaseList.add(phase1);
        phaseList.add(phase2);
        phaseList.add(phase3);
        oledSchedule.setPhaseList(phaseList);

        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        Equipment equipment3 = new Equipment(3L, "GD");
        Equipment equipment4 = new Equipment(4L, "GD_MIXED");

        List<Equipment> equipmentList = new ArrayList<>();
        equipmentList.add(equipment1);
        equipmentList.add(equipment2);
        equipmentList.add(equipment3);
        equipmentList.add(equipment4);
        oledSchedule.setEquipmentList(equipmentList);

        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        PhaseEquipment phaseEquipment2 = new PhaseEquipment(2L, phase1, equipment2);
        PhaseEquipment phaseEquipment3 = new PhaseEquipment(3L, phase2, equipment2);
        PhaseEquipment phaseEquipment4 = new PhaseEquipment(4L, phase3, equipment1);
        PhaseEquipment phaseEquipment5 = new PhaseEquipment(5L, phase3, equipment3);

        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1, phaseEquipment2));
        phase2.setPhaseEquipmentList(Arrays.asList(phaseEquipment3));
        phase3.setPhaseEquipmentList(Arrays.asList(phaseEquipment4, phaseEquipment5));

        List<PhaseEquipment> phaseEquipmentList = new ArrayList<>();
        phaseEquipmentList.add(phaseEquipment1);
        phaseEquipmentList.add(phaseEquipment2);
        phaseEquipmentList.add(phaseEquipment3);
        phaseEquipmentList.add(phaseEquipment4);
        phaseEquipmentList.add(phaseEquipment5);
        oledSchedule.setPhaseEquipmentList(phaseEquipmentList);

        Product product1 = new Product(1,"HV075", ProductCategory.GREY);
        Product product2 = new Product(2,"HV076", ProductCategory.GREY);
        Product product3 = new Product(3,"HV081", ProductCategory.GREY);
        Product product4 = new Product(4,"HV088", ProductCategory.GREY);
        Product product5 = new Product(5,"HV089", ProductCategory.GREY);
        Product product6 = new Product(6,"Able", ProductCategory.ORANGE);
        Product product7 = new Product(7,"BF055", ProductCategory.ORANGE);
        Product product8 = new Product(8,"BF092", ProductCategory.ORANGE);
        Product product9 = new Product(9,"Bruce", ProductCategory.ORANGE);
        Product product10 = new Product(10,"Lucky", ProductCategory.ORANGE);
        Product product11 = new Product(11,"D3", ProductCategory.BLUE);
        Product product12 = new Product(12,"D6", ProductCategory.RED);
        Product product13 = new Product(13,"GN059", ProductCategory.GREEN);
        Product product14 = new Product(14,"GN059 BSM", ProductCategory.GREEN);
        Product product15 = new Product(15,"HM050", ProductCategory.GREEN);
        Product product16 = new Product(16,"HN058", ProductCategory.GREEN);
        Product product17 = new Product(17,"HN058 BSM", ProductCategory.GREEN);

        List<Product> productList = new ArrayList<>();
        productList.add(product1);
        productList.add(product2);
        productList.add(product3);
        productList.add(product4);
        productList.add(product5);
        productList.add(product6);
        productList.add(product7);
        productList.add(product8);
        productList.add(product9);
        productList.add(product10);
        productList.add(product11);
        productList.add(product12);
        productList.add(product13);
        productList.add(product14);
        productList.add(product15);
        productList.add(product16);
        productList.add(product17);
        oledSchedule.setProductList(productList);

        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment1);
        ProductEquipment productEquipment3 = new ProductEquipment(3L, product3, equipment1);
        ProductEquipment productEquipment4 = new ProductEquipment(4L, product4, equipment1);
        ProductEquipment productEquipment5 = new ProductEquipment(5L, product5, equipment1);
        ProductEquipment productEquipment6 = new ProductEquipment(6L, product6, equipment1);
        ProductEquipment productEquipment7 = new ProductEquipment(7L, product7, equipment1);
        ProductEquipment productEquipment8 = new ProductEquipment(8L, product8, equipment1);
        ProductEquipment productEquipment9 = new ProductEquipment(9L, product9, equipment1);
        ProductEquipment productEquipment10 = new ProductEquipment(10L, product10, equipment1);
        ProductEquipment productEquipment11 = new ProductEquipment(11L, product11, equipment2);
        ProductEquipment productEquipment12 = new ProductEquipment(12L, product12, equipment2);
        ProductEquipment productEquipment13 = new ProductEquipment(13L, product13, equipment3);
        ProductEquipment productEquipment14 = new ProductEquipment(14L, product14, equipment3);
        ProductEquipment productEquipment15 = new ProductEquipment(15L, product15, equipment3);
        ProductEquipment productEquipment16 = new ProductEquipment(16L, product16, equipment3);
        ProductEquipment productEquipment17 = new ProductEquipment(17L, product17, equipment3);

        List<ProductEquipment> productEquipmentList = new ArrayList<>();
        productEquipmentList.add(productEquipment1);
        productEquipmentList.add(productEquipment2);
        productEquipmentList.add(productEquipment3);
        productEquipmentList.add(productEquipment4);
        productEquipmentList.add(productEquipment5);
        productEquipmentList.add(productEquipment6);
        productEquipmentList.add(productEquipment7);
        productEquipmentList.add(productEquipment8);
        productEquipmentList.add(productEquipment9);
        productEquipmentList.add(productEquipment10);
        productEquipmentList.add(productEquipment11);
        productEquipmentList.add(productEquipment12);
        productEquipmentList.add(productEquipment13);
        productEquipmentList.add(productEquipment14);
        productEquipmentList.add(productEquipment15);
        productEquipmentList.add(productEquipment16);
        productEquipmentList.add(productEquipment17);
        oledSchedule.setProductEquipmentList(productEquipmentList);

        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
        product2.setProductEquipmentList(Arrays.asList(productEquipment2));
        product3.setProductEquipmentList(Arrays.asList(productEquipment3));
        product4.setProductEquipmentList(Arrays.asList(productEquipment4));
        product5.setProductEquipmentList(Arrays.asList(productEquipment5));
        product6.setProductEquipmentList(Arrays.asList(productEquipment6));
        product7.setProductEquipmentList(Arrays.asList(productEquipment7));
        product8.setProductEquipmentList(Arrays.asList(productEquipment8));
        product9.setProductEquipmentList(Arrays.asList(productEquipment9));
        product10.setProductEquipmentList(Arrays.asList(productEquipment10));
        product11.setProductEquipmentList(Arrays.asList(productEquipment11));
        product12.setProductEquipmentList(Arrays.asList(productEquipment12));
        product13.setProductEquipmentList(Arrays.asList(productEquipment13));
        product14.setProductEquipmentList(Arrays.asList(productEquipment14));
        product15.setProductEquipmentList(Arrays.asList(productEquipment15));
        product16.setProductEquipmentList(Arrays.asList(productEquipment16));
        product17.setProductEquipmentList(Arrays.asList(productEquipment17));

        ProductPhaseFillingTime productPhaseFillingTime1 = new ProductPhaseFillingTime(1L, product1, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime2 = new ProductPhaseFillingTime(2L, product2, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime3 = new ProductPhaseFillingTime(3L, product3, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime4 = new ProductPhaseFillingTime(4L, product4, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime5 = new ProductPhaseFillingTime(5L, product5, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime6 = new ProductPhaseFillingTime(6L, product6, phase1, 242);
        ProductPhaseFillingTime productPhaseFillingTime7 = new ProductPhaseFillingTime(7L, product6, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime8 = new ProductPhaseFillingTime(8L, product7, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime9 = new ProductPhaseFillingTime(9L, product7, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime10 = new ProductPhaseFillingTime(10L, product8, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime11 = new ProductPhaseFillingTime(11L, product8, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime12 = new ProductPhaseFillingTime(12L, product9, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime13 = new ProductPhaseFillingTime(13L, product9, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime14 = new ProductPhaseFillingTime(14L, product10, phase1, 242);
        ProductPhaseFillingTime productPhaseFillingTime15 = new ProductPhaseFillingTime(15L, product10, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime16 = new ProductPhaseFillingTime(16L, product11, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime17 = new ProductPhaseFillingTime(17L, product11, phase3, 242);
        ProductPhaseFillingTime productPhaseFillingTime18 = new ProductPhaseFillingTime(18L, product12, phase1, 194);
        ProductPhaseFillingTime productPhaseFillingTime19 = new ProductPhaseFillingTime(19L, product12, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime20 = new ProductPhaseFillingTime(20L, product13, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime21 = new ProductPhaseFillingTime(21L, product14, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime22 = new ProductPhaseFillingTime(22L, product15, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime23 = new ProductPhaseFillingTime(23L, product16, phase3, 194);
        ProductPhaseFillingTime productPhaseFillingTime24 = new ProductPhaseFillingTime(24L, product17, phase3, 194);

        product1.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime1));
        product2.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime2));
        product3.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime3));
        product4.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime4));
        product5.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime5));
        product6.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime6, productPhaseFillingTime7));
        product7.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime8, productPhaseFillingTime9));
        product8.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime10, productPhaseFillingTime11));
        product9.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime12, productPhaseFillingTime13));
        product10.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime14, productPhaseFillingTime15));
        product11.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime16, productPhaseFillingTime17));
        product12.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime18, productPhaseFillingTime19));
        product13.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime20));
        product14.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime21));
        product15.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime22));
        product16.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime23));
        product17.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime24));

        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
        productPhaseFillingTimeList.add(productPhaseFillingTime1);
        productPhaseFillingTimeList.add(productPhaseFillingTime2);
        productPhaseFillingTimeList.add(productPhaseFillingTime3);
        productPhaseFillingTimeList.add(productPhaseFillingTime4);
        productPhaseFillingTimeList.add(productPhaseFillingTime5);
        productPhaseFillingTimeList.add(productPhaseFillingTime6);
        productPhaseFillingTimeList.add(productPhaseFillingTime7);
        productPhaseFillingTimeList.add(productPhaseFillingTime8);
        productPhaseFillingTimeList.add(productPhaseFillingTime9);
        productPhaseFillingTimeList.add(productPhaseFillingTime10);
        productPhaseFillingTimeList.add(productPhaseFillingTime11);
        productPhaseFillingTimeList.add(productPhaseFillingTime12);
        productPhaseFillingTimeList.add(productPhaseFillingTime13);
        productPhaseFillingTimeList.add(productPhaseFillingTime14);
        productPhaseFillingTimeList.add(productPhaseFillingTime15);
        productPhaseFillingTimeList.add(productPhaseFillingTime16);
        productPhaseFillingTimeList.add(productPhaseFillingTime17);
        productPhaseFillingTimeList.add(productPhaseFillingTime18);
        productPhaseFillingTimeList.add(productPhaseFillingTime19);
        productPhaseFillingTimeList.add(productPhaseFillingTime20);
        productPhaseFillingTimeList.add(productPhaseFillingTime21);
        productPhaseFillingTimeList.add(productPhaseFillingTime22);
        productPhaseFillingTimeList.add(productPhaseFillingTime23);
        productPhaseFillingTimeList.add(productPhaseFillingTime24);
        oledSchedule.setProductPhaseFillingTimeList(productPhaseFillingTimeList);

        Chamber chamber1 = new Chamber(1L,"PH1AB", phase1);
        Chamber chamber2 = new Chamber(2L,"PH1CD", phase1);
        Chamber chamber3 = new Chamber(3L,"PH2AB", phase2);
        Chamber chamber4 = new Chamber(4L,"PH2CD", phase2);
        Chamber chamber5 = new Chamber(5L,"PH3AB", phase3);
        Chamber chamber6 = new Chamber(6L,"PH3CD", phase3);

        phase1.setChamberList(Arrays.asList(chamber1, chamber2));
        phase2.setChamberList(Arrays.asList(chamber3, chamber4));
        phase3.setChamberList(Arrays.asList(chamber5, chamber6));

        List<Chamber> chamberList = new ArrayList<>();
        chamberList.add(chamber1);
        chamberList.add(chamber2);
        chamberList.add(chamber3);
        chamberList.add(chamber4);
        chamberList.add(chamber5);
        chamberList.add(chamber6);
        oledSchedule.setChamberList(chamberList);

        oledSchedule.setUnavailableTimeslotPenaltyList(new ArrayList<UnavailableTimeslotPenalty>());

        List<Order> orderList = new ArrayList<>();
        Order order1 = new Order(1L,"SO01", product1, "2023/12/13", 500);
        Order order2 = new Order(2L,"SO02", product2, "2023/12/13", 500);
        Order order3 = new Order(3L,"SO03", product3, "2023/12/13", 500);
        Order order4 = new Order(4L,"SO04", product4, "2023/12/13", 500);
        Order order5 = new Order(5L,"SO05", product5, "2023/12/13", 500);
        Order order6 = new Order(6L,"SO06", product8, "2023/12/17", 1900);
        Order order7 = new Order(7L,"SO07", product9, "2023/12/06", 240);
        Order order8 = new Order(8L,"SO08", product10, "2023/12/10", 2382);
        Order order9 = new Order(9L,"SO09", product11, "2023/12/21", 14115/2);
        Order order10 = new Order(10L,"SO10", product12, "2023/12/27", 20370/2);
        Order order11 = new Order(11L,"SO11", product13, "2023/12/17", 2764);
        Order order12 = new Order(12L,"SO12", product14, "2023/12/26", 4640);
        Order order13 = new Order(13L,"SO13", product15, "2023/12/16", 604);
        Order order14 = new Order(14L,"SO14", product16, "2023/12/15", 1154);
        Order order15 = new Order(15L,"SO15", product17, "2023/12/12", 156);
        //---NEW ORDERS w.r.t. OLED_3
        Order order16 = new Order(16L,"SO16", product9, "2023/12/27", 2950);
        Order order17 = new Order(17L,"SO17", product12, "2023/12/27", 20370/2);
        Order order18 = new Order(18L,"SO18", product11, "2023/12/21", 14115/2+1);
        Order order19 = new Order(19L,"SO19", product10, "2023/12/30", 6500);
        //---NEW ORDERS w.r.t. OLED_5
        Order order20 = new Order(9L,"SO09", product11, "2024/01/21", 14115/2);
        Order order21 = new Order(10L,"SO10", product12, "2024/01/27", 20370/2);
        Order order22 = new Order(16L,"SO16", product9, "2024/01/27", 2950);
        Order order23 = new Order(17L,"SO17", product12, "2024/01/27", 20370/2);
        Order order24 = new Order(18L,"SO18", product11, "2024/01/21", 14115/2+1);
        Order order25 = new Order(1L,"SO01", product1, "2024/01/13", 500);
        Order order26 = new Order(2L,"SO02", product2, "2024/01/13", 500);
        Order order27 = new Order(3L,"SO03", product3, "2024/01/13", 500);
        Order order28 = new Order(4L,"SO04", product4, "2024/01/13", 500);
        Order order29 = new Order(5L,"SO05", product5, "2024/01/13", 500);
        Order order30 = new Order(5L,"SO05", product12, "2024/01/13", 20370);
        orderList.add(order1);
        orderList.add(order2);
        orderList.add(order3);
        orderList.add(order4);
        orderList.add(order5);
        orderList.add(order6);
        orderList.add(order7);
        orderList.add(order8);
        orderList.add(order9);
        orderList.add(order10);
        orderList.add(order11);
        orderList.add(order12);
        orderList.add(order13);
        orderList.add(order14);
        orderList.add(order15);
        orderList.add(order16);
        orderList.add(order17);
        orderList.add(order18);
        orderList.add(order19);
        orderList.add(order20);
        orderList.add(order21);
        orderList.add(order22);
        orderList.add(order23);
        orderList.add(order24);
        orderList.add(order25);
        orderList.add(order26);
        orderList.add(order27);
        orderList.add(order28);
        orderList.add(order29);
        orderList.add(order30);
        oledSchedule.setOrderList(orderList);

        OledUtil.allocateProductionJob(oledSchedule, splitSize, addBakingJob);

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) timeslotList.size() * chamberList.size())
                        .pow(oledSchedule.getProdutionJobList().size());
        logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                example, oledSchedule.getProdutionJobList().size(), timeslotList.size(), chamberList.size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

        return oledSchedule;
    }
    public OledSchedule createOledScheduleOledB(String example, LocalDate startDate, int timeHorizon, int splitSize) {
        Random random = new Random(0L);
        int phaseCount = benchPhaseCnt;
        int orderCount = benchOrderCnt;
        timeHorizon = benchTimeHorizon;

        OledSchedule oledSchedule = new OledSchedule(0L);
        OledConstraintConfiguration constraintConfiguration = new OledConstraintConfiguration(0L);
        oledSchedule.setConstraintConfiguration(constraintConfiguration);

        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        Equipment equipment3 = new Equipment(3L, "GD");
        Equipment equipment4 = new Equipment(4L, "GD_MIXED");

        List<Equipment> equipmentList = new ArrayList<>();
        equipmentList.add(equipment1);
        equipmentList.add(equipment2);
        equipmentList.add(equipment3);
        equipmentList.add(equipment4);
        oledSchedule.setEquipmentList(equipmentList);

        Product product1 = new Product(1,"HV075", ProductCategory.GREY);
        Product product2 = new Product(2,"HV076", ProductCategory.GREY);
        Product product3 = new Product(3,"HV081", ProductCategory.GREY);
        Product product4 = new Product(4,"HV088", ProductCategory.GREY);
        Product product5 = new Product(5,"HV089", ProductCategory.GREY);
//        Product product6 = new Product(6,"Able", ProductCategory.ORANGE);
//        Product product7 = new Product(7,"BF055", ProductCategory.ORANGE);
        Product product8 = new Product(8,"BF092", ProductCategory.ORANGE);
        Product product9 = new Product(9,"Bruce", ProductCategory.ORANGE);
        Product product10 = new Product(10,"Lucky", ProductCategory.ORANGE);
        Product product11 = new Product(11,"D3", ProductCategory.BLUE);
        Product product12 = new Product(12,"D6", ProductCategory.RED);
        Product product13 = new Product(13,"GN059", ProductCategory.GREEN);
        Product product14 = new Product(14,"GN059 BSM", ProductCategory.GREEN);
        Product product15 = new Product(15,"HM050", ProductCategory.GREEN);
        Product product16 = new Product(16,"HN058", ProductCategory.GREEN);
        Product product17 = new Product(17,"HN058 BSM", ProductCategory.GREEN);

        List<Product> productList = new ArrayList<>();
        productList.add(product1);
        productList.add(product2);
        productList.add(product3);
        productList.add(product4);
        productList.add(product5);
//        productList.add(product6);
//        productList.add(product7);
        productList.add(product8);
        productList.add(product9);
        productList.add(product10);
        productList.add(product11);
        productList.add(product12);
        productList.add(product13);
        productList.add(product14);
        productList.add(product15);
        productList.add(product16);
        productList.add(product17);
        oledSchedule.setProductList(productList);

        List<Integer> baseDueDateDays = new ArrayList<>(productList.size()+1);
        baseDueDateDays.add(13);
        baseDueDateDays.add(13);
        baseDueDateDays.add(13);
        baseDueDateDays.add(13);
        baseDueDateDays.add(13);
        baseDueDateDays.add(17);
        baseDueDateDays.add(6);
        baseDueDateDays.add(10);
        baseDueDateDays.add(21);
        baseDueDateDays.add(27);
        baseDueDateDays.add(17);
        baseDueDateDays.add(26);
        baseDueDateDays.add(16);
        baseDueDateDays.add(15);
        baseDueDateDays.add(12);
        List<Integer> baseQuantityList = new ArrayList<>(productList.size()+1);
        baseQuantityList.add(500);
        baseQuantityList.add(500);
        baseQuantityList.add(500);
        baseQuantityList.add(500);
        baseQuantityList.add(500);
        baseQuantityList.add(1900);
        baseQuantityList.add(240);
        baseQuantityList.add(2382);
        baseQuantityList.add(14115);
        baseQuantityList.add(20370);
        baseQuantityList.add(2764);
        baseQuantityList.add(4640);
        baseQuantityList.add(604);
        baseQuantityList.add(1154);
        baseQuantityList.add(156);

        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment1);
        ProductEquipment productEquipment3 = new ProductEquipment(3L, product3, equipment1);
        ProductEquipment productEquipment4 = new ProductEquipment(4L, product4, equipment1);
        ProductEquipment productEquipment5 = new ProductEquipment(5L, product5, equipment1);
//        ProductEquipment productEquipment6 = new ProductEquipment(6L, product6, equipment1);
//        ProductEquipment productEquipment7 = new ProductEquipment(7L, product7, equipment1);
        ProductEquipment productEquipment8 = new ProductEquipment(8L, product8, equipment1);
        ProductEquipment productEquipment9 = new ProductEquipment(9L, product9, equipment1);
        ProductEquipment productEquipment10 = new ProductEquipment(10L, product10, equipment1);
        ProductEquipment productEquipment11 = new ProductEquipment(11L, product11, equipment2);
        ProductEquipment productEquipment12 = new ProductEquipment(12L, product12, equipment2);
        ProductEquipment productEquipment13 = new ProductEquipment(13L, product13, equipment3);
        ProductEquipment productEquipment14 = new ProductEquipment(14L, product14, equipment3);
        ProductEquipment productEquipment15 = new ProductEquipment(15L, product15, equipment3);
        ProductEquipment productEquipment16 = new ProductEquipment(16L, product16, equipment3);
        ProductEquipment productEquipment17 = new ProductEquipment(17L, product17, equipment3);

        List<ProductEquipment> productEquipmentList = new ArrayList<>();
        productEquipmentList.add(productEquipment1);
        productEquipmentList.add(productEquipment2);
        productEquipmentList.add(productEquipment3);
        productEquipmentList.add(productEquipment4);
        productEquipmentList.add(productEquipment5);
//        productEquipmentList.add(productEquipment6);
//        productEquipmentList.add(productEquipment7);
        productEquipmentList.add(productEquipment8);
        productEquipmentList.add(productEquipment9);
        productEquipmentList.add(productEquipment10);
        productEquipmentList.add(productEquipment11);
        productEquipmentList.add(productEquipment12);
        productEquipmentList.add(productEquipment13);
        productEquipmentList.add(productEquipment14);
        productEquipmentList.add(productEquipment15);
        productEquipmentList.add(productEquipment16);
        productEquipmentList.add(productEquipment17);
        oledSchedule.setProductEquipmentList(productEquipmentList);

        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
        product2.setProductEquipmentList(Arrays.asList(productEquipment2));
        product3.setProductEquipmentList(Arrays.asList(productEquipment3));
        product4.setProductEquipmentList(Arrays.asList(productEquipment4));
        product5.setProductEquipmentList(Arrays.asList(productEquipment5));
//        product6.setProductEquipmentList(Arrays.asList(productEquipment6));
//        product7.setProductEquipmentList(Arrays.asList(productEquipment7));
        product8.setProductEquipmentList(Arrays.asList(productEquipment8));
        product9.setProductEquipmentList(Arrays.asList(productEquipment9));
        product10.setProductEquipmentList(Arrays.asList(productEquipment10));
        product11.setProductEquipmentList(Arrays.asList(productEquipment11));
        product12.setProductEquipmentList(Arrays.asList(productEquipment12));
        product13.setProductEquipmentList(Arrays.asList(productEquipment13));
        product14.setProductEquipmentList(Arrays.asList(productEquipment14));
        product15.setProductEquipmentList(Arrays.asList(productEquipment15));
        product16.setProductEquipmentList(Arrays.asList(productEquipment16));
        product17.setProductEquipmentList(Arrays.asList(productEquipment17));

        Map<Pair<Product, Integer>, Integer> productFillingTimeMap = new HashMap<>();
        productFillingTimeMap.put(Pair.of(product1, 3), 194);
        productFillingTimeMap.put(Pair.of(product2, 3), 194);
        productFillingTimeMap.put(Pair.of(product3, 3), 194);
        productFillingTimeMap.put(Pair.of(product4, 3), 194);
        productFillingTimeMap.put(Pair.of(product5, 3), 194);
//        productFillingTimeMap.put(Pair.of(product6, 1), 242);
//        productFillingTimeMap.put(Pair.of(product6, 3), 242);
//        productFillingTimeMap.put(Pair.of(product7, 1), 194);
//        productFillingTimeMap.put(Pair.of(product7, 3), 194);
        productFillingTimeMap.put(Pair.of(product8, 1), 194);
        productFillingTimeMap.put(Pair.of(product8, 3), 194);
        productFillingTimeMap.put(Pair.of(product9, 1), 194);
        productFillingTimeMap.put(Pair.of(product9, 3), 194);
        productFillingTimeMap.put(Pair.of(product10, 1), 242);
        productFillingTimeMap.put(Pair.of(product10, 3), 242);
        productFillingTimeMap.put(Pair.of(product11, 1), 194);
        productFillingTimeMap.put(Pair.of(product11, 3), 242);
        productFillingTimeMap.put(Pair.of(product12, 1), 194);
        productFillingTimeMap.put(Pair.of(product12, 3), 194);
        productFillingTimeMap.put(Pair.of(product13, 3), 194);
        productFillingTimeMap.put(Pair.of(product14, 3), 194);
        productFillingTimeMap.put(Pair.of(product15, 3), 194);
        productFillingTimeMap.put(Pair.of(product16, 3), 194);
        productFillingTimeMap.put(Pair.of(product17, 3), 194);


        // Timeslot
        List<Timeslot> timeslotList = new ArrayList<>();
        for (long i = 0; i < timeHorizon; i++) {
            timeslotList.add(new Timeslot(i, startDate.plusDays(i)));
        }
        oledSchedule.setTimeslotList(timeslotList);

        // Phase, PhaseEquipment
        List<Phase> phaseList = new ArrayList<>();
        List<PhaseEquipment> phaseEquipmentList = new ArrayList<>();
        int phaseEquipmentId = 0;
        for (long i = 0; i < phaseCount; i++) {
            Phase phase = new Phase(i, "PH"+(i+1));
            List<PhaseEquipment> phaseEquipmentListTmp = new ArrayList<>();

            phaseList.add(phase);
            if (i % 2 == 0) {
                Set<Integer> randomSet = new HashSet<>();
                while (randomSet.size() < 2) {
                    randomSet.add(random.nextInt(4));
                }
                for (Integer idx : randomSet) {
                    PhaseEquipment phaseEquipment = new PhaseEquipment(phaseEquipmentId++, phase, equipmentList.get(idx));
                    phaseEquipmentList.add(phaseEquipment);
                    phaseEquipmentListTmp.add(phaseEquipment);
                }
            } else {
                PhaseEquipment phaseEquipment = new PhaseEquipment(phaseEquipmentId++, phase, equipmentList.get(random.nextInt(4)));
                phaseEquipmentList.add(phaseEquipment);
                phaseEquipmentListTmp.add(phaseEquipment);
            }
            phase.setPhaseEquipmentList(phaseEquipmentListTmp);
        }
        oledSchedule.setPhaseList(phaseList);
        oledSchedule.setPhaseEquipmentList(phaseEquipmentList);

        // FilingTime
        int fillingTimeId = 0;
        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
        for (Product product : productList) {
            List<ProductPhaseFillingTime> productPhaseFillingTimeListTmp = new ArrayList<>();
            for (Phase phase : phaseList) {
                int phaseNum = (Integer.valueOf(phase.getName().replaceAll("[^0-9]", "")) % 3) + 1;
                if (productFillingTimeMap.get(Pair.of(product, phaseNum)) != null) {
                    ProductPhaseFillingTime productPhaseFillingTime = new ProductPhaseFillingTime(fillingTimeId++,
                            product, phase, productFillingTimeMap.get(Pair.of(product, phaseNum)));
                    productPhaseFillingTimeListTmp.add(productPhaseFillingTime);
                    productPhaseFillingTimeList.add(productPhaseFillingTime);
                }
                if (productPhaseFillingTimeListTmp.size() > 0) {
                    product.setProductPhaseFillingTimeList(productPhaseFillingTimeListTmp);
                }
            }
        }
        oledSchedule.setProductPhaseFillingTimeList(productPhaseFillingTimeList);

        // Chamber
        List<Chamber> chamberList = new ArrayList<>();
        for (int i = 0; i < phaseList.size(); i++) {
            Chamber c1 = new Chamber(i*2, phaseList.get(i).getName()+"AB", phaseList.get(i));
            Chamber c2 = new Chamber((i*2)+1, phaseList.get(i).getName()+"CD", phaseList.get(i));
            chamberList.add(c1);
            chamberList.add(c2);
            phaseList.get(i).setChamberList(Arrays.asList(c1, c2));
        }
        oledSchedule.setChamberList(chamberList);

        // Order
        oledSchedule.setUnavailableTimeslotPenaltyList(new ArrayList<UnavailableTimeslotPenalty>());
        List<Order> orderList = new ArrayList<>(orderCount+1);
        for (int i = 0; i < orderCount; i++) {
            double ratio = timeHorizon / 30;
            Order order = new Order(i, "S" + String.format("%03d", i),
                    productList.get(i % productList.size()),
                    startDate.plusDays((long) (ratio * baseDueDateDays.get(i % productList.size()))),
                    (int) ratio * baseQuantityList.get(i % productList.size()));
            orderList.add(order);
        }
        oledSchedule.setOrderList(orderList);
        OledUtil.allocateProductionJob(oledSchedule, splitSize, addBakingJob);

        // Maintain
        Product productMaint = new Product(0L, Product.OPS_MAINT, ProductCategory.OPS);
        oledSchedule.getProductList().add(productMaint);
        List<ProductEquipment> pes = new ArrayList<>();
        // Map Product Maintenance to all equipments
        long peId = (long) oledSchedule.getPhaseEquipmentList().size();
        for (Equipment equipment : oledSchedule.getEquipmentList()) {
            ProductEquipment pe = new ProductEquipment(peId++, productMaint, equipment);
            oledSchedule.getProductEquipmentList().add(pe);
            pes.add(pe);
        }
        productMaint.setProductEquipmentList(pes);
        productMaint.setProductPhaseFillingTimeList(new ArrayList<>());

        oledSchedule.setUnavailableTimeslotPenaltyList(
                OledUtil.generateUnavailableTimeslotPenaltyList(oledSchedule, productMaint, 1));
        OledUtil.allocateMaintenanceJob(oledSchedule, productMaint);

        BigInteger possibleSolutionSize =
                BigInteger.valueOf((long) timeslotList.size() * chamberList.size())
                        .pow(oledSchedule.getProdutionJobList().size());
        Logger logger = LoggerFactory.getLogger(getClass());
        logger.info("OledSchedule {} has {} activities, {} timeslots and {} chambers with a search space of {}.",
                example, oledSchedule.getProdutionJobList().size(), timeslotList.size(), chamberList.size(),
                AbstractSolutionImporter.getFlooredPossibleSolutionSize(possibleSolutionSize));

        return oledSchedule;
    }

}
