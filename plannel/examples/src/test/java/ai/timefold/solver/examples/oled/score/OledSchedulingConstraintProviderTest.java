package ai.timefold.solver.examples.oled.score;

import ai.timefold.solver.examples.common.score.AbstractConstraintProviderTest;
import ai.timefold.solver.examples.common.score.ConstraintProviderTest;
import ai.timefold.solver.examples.oled.domain.*;
import ai.timefold.solver.test.api.score.stream.ConstraintVerifier;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class OledSchedulingConstraintProviderTest extends AbstractConstraintProviderTest<OledSchedulingConstraintProvider, OledSchedule> {

    @Override
    protected ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> createConstraintVerifier() {
        return ConstraintVerifier.build(new OledSchedulingConstraintProvider(), OledSchedule.class, ProductionJob.class);
    }

    @ConstraintProviderTest
    void producibleProductUnpenalized(ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        PhaseEquipment phaseEquipment2 = new PhaseEquipment(1L, phase1, equipment2);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1, phaseEquipment2));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        Product product2 = new Product(2L,"Project2", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment2);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
        product2.setProductEquipmentList(Arrays.asList(productEquipment2));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 10);
        Order order2 = new Order(2L, "Order2", product2, "2023/01/10", 10);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 10);
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);

        ProductionJob productionJob2 = new ProductionJob(1L, order2, 10);
        productionJob2.setChamber(chamber1);
        productionJob2.setTimeslot(timeslot1);

        ProductionJob productionJob3 = new ProductionJob(2L, order2, 10);
        productionJob3.setChamber(chamber1);
        productionJob3.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::requiredEquipment)
                .given(productionJob1, productionJob2, productionJob3)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void producibleProductPenalized(ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        Equipment equipment2 = new Equipment(2L, "GC");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
//        PhaseEquipment phaseEquipment2 = new PhaseEquipment(1L, phase1, equipment2);
//        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1, phaseEquipment2));
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        Product product2 = new Product(2L,"Project2", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        ProductEquipment productEquipment2 = new ProductEquipment(2L, product2, equipment2);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));
        product2.setProductEquipmentList(Arrays.asList(productEquipment2));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 10);
        Order order2 = new Order(2L, "Order2", product2, "2023/01/10", 10);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 10);
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);

        ProductionJob productionJob2 = new ProductionJob(1L, order2, 10);
        productionJob2.setChamber(chamber1);
        productionJob2.setTimeslot(timeslot1);

        ProductionJob productionJob3 = new ProductionJob(2L, order2, 10);
        productionJob3.setChamber(chamber1);
        productionJob3.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::requiredEquipment)
                .given(productionJob1, productionJob2, productionJob3)
                .penalizesBy(2);
    }

    @ConstraintProviderTest
    void unavailableTimeslotPenaltyUnpenalized(ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));
        Timeslot timeslot3 = new Timeslot(2L, LocalDate.of(2023, 1, 3));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        UnavailableTimeslotPenalty unavailableTimeslotPenalty = new UnavailableTimeslotPenalty(0L, chamber1, timeslot3);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 550);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 50);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::unavailableTimeslotPenalty)
                .given(unavailableTimeslotPenalty, productionJob1, productionJob2)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void unavailableTimeslotPenaltyPenalized(ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        UnavailableTimeslotPenalty unavailableTimeslotPenalty = new UnavailableTimeslotPenalty(0L, chamber1, timeslot2);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 550);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 50);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::unavailableTimeslotPenalty)
                .given(unavailableTimeslotPenalty, productionJob1, productionJob2)
                .penalizesBy(1);

    }

    @ConstraintProviderTest
    void chamberCapacityUnpenalized(ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", CapacityType.L.getCapacitySize());

        ProductionJob productionJob1 = new ProductionJob(0L, order1, CapacityType.L.getCapacitySize());
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::chamberCapacity)
                .given(productionJob1)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void chamberCapacityPenalized(ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", CapacityType.L.getCapacitySize());
        Order order2 = new Order(1L, "Order1", product1, "2023/01/10", CapacityType.L.getCapacitySize());

        ProductionJob productionJob1 = new ProductionJob(0L, order1, CapacityType.L.getCapacitySize());
        ProductionJob productionJob2 = new ProductionJob(0L, order2, CapacityType.L.getCapacitySize());
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setChamber(chamber1);
        productionJob2.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::chamberCapacity)
                .given(productionJob1, productionJob2)
                .penalizesBy(CapacityType.L.getCapacitySize());
    }

    @ConstraintProviderTest
    void dueDateFenceUnpenilized(ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2021, 2, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 2, 1));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 10);
        Order order2 = new Order(2L, "Order2", product1, "2022/01/10", 10);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 10);
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);

        ProductionJob productionJob2 = new ProductionJob(1L, order2, 10);
        productionJob2.setChamber(chamber1);
        productionJob2.setTimeslot(timeslot1);

        ProductionJob productionJob3 = new ProductionJob(2L, order2, 0);
        productionJob3.setChamber(chamber1);
        productionJob3.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::dueDateFence)
                .given(productionJob1, productionJob2, productionJob3)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void dueDateFencePenilized(ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 10);
        Order order2 = new Order(2L, "Order2", product1, "2022/01/10", 10);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 10);
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);

        ProductionJob productionJob2 = new ProductionJob(1L, order2, 10);
        productionJob2.setChamber(chamber1);
        productionJob2.setTimeslot(timeslot1);

        ProductionJob productionJob3 = new ProductionJob(2L, order2, 10);
        productionJob3.setChamber(chamber1);
        productionJob3.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::dueDateFence)
                .given(productionJob1, productionJob2, productionJob3)
                .penalizesBy(2);
    }

    @ConstraintProviderTest
    void assignJobToAChamberUnpenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", CapacityType.L.getCapacitySize());

        ProductionJob productionJob1 = new ProductionJob(0L, order1, CapacityType.L.getCapacitySize());
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::assignJobToAChamberConstraint)
                .given(productionJob1)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void assignJobToAChamberpenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier
    ) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", CapacityType.L.getCapacitySize());

        ProductionJob productionJob1 = new ProductionJob(0L, order1, CapacityType.L.getCapacitySize());
        productionJob1.setChamber(null);
        productionJob1.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::assignJobToAChamberConstraint)
                .given(productionJob1)
                .penalizesBy(1);
    }

    @ConstraintProviderTest
    void continuousProductionRewarded(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));
        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 650);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 600);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 50);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::continuousProduction)
                .given(productionJob1, productionJob2)
                .rewardsWith(1);
    }

    @ConstraintProviderTest
    void continuousProductionUnrewarded(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 3));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 650);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 600);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 50);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::continuousProduction)
                .given(productionJob1, productionJob2)
                .rewardsWith(0);
    }

    @ConstraintProviderTest
    void fillingTimeUnpenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));
        Timeslot timeslot3 = new Timeslot(2L, LocalDate.of(2023, 1, 3));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 650);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 550);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 50);
        ProductionJob productionJob3 = new ProductionJob(2L, order1, 50);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob3.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);
        productionJob3.setTimeslot(timeslot3);

        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
        ProductPhaseFillingTime productPhaseFillingTime1 = new ProductPhaseFillingTime(1L, product1, phase1, 3*24);
        productPhaseFillingTimeList.add(productPhaseFillingTime1);
        product1.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime1));

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::fillingTime)
                .given(productionJob1, productionJob2, productionJob3)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void fillingTimePenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 550);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 50);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        List<ProductPhaseFillingTime> productPhaseFillingTimeList = new ArrayList<>();
        ProductPhaseFillingTime productPhaseFillingTime1 = new ProductPhaseFillingTime(1L, product1, phase1, 3*24);
        productPhaseFillingTimeList.add(productPhaseFillingTime1);
        product1.setProductPhaseFillingTimeList(Arrays.asList(productPhaseFillingTime1));

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::fillingTime)
                .given(productionJob1, productionJob2)
                .penalizesBy(24);
    }

    @ConstraintProviderTest
    void remainderQuantityProductionRewarded(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 550);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 50);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::remainderQuantityProduction)
                .given(productionJob1, productionJob2)
                .rewardsWith(1);
    }

    @ConstraintProviderTest
    void remainderQuantityProductionUnrewared(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 50);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 550);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::remainderQuantityProduction)
                .given(productionJob1, productionJob2)
                .rewardsWith(0);
    }

    @ConstraintProviderTest
    void chamberStabilityUnpenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 50);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 550);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::chamberStability)
                .given(productionJob1, productionJob2)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void chamberStabilityPenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        Chamber chamber2 = new Chamber(2L,"Chamber2", phase1);
        chamber1.setCapacityType(CapacityType.L);
        chamber2.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 50);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 550);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber2);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::chamberStability)
                .given(productionJob1, productionJob2)
                .penalizesBy(1);
    }

    @ConstraintProviderTest
    void bakingJobUnpenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Product1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 600);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 0);
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::bakingJob)
                .given(productionJob1, productionJob2)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void bakingJobPenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Product1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 600);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 0);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::bakingJob)
                .given(productionJob1, productionJob2)
                .penalizesBy(1);
    }

    @ConstraintProviderTest
    void bakingJob2Rewarded(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Lucky", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 600);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 0);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::bakingJob2)
                .given(productionJob1, productionJob2)
                .rewardsWith(1);
    }

    @ConstraintProviderTest
    void bakingJob2Unrewarded(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 3));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Lucky", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 600);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 0);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::bakingJob2)
                .given(productionJob1, productionJob2)
                .rewardsWith(0);
    }

    @ConstraintProviderTest
    void continuousProductionCategoryRewarded(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Product1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 300);
        ProductionJob productionJob2 = new ProductionJob(1L, order1, 300);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::continuousProductionCategory)
                .given(productionJob1, productionJob2)
                .rewardsWith(1);
    }

    @ConstraintProviderTest
    void continuousProductionCategoryUnrewarded(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Timeslot timeslot2 = new Timeslot(1L, LocalDate.of(2023, 1, 2));

        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Product1", ProductCategory.GREY);
        Product product2 = new Product(2L,"Product2", ProductCategory.ORANGE);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProductEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", 600);
        Order order2 = new Order(2L, "Order2", product2, "2023/01/10", 600);

        ProductionJob productionJob1 = new ProductionJob(0L, order1, 600);
        ProductionJob productionJob2 = new ProductionJob(1L, order2, 600);
        productionJob1.setChamber(chamber1);
        productionJob2.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);
        productionJob2.setTimeslot(timeslot2);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::continuousProductionCategory)
                .given(productionJob1, productionJob2)
                .rewardsWith(0);
    }

