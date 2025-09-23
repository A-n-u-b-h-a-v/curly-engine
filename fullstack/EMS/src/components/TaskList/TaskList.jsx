import React, { useState, useEffect } from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div className="TaskList w-screen overflow-x-auto text-white h-1/2 mt-10 p-5 flex gap-5 flex-nowrap">
      {data.tasks.map((task, index) => {
        console.log(task);

        if (task.active) {
          return <AcceptTask key={index} data={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={index} data={task} />;
        }
        if (task.failed) {
          return <FailedTask key={index} data={task} />;
        }
        if (task.newTask) {
          return <NewTask key={index} data={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
