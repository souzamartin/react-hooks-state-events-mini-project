import React from "react";
import Task from "./Task"

function TaskList({categories, tasks}) {
  
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <Task key={task.text} task={task} />
      }
      )}
    </div>
  );
}

export default TaskList;
