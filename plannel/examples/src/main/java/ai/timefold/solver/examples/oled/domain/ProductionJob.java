package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.entity.PlanningPin;
import ai.timefold.solver.core.api.domain.variable.PlanningVariable;
import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;
import ai.timefold.solver.examples.oled.domain.solver.ChamberStrengthComparator;
import ai.timefold.solver.examples.oled.domain.solver.ProductionJobDifficultyWeightFactory;
import ai.timefold.solver.examples.oled.domain.solver.TimeslotStrengthComparator;

import java.time.temporal.ChronoField;
import java.util.Comparator;

@PlanningEntity(difficultyWeightFactoryClass = ProductionJobDifficultyWeightFactory.class)
public class ProductionJob extends AbstractPersistable implements Labeled, Comparable {

    private Order order;
    private int quantity;
    private boolean pinned;

    @PlanningVariable(nullable = true, strengthComparatorClass = ChamberStrengthComparator.class)
    private Chamber chamber;
    @PlanningVariable(nullable = true, strengthComparatorClass = TimeslotStrengthComparator.class)
    private Timeslot timeslot;

    public ProductionJob() {}

    public ProductionJob(long id, Order order, int quantity) {
        super(id);
        this.order = order;
        this.quantity = quantity;
    }

    public static ProductionJob createBakingJob(long id) {
        ProductionJob bakingJob = new ProductionJob(id, null, 0);
        return bakingJob;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @PlanningPin
    public boolean isPinned() {
        return pinned;
    }

    public void setPinned(boolean pinned) {
        this.pinned = pinned;
    }

    public Chamber getChamber() {
        return chamber;
    }

    public void setChamber(Chamber chamber) {
        this.chamber = chamber;
    }

    public Timeslot getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(Timeslot timeslot) {
        this.timeslot = timeslot;
    }

    @Override
    public String toString() {
        return "Job" + id + " : " + order.getName() + " - " + quantity + "qty";
    }

    @Override
    public String getLabel() {
        return Long.toString(getId());
    }

    @Override
    public int compareTo(Object other) {
        return COMPARATOR.compare(this, (ProductionJob) other);
    }

    private static final Comparator<ProductionJob> COMPARATOR = Comparator
            .comparingLong((ProductionJob job) -> job.getOrder().getId())
            .thenComparingLong((ProductionJob job) -> job.getChamber().getId())
            .thenComparingLong((ProductionJob job) -> job.getTimeslot().getDate().getLong(ChronoField.EPOCH_DAY))
            .thenComparingLong(ProductionJob::getId);

    public boolean requiresBakingJob() {
        return order.getProduct().requiresBaking();
    }

    public boolean isBakingJob() {
        return quantity == 0;
//        return order.getProduct().isBaking();
    }

    public boolean isMaintenanceJob() {
        return order.getProduct().isMaintenance();
    }

    public String getPanelName() {
        if(isBakingJob()) {
            return "OPS-Baking";
        } else if (isMaintenanceJob()) {
            return "OPS-Maint";
        }
        else {
            return this.getOrder().getName()
                    + "-" + this.getOrder().getProduct().getName()
                    + " (" + this.getQuantity() + ")";
        }
    }
}
