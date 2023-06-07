package ai.timefold.solver.examples.oled.optional.benchmark;

import ai.timefold.solver.examples.common.app.AbstractBenchmarkConfigTest;
import ai.timefold.solver.examples.common.app.CommonBenchmarkApp;
import ai.timefold.solver.examples.pas.optional.benchmark.PatientAdmissionScheduleBenchmarkApp;

class OledScheduleBenchmarkConfigTest extends AbstractBenchmarkConfigTest {

    @Override
    protected CommonBenchmarkApp getBenchmarkApp() {
        return new OledSchedulingBenchmarkApp();
    }
}
