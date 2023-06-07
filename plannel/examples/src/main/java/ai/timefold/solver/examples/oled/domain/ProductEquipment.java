package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

public class ProductEquipment extends AbstractPersistable {

    private Product product;
    private Equipment equipment;

    public ProductEquipment() {
    }

    public ProductEquipment(long id, Product product, Equipment equipment) {
        super(id);
        this.product = product;
        this.equipment = equipment;
    }

    public Product getProject() { return product; }

    public void setProject(Product product) { this.product = product; }

    public Equipment getEquipment() { return equipment; }

    public void setEquipment(Equipment equipment) { this.equipment = equipment; }

    @Override
    public String toString() { return product + "-" + equipment; }
}
