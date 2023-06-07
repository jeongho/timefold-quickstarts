package ai.timefold.solver.examples.oled.domain;

public enum CapacityType {

    XL(700),
    L(650),
    M(600);

    private int capacitySize;

    CapacityType(int capacitySize) {
        this.capacitySize = capacitySize;
    }

    public int getCapacitySize() {
        return this.capacitySize;
    }

}
