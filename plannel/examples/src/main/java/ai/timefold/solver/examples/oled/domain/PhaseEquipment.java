package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

public class PhaseEquipment extends AbstractPersistable {

    private Phase phase;
    private Equipment equipment;

    public PhaseEquipment() {
    }

    public PhaseEquipment(long id, Phase phase, Equipment equipment) {
        super(id);
        this.phase = phase;
        this.equipment = equipment;
    }

    public Phase getPhase() { return phase; }

    public void setPhase(Phase pahse) { this.phase = pahse; }

    public Equipment getEquipment() { return equipment; }

    public void setEquipment(Equipment equipment) { this.equipment = equipment; }

    @Override
    public String toString() { return phase + "-" + equipment; }
}
