package ai.timefold.solver.examples.oled.optional.benchmark;

import ai.timefold.solver.examples.common.app.CommonBenchmarkApp;

public class OledSchedulingBenchmarkApp extends CommonBenchmarkApp {

    public static void main(String[] args) {
        new OledSchedulingBenchmarkApp().buildAndBenchmark(args);
    }

    public OledSchedulingBenchmarkApp() {
        super(
                new ArgOption("default",
                        "ai/timefold/solver/examples/oled/optional/benchmark/oledSchedulingBenchmarkConfig.xml"));
    }

}
