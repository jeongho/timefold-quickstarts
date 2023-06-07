package ai.timefold.solver.examples.oled.domain;


import ai.timefold.solver.examples.common.domain.AbstractPersistable;
import ai.timefold.solver.examples.common.swingui.components.Labeled;

import java.util.List;

public class Product extends AbstractPersistable implements Labeled {

    private String name;
    private ProductCategory category;
    private List<ProductEquipment> productEquipmentList;

    private List<ProductPhaseFillingTime> productPhaseFillingTimeList;

    public Product(long id, String name, ProductCategory category) {
        super(id);
        this.name = name;
        this.category = category;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductCategory getCategory() {
        return category;
    }

    public void setCategory(ProductCategory category) {
        this.category = category;
    }
    @Override
    public String toString() {
        return name;
    }

    @Override
    public String getLabel() { return name; }

    public List<ProductEquipment> getProductEquipmentList() { return productEquipmentList; }

    public void setProductEquipmentList(List<ProductEquipment> productEquipmentList) {
        this.productEquipmentList = productEquipmentList;
    }

    public List<ProductPhaseFillingTime> getProductPhaseFillingTimeList() {
        return productPhaseFillingTimeList;
    }

    public void setProductPhaseFillingTimeList(List<ProductPhaseFillingTime> productPhaseFillingTimeList) {
        this.productPhaseFillingTimeList = productPhaseFillingTimeList;
    }

    public static final String BRUCE = "Bruce";
    public static final String LUCKY = "Lucky";
    public static final String OPS_BAKING = "Baking";

    public static final String OPS_MAINT = "Maint";

    //HV075/076/081/088/089
    public boolean requiresBaking() { return BRUCE.equals(name) || LUCKY.equals(name); }

    public boolean isBaking() { return OPS_BAKING.equals(name); }

    public boolean isMaintenance() { return OPS_MAINT.equals(name); }
}
