package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

public class UnavailableTimeslotPenalty  extends AbstractPersistable {

    private Chamber chamber;
    private Timeslot timeslot;

    public UnavailableTimeslotPenalty(long id, Chamber chamber, Timeslot timeslot) {
        super(id);
        this.chamber = chamber;
        this.timeslot = timeslot;
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
        return chamber + "@" + timeslot;
    }
}
