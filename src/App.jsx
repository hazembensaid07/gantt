import React, { useEffect } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import gantt from "dhtmlx-gantt";

const App = () => {
  useEffect(() => {
    console.log("here");
    const tasks = {
      data: [
        { id: 1, text: "buy_arm arm1", start_date: new Date(), duration: 2 },
      ],
    };

    gantt.date.seconds_start = function (date) {
      return date.getTime() * 1000;
    };

    gantt.config.date_scale = "%s";
    gantt.init("gantt_here");
    gantt.parse(tasks);

    const task = gantt.getTaskByIndex(0);
    const endDate = gantt.calculateEndDate(
      task.start_date,
      task.duration * 1000
    );
    gantt.config.max_date = endDate;
    gantt.config.min_date = task.start_date;
    gantt.render();
  }, []);

  return <div id="gantt_here" style={{ width: "100%", height: "100%" }}></div>;
};

export default App;
