package ai.timefold.solver.examples.oled.domain;

public enum ProductCategory {

    OPS(0), // Baking job
    ORANGE(1),
    BLUE(2),
    RED(3),
    GREEN(4),
    GREY(0);

    private int categoryNumber;
    ProductCategory(int categoryNumber) { this.categoryNumber = categoryNumber; }

    public int getCategoryNumber() { return this.categoryNumber; }
}
