package ai.timefold.solver.examples.oled.app;

import ai.timefold.solver.examples.common.app.CommonApp;
//import ai.timefold.solver.examples.oled.swingui.ExaminationPanel;
import ai.timefold.solver.examples.oled.domain.OledSchedule;
import ai.timefold.solver.examples.oled.persistence.OledSchedulingXlsxFileIO;
import ai.timefold.solver.examples.oled.swingui.OledPanel;
import ai.timefold.solver.persistence.common.api.domain.solution.SolutionFileIO;

public class OledSchedulingApp extends CommonApp<OledSchedule> {

    public static final String SOLVER_CONFIG = "ai/timefold/solver/examples/oled/oledSolverConfig.xml";
    //    public static final String SOLVER_CONFIG = "ai/timefold/solver/examples/oled/oledSolverConfig2.xml";
    //    public static final String SOLVER_CONFIG = "ai/timefold/solver/examples/oled/oledSolverConfig3.xml";
    //    public static final String SOLVER_CONFIG = "ai/timefold/solver/examples/oled/oledSolverConfigNoChangePhase.xml";

    public static final String DATA_DIR_NAME = "oled";

    public static void main(String[] args) {
        prepareSwingEnvironment();
        new OledSchedulingApp().init();
    }

    public OledSchedulingApp() {
        super("OLED Scheduling",
                "Assign activities to chambers.\n\n" +
                        "Each chamber must have enough capacity to run all of its activities.\n" +
                        "Each used chamber inflicts capacity constraints.",
                SOLVER_CONFIG, DATA_DIR_NAME,
                OledPanel.LOGO_PATH
        );
    }

    @Override
    protected OledPanel createSolutionPanel() {
        return new OledPanel();
    }

    @Override
    public SolutionFileIO<OledSchedule> createSolutionFileIO() {
        return new OledSchedulingXlsxFileIO();
    }

}
