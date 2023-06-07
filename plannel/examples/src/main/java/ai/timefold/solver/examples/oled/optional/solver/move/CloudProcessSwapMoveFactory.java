package ai.timefold.solver.examples.oled.optional.solver.move;

import ai.timefold.solver.core.impl.heuristic.selector.move.factory.MoveListFactory;
import ai.timefold.solver.examples.cloudbalancing.domain.CloudBalance;
import ai.timefold.solver.examples.cloudbalancing.domain.CloudProcess;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class CloudProcessSwapMoveFactory implements MoveListFactory<CloudBalance> {

    @Override
    public List<CloudProcessSwapMove> createMoveList(CloudBalance cloudBalance) {
        List<CloudProcess> cloudProcessList = cloudBalance.getProcessList();
        List<CloudProcessSwapMove> moveList = new ArrayList<>();
        for (ListIterator<CloudProcess> leftIt = cloudProcessList.listIterator(); leftIt.hasNext();) {
            CloudProcess leftCloudProcess = leftIt.next();
            for (ListIterator<CloudProcess> rightIt = cloudProcessList.listIterator(leftIt.nextIndex()); rightIt.hasNext();) {
                CloudProcess rightCloudProcess = rightIt.next();
                moveList.add(new CloudProcessSwapMove(leftCloudProcess, rightCloudProcess));
            }
        }
        return moveList;
    }

}
