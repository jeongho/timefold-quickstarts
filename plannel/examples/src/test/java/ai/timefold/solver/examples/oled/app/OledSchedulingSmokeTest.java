package ai.timefold.solver.examples.oled.app;

import ai.timefold.solver.core.api.score.buildin.hardmediumsoft.HardMediumSoftScore;
import ai.timefold.solver.core.api.score.stream.ConstraintStreamImplType;
import ai.timefold.solver.examples.common.app.SolverSmokeTest;
import ai.timefold.solver.examples.oled.domain.OledSchedule;

import java.util.stream.Stream;

class OledSchedulingSmokeTest extends SolverSmokeTest<OledSchedule, HardMediumSoftScore> {

    private static final String UNSOLVED_DATA_FILE = "data/oled/unsolved/oled1-2chambers-3orders-30timeslots.xlsx";

    @Override
    protected OledSchedulingApp createCommonApp() {
        return new OledSchedulingApp();
    }

    @Override
    protected Stream<TestData<HardMediumSoftScore>> testData() {
        return Stream.of(
                TestData.of(ConstraintStreamImplType.BAVET, UNSOLVED_DATA_FILE,
                        HardMediumSoftScore.ofSoft(-340), //bestScoreLimitForReproducible
                        HardMediumSoftScore.ofSoft(-342) //bestScoreLimitForFastAssert
                ));
    }
}
