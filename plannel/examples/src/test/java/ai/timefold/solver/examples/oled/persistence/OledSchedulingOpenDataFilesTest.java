package ai.timefold.solver.examples.oled.persistence;

import ai.timefold.solver.examples.common.app.CommonApp;
import ai.timefold.solver.examples.common.persistence.OpenDataFilesTest;
import ai.timefold.solver.examples.meetingscheduling.app.MeetingSchedulingApp;
import ai.timefold.solver.examples.meetingscheduling.domain.MeetingSchedule;
import ai.timefold.solver.examples.oled.app.OledSchedulingApp;
import ai.timefold.solver.examples.oled.domain.OledSchedule;

class OledSchedulingOpenDataFilesTest extends OpenDataFilesTest<OledSchedule> {

    @Override
    protected CommonApp<OledSchedule> createCommonApp() {
        return new OledSchedulingApp();
    }
}
