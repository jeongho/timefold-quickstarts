package ai.timefold.solver.examples.oled.domain;

import ai.timefold.solver.examples.common.domain.AbstractPersistable;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Order extends AbstractPersistable implements  Comparable<Order> {

    private String name;
    private Product product;
    private LocalDate dueDate;
    private int quantity;
    public static final String OPS = "OP";

    public Order(long id, String name, Product product, LocalDate dueDate, int quantity) {
        super(id);
        this.name = name;
        this.product = product;
        this.dueDate = dueDate;
        this.quantity = quantity;
    }

    public Order(long id, String name, Product product, String dueDate, int quantity) {
        this(id, name, product, LocalDate.parse(dueDate, DateTimeFormatter.ofPattern("yyyy/MM/dd")), quantity);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() { return "Order [" + name + "] : " + product.getName() + " : " + dueDate + " : " + quantity + "qty"; }

    @Override
    public int compareTo(Order o) {
        return this.name.compareTo(o.getName());
    }
}