/*    @ConstraintProviderTest
    void chamberUtilizationUnpenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProjectEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", CapacityType.L.getCapacitySize());

        ProductionJob productionJob1 = new ProductionJob(0L, order1, CapacityType.L.getCapacitySize());
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::chamberUtilization)
                .given(productionJob1)
                .penalizesBy(0);
    }

    @ConstraintProviderTest
    void chamberUtilizationPenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        Timeslot timeslot1 = new Timeslot(0L, LocalDate.of(2023, 1, 1));
        Phase phase1 = new Phase(1L,"Phase1");
        Equipment equipment1 = new Equipment(1L, "GA_PLUS");
        PhaseEquipment phaseEquipment1 = new PhaseEquipment(1L, phase1, equipment1);
        phase1.setPhaseEquipmentList(Arrays.asList(phaseEquipment1));

        Product product1 = new Product(1L,"Project1", ProductCategory.GREY);
        ProductEquipment productEquipment1 = new ProductEquipment(1L, product1, equipment1);
        product1.setProjectEquipmentList(Arrays.asList(productEquipment1));

        Chamber chamber1 = new Chamber(1L,"Chamber1", phase1);
        chamber1.setCapacityType(CapacityType.L);

        Order order1 = new Order(1L, "Order1", product1, "2023/01/10", CapacityType.L.getCapacitySize());

        ProductionJob productionJob1 = new ProductionJob(0L, order1, CapacityType.L.getCapacitySize() - 10);
        productionJob1.setChamber(chamber1);
        productionJob1.setTimeslot(timeslot1);

        constraintVerifier.verifyThat(OledSchedulingConstraintProvider::chamberUtilization)
                .given(productionJob1)
                .penalizesBy(10);
    }*/


/*    @ConstraintProviderTest
    void simultaneousProductionChamberCapacityUnpenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        //TODO:
    }

    @ConstraintProviderTest
    void simultaneousProductionChamberCapacityPenalized(
            ConstraintVerifier<OledSchedulingConstraintProvider, OledSchedule> constraintVerifier) {
        //TODO:
    }*/


}
