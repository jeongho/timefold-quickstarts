package ai.timefold.solver.examples.oled.optional.solver.move;

import ai.timefold.solver.core.impl.heuristic.selector.move.factory.MoveListFactory;
import ai.timefold.solver.examples.oled.domain.OledSchedule;
import ai.timefold.solver.examples.oled.domain.ProductionJob;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class ProductionJobChamberSwapMoveFactory implements MoveListFactory<OledSchedule> {


    @Override
    public List<ProductionJobChamberSwapMove> createMoveList(OledSchedule schedule) {
        List<ProductionJob> productionJobList = schedule.getProdutionJobList();
        List<ProductionJobChamberSwapMove> moveList = new ArrayList<>();
        for (ListIterator<ProductionJob> leftIt = productionJobList.listIterator(); leftIt.hasNext();) {
            ProductionJob leftProductionJob = leftIt.next();
            for (ListIterator<ProductionJob> rightIt = productionJobList.listIterator(); rightIt.hasNext();) {
                ProductionJob rightProductionJob = rightIt.next();
                moveList.add(new ProductionJobChamberSwapMove(leftProductionJob, rightProductionJob));
            }
        }
        return moveList;
    }
}
