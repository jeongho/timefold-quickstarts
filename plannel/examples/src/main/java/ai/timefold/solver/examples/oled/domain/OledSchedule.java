package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.constraintweight.ConstraintConfigurationProvider;
import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardmediumsoft.HardMediumSoftScore;
import ai.timefold.solver.examples.common.domain.AbstractPersistable;

import java.util.List;

@PlanningSolution
public class OledSchedule extends AbstractPersistable {

    @ConstraintConfigurationProvider
    private OledConstraintConfiguration constraintConfiguration;

    @ProblemFactCollectionProperty
    @ValueRangeProvider
    private List<Timeslot> timeslotList;
    @ProblemFactCollectionProperty
    private List<Phase> phaseList;
    @ProblemFactCollectionProperty
    private List<Product> productList;
    @ProblemFactCollectionProperty
    @ValueRangeProvider
    private List<Chamber> chamberList;
    @ProblemFactCollectionProperty
    private List<Order> orderList;

    @ProblemFactCollectionProperty
    private List<Equipment> equipmentList;

    @ProblemFactCollectionProperty
    private List<PhaseEquipment> phaseEquipmentList;

    @ProblemFactCollectionProperty
    private List<ProductEquipment> productEquipmentList;

    @ProblemFactCollectionProperty
    private List<ProductPhaseFillingTime> productPhaseFillingTimeList;

    @ProblemFactCollectionProperty
    private List<UnavailableTimeslotPenalty> unavailableTimeslotPenaltyList;

    @PlanningEntityCollectionProperty
    private List<ProductionJob> productionJobList;
    @PlanningScore
    private HardMediumSoftScore score;

    public OledSchedule() {
        // empty constructor
    }

    public OledSchedule(long id) {
        super(id);
    }

    public OledConstraintConfiguration getConstraintConfiguration() {
        return constraintConfiguration;
    }

    public void setConstraintConfiguration(OledConstraintConfiguration constraintConfiguration) {
        this.constraintConfiguration = constraintConfiguration;
    }

    public List<Order> getOrderList() {
        return orderList;
    }

    public void setOrderList(List<Order> orderList) { this.orderList = orderList; }

    public List<Phase> getPhaseList() {
        return phaseList;
    }

    public void setPhaseList(List<Phase> phaseList) { this.phaseList = phaseList; }

    public List<Product> getProductList() {
        return productList;
    }

    public void setProductList(List<Product> productList) { this.productList = productList; }

    public List<Chamber> getChamberList() {
        return chamberList;
    }

    public void setChamberList(List<Chamber> chamberList) { this.chamberList = chamberList; }

    public List<Timeslot> getTimeslotList() { return timeslotList; }

    public void setTimeslotList(List<Timeslot> timeslotList) { this.timeslotList = timeslotList; }

    public List<Equipment> getEquipmentList() { return equipmentList; }

    public void setEquipmentList(List<Equipment> equipmentList) { this.equipmentList = equipmentList; }

    public List<PhaseEquipment> getPhaseEquipmentList() { return phaseEquipmentList; }

    public void setPhaseEquipmentList(List<PhaseEquipment> phaseEquipmentList) {
        this.phaseEquipmentList = phaseEquipmentList; }

    public List<ProductEquipment> getProductEquipmentList() { return productEquipmentList; }

    public void setProductEquipmentList(List<ProductEquipment> productEquipmentList) {
        this.productEquipmentList = productEquipmentList; }

    public List<ProductPhaseFillingTime> getProductPhaseFillingTimeList() {
        return productPhaseFillingTimeList;
    }

    public void setProductPhaseFillingTimeList(List<ProductPhaseFillingTime> productPhaseFillingTimeList) {
        this.productPhaseFillingTimeList = productPhaseFillingTimeList;
    }

    public List<UnavailableTimeslotPenalty> getUnavailableTimeslotPenaltyList() {
        return unavailableTimeslotPenaltyList;
    }

    public void setUnavailableTimeslotPenaltyList(List<UnavailableTimeslotPenalty> unavailableTimeslotPenaltyList) {
        this.unavailableTimeslotPenaltyList = unavailableTimeslotPenaltyList;
    }

    public List<ProductionJob> getProdutionJobList() {
        return productionJobList;
    }

    public void setProductionJobList(List<ProductionJob> productionJobList) { this.productionJobList = productionJobList; }

    public HardMediumSoftScore getScore() {
        return score;
    }

    public void setScore(HardMediumSoftScore score) { this.score = score; }

}
