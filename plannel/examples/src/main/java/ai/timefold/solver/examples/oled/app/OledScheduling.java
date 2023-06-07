package ai.timefold.solver.examples.oled.app;

import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.config.constructionheuristic.ConstructionHeuristicPhaseConfig;
import ai.timefold.solver.core.config.localsearch.LocalSearchPhaseConfig;
import ai.timefold.solver.core.config.score.director.ScoreDirectorFactoryConfig;
import ai.timefold.solver.core.config.solver.EnvironmentMode;
import ai.timefold.solver.core.config.solver.SolverConfig;
import ai.timefold.solver.core.config.solver.random.RandomType;
import ai.timefold.solver.examples.common.app.LoggingMain;
import ai.timefold.solver.examples.oled.domain.OledSchedule;
import ai.timefold.solver.examples.oled.domain.ProductionJob;
import ai.timefold.solver.examples.oled.domain.solver.OledUtil;
import ai.timefold.solver.examples.oled.persistence.OledSchedulingGenerator;
import ai.timefold.solver.examples.oled.score.OledSchedulingConstraintProvider;

import java.time.Duration;
import java.util.List;

public class OledScheduling extends LoggingMain {

    public static void main(String[] args) {
        OledScheduling scheduler = new OledScheduling();
        boolean generateInitializedSamples = false;
        if (generateInitializedSamples) {   
            scheduler.run(OledSchedulingGenerator.OLED_1, false, false, "PT30S", EnvironmentMode.REPRODUCIBLE, true);
            scheduler.run(OledSchedulingGenerator.OLED_3, false, false, "PT30S", EnvironmentMode.REPRODUCIBLE, true);
            scheduler.run(OledSchedulingGenerator.OLED_4, false, false, "PT30S", EnvironmentMode.REPRODUCIBLE, true);
            scheduler.run(OledSchedulingGenerator.OLED_5, false, false, "PT30S", EnvironmentMode.REPRODUCIBLE, true);
        }
        else {
            // OLED_1 : 2 chambers,  3 orders
            // OLED_2 : 4 chambers,  3 orders
            // OLED_3 : 6 chambers, 15 orders
            // OLED_4 : 2 chambers,  3 orders, baking
            // OLED_5 : 6 chambers, 19 orders, baking
            // OLED_6 : 6 chambers, 30 orders, baking, 60 timeslots
            // OLED_7 : 2 chambers,  3 orders, baking, maintenance
            scheduler.run(OledSchedulingGenerator.OLED_7, false, false,"PT30S", EnvironmentMode.REPRODUCIBLE, false);
        }
    }

    public void run(String example, boolean overConstrained, boolean createSolverByXML, String terminationSpentLimit, EnvironmentMode environmentMode,  boolean saveSolution) {
        SolverFactory<OledSchedule> solverFactory;
        if (createSolverByXML) {
            solverFactory = SolverFactory.createFromXmlResource(OledSchedulingApp.SOLVER_CONFIG);
        } else {
            // Solver configuration by Java API
            solverFactory = SolverFactory.create(
                    new SolverConfig()
                            .withEnvironmentMode(environmentMode)
                            .withRandomType(RandomType.JDK).withRandomSeed(0L)
                            .withSolutionClass(OledSchedule.class)
                            .withEntityClasses(ProductionJob.class)
                            .withScoreDirectorFactory(
                                    new ScoreDirectorFactoryConfig()
                                            .withConstraintProviderClass(OledSchedulingConstraintProvider.class)
                                            .withInitializingScoreTrend("ONLY_DOWN") //SCORE: 0hard/-496soft
                            )
                            .withPhaseList(List.of(new ConstructionHeuristicPhaseConfig(), new LocalSearchPhaseConfig()))
                            // The solver runs only for 30 seconds on this small dataset.
                            // It's recommended to run for at least 5 minutes ("5m") otherwise.
                            .withTerminationSpentLimit(Duration.parse(terminationSpentLimit))
            );
        }
        // Build a solver
        Solver<OledSchedule> solver = solverFactory.buildSolver();

        // Load the problem
        OledSchedulingGenerator generator = new OledSchedulingGenerator();
        if (OledSchedulingGenerator.OLED_1.equals(example) && overConstrained) {
            generator.setOverConstrained(true);
        }
        if (OledSchedulingGenerator.OLED_4.equals(example)
                || OledSchedulingGenerator.OLED_5.equals(example)) {
            generator.setAddBakingJob(true);
        }
        OledSchedule problem = generator.createOledSchedule(
                example,
                OledSchedulingGenerator.DEFAULT_START_DATE,
                OledSchedulingGenerator.DEFAULT_TIME_HORIZON,
                OledSchedulingGenerator.DEFAULT_SPLIT_SIZE);
        // Solve the problem
        OledSchedule solution = solver.solve(problem);

        // Check NoChangePhase from score!
        if (!solution.getScore().isFeasible() && solution.getScore().hardScore() == 0) {
            logger.info("*** NoChangePhase! " + solution.getScore().toString());

        } else {
            OledUtil.printResult(solution);
        }
        if (saveSolution) {
            generator.writeOledSchedule(example, solution);
        }
    }

    public OledScheduling() {}

}
