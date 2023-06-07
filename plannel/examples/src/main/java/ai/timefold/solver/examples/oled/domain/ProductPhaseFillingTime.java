package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

public class ProductPhaseFillingTime extends AbstractPersistable {

    private Product product;
    private Phase phase;
    int fillingTime;

    public ProductPhaseFillingTime(long id, Product product, Phase phase, int fillingTime) {
        super((id));
        this.product = product;
        this.phase = phase;
        this.fillingTime = fillingTime;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Phase getPhase() {
        return phase;
    }

    public void setPhase(Phase phase) {
        this.phase = phase;
    }
    public int getFillingTime() {
        return fillingTime;
    }

    public void setFillingTime(int fillingTime) {
        this.fillingTime = fillingTime;
    }

    @Override
    public String toString() { return product + "-" + phase + "-" + fillingTime; }

}
