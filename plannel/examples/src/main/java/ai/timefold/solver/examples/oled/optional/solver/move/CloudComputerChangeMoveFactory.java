package ai.timefold.solver.examples.oled.optional.solver.move;

import ai.timefold.solver.core.impl.heuristic.selector.move.factory.MoveListFactory;
import ai.timefold.solver.examples.cloudbalancing.domain.CloudBalance;
import ai.timefold.solver.examples.cloudbalancing.domain.CloudComputer;
import ai.timefold.solver.examples.cloudbalancing.domain.CloudProcess;

import java.util.ArrayList;
import java.util.List;

public class CloudComputerChangeMoveFactory implements MoveListFactory<CloudBalance> {

    @Override
    public List<CloudComputerChangeMove> createMoveList(CloudBalance cloudBalance) {
        List<CloudComputerChangeMove> moveList = new ArrayList<>();
        List<CloudComputer> cloudComputerList = cloudBalance.getComputerList();
        for (CloudProcess cloudProcess : cloudBalance.getProcessList()) {
            for (CloudComputer cloudComputer : cloudComputerList) {
                moveList.add(new CloudComputerChangeMove(cloudProcess, cloudComputer));
            }
        }
        return moveList;
    }

}
