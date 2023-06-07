package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Timeslot extends AbstractPersistable implements Comparable<Timeslot>, Labeled {

    private LocalDate date;

    public Timeslot(long id, LocalDate date) {
        super(id);
        this.date = date;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public int compareTo(Timeslot o) {
        return this.date.compareTo(o.getDate());
    }

    @Override
    public String getLabel() {
        return date.toString();
    }

    @Override
    public String toString() { return date.toString(); }

}
