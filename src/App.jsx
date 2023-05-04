import React, { useEffect } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import gantt from "dhtmlx-gantt";

const App = () => {
  useEffect(() => {
    gantt.config.xml_date = null;
    gantt.config.work_time = {
      day: [true, true, true, true, true, false, false],
      hours: {
        from: 32400,
        to: 61200,
      },
    };

    gantt.config.date_scale = "%s";
    gantt.config.task_date = "%s";
    gantt.config.scale_height = 60;
    gantt.config.drag_links = false;
    gantt.config.drag_progress = false;
    gantt.config.grid_width = 420;

    gantt.init("gantt_chart");

    gantt.parse([
      { id: 1, text: "buy_arm arm1", start_date: 0.0, duration: 5000.0 },
    ]);
  }, []);

  return <div id="gantt_chart" style={{ width: "100%", height: "100%" }}></div>;
};

export default App;
