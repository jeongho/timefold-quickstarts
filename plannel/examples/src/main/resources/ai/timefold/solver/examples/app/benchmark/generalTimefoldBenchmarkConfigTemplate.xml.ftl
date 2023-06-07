<?xml version="1.0" encoding="UTF-8"?>
<plannerBenchmark>
  <benchmarkDirectory>local/data/general/template</benchmarkDirectory>

  <inheritedSolverBenchmark>
    <solver>
      <termination>
        <minutesSpentLimit>5</minutesSpentLimit>
      </termination>
    </solver>
  </inheritedSolverBenchmark>


  <#list ['JDK', 'MERSENNE_TWISTER', 'WELL512A', 'WELL1024A', 'WELL19937C', 'WELL44497B'] as randomType>
  <solverBenchmark>
    <name>Cloud Balancing Late Acceptance ${randomType}</name>
    <problemBenchmarks>
      <solutionFileIOClass>ai.timefold.solver.examples.cloudbalancing.persistence.CloudBalanceSolutionFileIO</solutionFileIOClass>
      <inputSolutionFile>data/cloudbalancing/unsolved/200computers-600processes.json</inputSolutionFile>
      <inputSolutionFile>data/cloudbalancing/unsolved/800computers-2400processes.json</inputSolutionFile>
    </problemBenchmarks>
    <solver>
      <solutionClass>ai.timefold.solver.examples.cloudbalancing.domain.CloudBalance</solutionClass>
      <entityClass>ai.timefold.solver.examples.cloudbalancing.domain.CloudProcess</entityClass>
      <randomType>${randomType}</randomType>
      <scoreDirectorFactory>
        <constraintProviderClass>ai.timefold.solver.examples.cloudbalancing.score.CloudBalancingConstraintProvider</constraintProviderClass>
        <initializingScoreTrend>ONLY_DOWN</initializingScoreTrend>
      </scoreDirectorFactory>
      <constructionHeuristic>
        <constructionHeuristicType>FIRST_FIT_DECREASING</constructionHeuristicType>
      </constructionHeuristic>
      <localSearch>
        <unionMoveSelector>
          <changeMoveSelector/>
          <swapMoveSelector/>
        </unionMoveSelector>
        <acceptor>
          <lateAcceptanceSize>400</lateAcceptanceSize>
        </acceptor>
        <forager>
          <acceptedCountLimit>4</acceptedCountLimit>
        </forager>
      </localSearch>
    </solver>
  </solverBenchmark>
  <solverBenchmark>
    <name>Machine Reassignment Tabu Search ${randomType}</name>
    <problemBenchmarks>
      <solutionFileIOClass>ai.timefold.solver.examples.machinereassignment.persistence.MachineReassignmentFileIO</solutionFileIOClass>
      <inputSolutionFile>data/machinereassignment/import/model_b_1.txt</inputSolutionFile>
      <inputSolutionFile>data/machinereassignment/import/model_b_10.txt</inputSolutionFile>
    </problemBenchmarks>
    <solver>
      <solutionClass>ai.timefold.solver.examples.machinereassignment.domain.MachineReassignment</solutionClass>
      <entityClass>ai.timefold.solver.examples.machinereassignment.domain.MrProcessAssignment</entityClass>
      <randomType>${randomType}</randomType>
      <scoreDirectorFactory>
        <constraintProviderClass>ai.timefold.solver.examples.machinereassignment.score.MachineReassignmentConstraintProvider</constraintProviderClass>
      </scoreDirectorFactory>
      <customPhase>
        <customPhaseCommandClass>ai.timefold.solver.examples.machinereassignment.solver.solution.initializer.ToOriginalMachineSolutionInitializer</customPhaseCommandClass>
      </customPhase>
      <localSearch>
        <unionMoveSelector>
          <changeMoveSelector/>
          <swapMoveSelector/>
        </unionMoveSelector>
        <acceptor>
          <entityTabuSize>7</entityTabuSize>
        </acceptor>
        <forager>
          <acceptedCountLimit>2000</acceptedCountLimit>
        </forager>
      </localSearch>
    </solver>
  </solverBenchmark>
  <solverBenchmark>
    <name>Course Scheduling Late Acceptance ${randomType}</name>
    <problemBenchmarks>
      <solutionFileIOClass>ai.timefold.solver.examples.curriculumcourse.persistence.CurriculumCourseSolutionFileIO</solutionFileIOClass>
      <inputSolutionFile>data/curriculumcourse/unsolved/comp07.json</inputSolutionFile>
      <inputSolutionFile>data/curriculumcourse/unsolved/comp08.json</inputSolutionFile>
    </problemBenchmarks>
    <solver>
      <solutionClass>ai.timefold.solver.examples.curriculumcourse.domain.CourseSchedule</solutionClass>
      <entityClass>ai.timefold.solver.examples.curriculumcourse.domain.Lecture</entityClass>
      <randomType>${randomType}</randomType>
      <scoreDirectorFactory>
        <constraintProviderClass>ai.timefold.solver.examples.curriculumcourse.score.CurriculumCourseConstraintProvider</constraintProviderClass>
      </scoreDirectorFactory>
      <constructionHeuristic>
        <constructionHeuristicType>FIRST_FIT_DECREASING</constructionHeuristicType>
      </constructionHeuristic>
      <localSearch>
        <unionMoveSelector>
          <changeMoveSelector/>
          <swapMoveSelector>
            <filterClass>ai.timefold.solver.examples.curriculumcourse.solver.move.DifferentCourseSwapMoveFilter</filterClass>
          </swapMoveSelector>
        </unionMoveSelector>
        <acceptor>
          <lateAcceptanceSize>600</lateAcceptanceSize>
        </acceptor>
        <forager>
          <acceptedCountLimit>4</acceptedCountLimit>
        </forager>
      </localSearch>
    </solver>
  </solverBenchmark>
  <solverBenchmark>
    <name>Examination Tabu Search ${randomType}</name>
    <problemBenchmarks>
      <solutionFileIOClass>ai.timefold.solver.examples.examination.persistence.ExaminationSolutionFileIO</solutionFileIOClass>
      <inputSolutionFile>data/examination/unsolved/exam_comp_set2.json</inputSolutionFile>
      <inputSolutionFile>data/examination/unsolved/exam_comp_set3.json</inputSolutionFile>
    </problemBenchmarks>
    <solver>
      <solutionClass>ai.timefold.solver.examples.examination.domain.Examination</solutionClass>
      <entityClass>ai.timefold.solver.examples.examination.domain.Exam</entityClass>
      <entityClass>ai.timefold.solver.examples.examination.domain.LeadingExam</entityClass>
      <entityClass>ai.timefold.solver.examples.examination.domain.FollowingExam</entityClass>
      <randomType>${randomType}</randomType>
      <scoreDirectorFactory>
        <constraintProviderClass>ai.timefold.solver.examples.examination.score.ExaminationConstraintProvider</constraintProviderClass>
      </scoreDirectorFactory>
      <constructionHeuristic>
        <queuedEntityPlacer>
          <entitySelector id="placerEntitySelector">
            <entityClass>ai.timefold.solver.examples.examination.domain.Exam</entityClass>
            <cacheType>PHASE</cacheType>
            <selectionOrder>SORTED</selectionOrder>
            <sorterManner>DECREASING_DIFFICULTY</sorterManner>
          </entitySelector>
          <cartesianProductMoveSelector>
            <changeMoveSelector>
              <entitySelector mimicSelectorRef="placerEntitySelector"/>
              <valueSelector variableName="period">
                <downcastEntityClass>ai.timefold.solver.examples.examination.domain.LeadingExam</downcastEntityClass>
                <cacheType>PHASE</cacheType>
                <!--<selectionOrder>SORTED</selectionOrder>-->
                <!--<sorterManner>INCREASING_STRENGTH</sorterManner>-->
              </valueSelector>
            </changeMoveSelector>
            <changeMoveSelector>
              <entitySelector mimicSelectorRef="placerEntitySelector"/>
              <valueSelector variableName="room">
                <cacheType>PHASE</cacheType>
                <selectionOrder>SORTED</selectionOrder>
                <sorterManner>INCREASING_STRENGTH</sorterManner>
              </valueSelector>
            </changeMoveSelector>
          </cartesianProductMoveSelector>
        </queuedEntityPlacer>
      </constructionHeuristic>
      <localSearch>
        <unionMoveSelector>
          <cartesianProductMoveSelector>
            <changeMoveSelector>
              <entitySelector id="cartesianProductEntitySelector">
                <entityClass>ai.timefold.solver.examples.examination.domain.Exam</entityClass>
              </entitySelector>
              <valueSelector variableName="room"/>
            </changeMoveSelector>
            <changeMoveSelector>
              <entitySelector mimicSelectorRef="cartesianProductEntitySelector"/>
              <valueSelector variableName="period">
                <downcastEntityClass>ai.timefold.solver.examples.examination.domain.LeadingExam</downcastEntityClass>
              </valueSelector>
            </changeMoveSelector>
          </cartesianProductMoveSelector>
          <swapMoveSelector>
            <entitySelector>
              <entityClass>ai.timefold.solver.examples.examination.domain.LeadingExam</entityClass>
            </entitySelector>
          </swapMoveSelector>
        </unionMoveSelector>
        <acceptor>
          <entityTabuSize>10</entityTabuSize>
        </acceptor>
        <forager>
          <acceptedCountLimit>2000</acceptedCountLimit>
        </forager>
      </localSearch>
    </solver>
  </solverBenchmark>
  <solverBenchmark>
    <name>Nurse Rostering Tabu Search ${randomType}</name>
    <problemBenchmarks>
      <solutionFileIOClass>ai.timefold.solver.examples.nurserostering.persistence.NurseRosterSolutionFileIO</solutionFileIOClass>
      <inputSolutionFile>data/nurserostering/unsolved/medium01.json</inputSolutionFile>
      <inputSolutionFile>data/nurserostering/unsolved/medium_hint01.json</inputSolutionFile>
    </problemBenchmarks>
    <solver>
      <solutionClass>ai.timefold.solver.examples.nurserostering.domain.NurseRoster</solutionClass>
      <entityClass>ai.timefold.solver.examples.nurserostering.domain.ShiftAssignment</entityClass>
      <randomType>${randomType}</randomType>
      <scoreDirectorFactory>
        <constraintProviderClass>ai.timefold.solver.examples.nurserostering.score.NurseRosteringConstraintProvider</constraintProviderClass>
      </scoreDirectorFactory>
      <constructionHeuristic>
        <constructionHeuristicType>WEAKEST_FIT</constructionHeuristicType>
      </constructionHeuristic>
      <localSearch>
        <unionMoveSelector>
          <moveListFactory>
            <cacheType>STEP</cacheType>
            <moveListFactoryClass>ai.timefold.solver.examples.nurserostering.solver.move.factory.ShiftAssignmentPillarPartSwapMoveFactory</moveListFactoryClass>
          </moveListFactory>
          <changeMoveSelector>
            <entitySelector>
              <filterClass>ai.timefold.solver.examples.nurserostering.domain.solver.MovableShiftAssignmentSelectionFilter</filterClass>
            </entitySelector>
          </changeMoveSelector>
          <swapMoveSelector>
            <entitySelector>
              <filterClass>ai.timefold.solver.examples.nurserostering.domain.solver.MovableShiftAssignmentSelectionFilter</filterClass>
            </entitySelector>
          </swapMoveSelector>
          <pillarChangeMoveSelector>
            <subPillarType>SEQUENCE</subPillarType>
            <pillarSelector>
              <entitySelector>
                <filterClass>ai.timefold.solver.examples.nurserostering.domain.solver.MovableShiftAssignmentSelectionFilter</filterClass>
              </entitySelector>
            </pillarSelector>
          </pillarChangeMoveSelector>
          <pillarSwapMoveSelector>
            <subPillarType>SEQUENCE</subPillarType>
            <pillarSelector>
              <entitySelector>
                <filterClass>ai.timefold.solver.examples.nurserostering.domain.solver.MovableShiftAssignmentSelectionFilter</filterClass>
              </entitySelector>
            </pillarSelector>
          </pillarSwapMoveSelector>
        </unionMoveSelector>
        <acceptor>
          <entityTabuSize>7</entityTabuSize>
        </acceptor>
        <forager>
          <acceptedCountLimit>800</acceptedCountLimit>
        </forager>
      </localSearch>
    </solver>
  </solverBenchmark>
  <solverBenchmark>
    <name>TravelingTournament Tabu Search ${randomType}</name>
    <problemBenchmarks>
      <solutionFileIOClass>ai.timefold.solver.examples.travelingtournament.persistence.TravelingTournamentSolutionFileIO</solutionFileIOClass>
      <inputSolutionFile>data/travelingtournament/unsolved/1-nl14.json</inputSolutionFile>
    </problemBenchmarks>
    <solver>
      <solutionClass>ai.timefold.solver.examples.travelingtournament.domain.TravelingTournament</solutionClass>
      <entityClass>ai.timefold.solver.examples.travelingtournament.domain.Match</entityClass>
      <randomType>${randomType}</randomType>
      <scoreDirectorFactory>
        <constraintProviderClass>ai.timefold.solver.examples.travelingtournament.score.TravelingTournamentConstraintProvider</constraintProviderClass>
      </scoreDirectorFactory>
      <localSearch>
        <unionMoveSelector>
          <swapMoveSelector>
            <cacheType>PHASE</cacheType>
            <selectionOrder>SHUFFLED</selectionOrder>
            <filterClass>ai.timefold.solver.examples.travelingtournament.solver.move.factory.InverseMatchSwapMoveFilter</filterClass>
          </swapMoveSelector>
          <moveListFactory>
            <cacheType>STEP</cacheType>
            <selectionOrder>SHUFFLED</selectionOrder>
            <moveListFactoryClass>ai.timefold.solver.examples.travelingtournament.solver.move.factory.MatchChainRotationsMoveFactory</moveListFactoryClass>
          </moveListFactory>
        </unionMoveSelector>
        <acceptor>
          <simulatedAnnealingStartingTemperature>2hard/10000soft</simulatedAnnealingStartingTemperature>
        </acceptor>
        <forager>
          <acceptedCountLimit>4</acceptedCountLimit>
        </forager>
      </localSearch>
    </solver>
  </solverBenchmark>
</#list>
</plannerBenchmark>
