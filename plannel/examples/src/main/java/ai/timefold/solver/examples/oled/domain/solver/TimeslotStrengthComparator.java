package ai.timefold.solver.examples.oled.domain.solver;

import ai.timefold.solver.examples.oled.domain.Timeslot;

import java.util.Comparator;

public class TimeslotStrengthComparator implements Comparator<Timeslot> {

    @Override
    public int compare(Timeslot a, Timeslot b) {
        if (a == null && b == null) {
            return 0; // Both timeslots are null and are equal
        } else if (a == null) {
            return -1; // Null timeslot is considered smaller (before) than non-null timeslot
        } else if (b == null) {
            return 1; // Non-null timeslot is considered greater (after) than null timeslot
        }
        // FIXME Strength should be implemented ascending:
        //  https://timefold.ai/docs/timefold-solver/latest/configuration/configuration.html#planningVariable
        //  weaker values are lower, stronger values are higher.
        //  For example in bin packing: small container < medium container < big container.
        //return b.getDate().compareTo(a.getDate());
        return a.getDate().compareTo(b.getDate());
    }
}
