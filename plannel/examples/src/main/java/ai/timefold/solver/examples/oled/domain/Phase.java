package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

import java.util.ArrayList;
import java.util.List;

public class Phase extends AbstractPersistable implements Labeled {

    private String name;
    private List<Chamber> chamberList;
    private List<PhaseEquipment> phaseEquipmentList;
    public Phase(long id, String name) {
        super(id);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Chamber> getChamberList() {
        return chamberList;
    }

    public void setChamberList(List<Chamber> chamberList) {
        this.chamberList = chamberList;
    }

    public Chamber getTheOtherChamber(Chamber chamber) {
        for(Chamber c : this.chamberList) {
            if (c.getId() != chamber.getId()) {
                return c;
            }
        }
        throw new IllegalArgumentException("Illegal Chamber" + chamber.toString());
    }

    public List<PhaseEquipment> getPhaseEquipmentList() {
        return phaseEquipmentList;
    }

    public void setPhaseEquipmentList(List<PhaseEquipment> phaseEquipmentList) {
        this.phaseEquipmentList = phaseEquipmentList;
    }

    @Override
    public String getLabel() { return name; }

    @Override
    public String toString() {
        return name;
    }

}
