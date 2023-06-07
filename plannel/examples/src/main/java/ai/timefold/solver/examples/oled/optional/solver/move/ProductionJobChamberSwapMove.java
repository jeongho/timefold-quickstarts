package ai.timefold.solver.examples.oled.optional.solver.move;

import ai.timefold.solver.core.api.score.director.ScoreDirector;
import ai.timefold.solver.core.impl.heuristic.move.AbstractMove;
import ai.timefold.solver.core.impl.heuristic.move.Move;
import ai.timefold.solver.examples.cloudbalancing.domain.CloudProcess;
import ai.timefold.solver.examples.oled.domain.*;

import java.util.Arrays;
import java.util.Collection;
import java.util.Objects;

public class ProductionJobChamberSwapMove extends AbstractMove<OledSchedule> {

    private ProductionJob leftProductionJob;
    private ProductionJob rightProductionJob;

    public ProductionJobChamberSwapMove(ProductionJob leftProductionJob, ProductionJob rightProductionJob) {
        this.leftProductionJob = leftProductionJob;
        this.rightProductionJob = rightProductionJob;
    }


    @Override
    public boolean isMoveDoable(ScoreDirector<OledSchedule> scoreDirector) {
        return !(Objects.equals(leftProductionJob.getChamber(), rightProductionJob.getChamber())
                && Objects.equals(leftProductionJob.getTimeslot(), rightProductionJob.getTimeslot()));
    }

    @Override
    protected ProductionJobChamberSwapMove createUndoMove(ScoreDirector<OledSchedule> scoreDirector) {
        return new ProductionJobChamberSwapMove(rightProductionJob, leftProductionJob);
    }

    @Override
    protected void doMoveOnGenuineVariables(ScoreDirector<OledSchedule> scoreDirector) {
        Chamber oldLeftChamber = leftProductionJob.getChamber();
        Chamber oldRightChamber = rightProductionJob.getChamber();
        scoreDirector.beforeVariableChanged(leftProductionJob, "chamber");
        leftProductionJob.setChamber(oldRightChamber);
        scoreDirector.afterVariableChanged(leftProductionJob, "chamber");
        scoreDirector.beforeVariableChanged(rightProductionJob, "chamber");
        rightProductionJob.setChamber(oldLeftChamber);
        scoreDirector.afterVariableChanged(rightProductionJob, "chamber");

    }

    @Override
    public ProductionJobChamberSwapMove rebase(ScoreDirector<OledSchedule> destinationScoreDirector) {
        return new ProductionJobChamberSwapMove(destinationScoreDirector.lookUpWorkingObject(leftProductionJob),
                destinationScoreDirector.lookUpWorkingObject(rightProductionJob));
    }

    @Override
    public String getSimpleMoveTypeDescription() {
        return getClass().getSimpleName() + "(" + ProductionJob.class.getSimpleName() + ".job)";
    }
    @Override
    public Collection<?> getPlanningEntities() {
        return Arrays.asList(leftProductionJob, rightProductionJob);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        final ProductionJobChamberSwapMove other = (ProductionJobChamberSwapMove) o;
        return Objects.equals(leftProductionJob, other.leftProductionJob) &&
                Objects.equals(rightProductionJob, other.rightProductionJob);
    }

    @Override
    public int hashCode() {
        return Objects.hash(leftProductionJob, rightProductionJob);
    }

    @Override
    public String toString() {
        return leftProductionJob + " {" + leftProductionJob.getChamber() + "} <-> "
                + rightProductionJob + " {" + rightProductionJob.getChamber() + "}";
    }

}
