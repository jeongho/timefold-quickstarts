package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

public class Chamber extends AbstractPersistable implements Labeled {

    private String name;
    private Phase phase;

    private CapacityType capacityType;

    public Chamber(long id, String name, Phase phase) {
        super(id);
        this.name = name;
        this.phase = phase;
        this.capacityType = CapacityType.L;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Phase getPhase() {
        return phase;
    }

    public void setPhase(Phase phase) {
        this.phase = phase;
    }

    public CapacityType getCapacityType() { return capacityType; }

    public void setCapacityType(CapacityType capatityType) {
        this.capacityType = capatityType;
    }

    @Override
    public String toString() {
        return name;
    }

    @Override
    public String getLabel() {
        return name;
    }

}
