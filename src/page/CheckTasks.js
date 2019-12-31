import React from "react";
import Task from "../componets/Task";
const style = { height: "80%" };
const CheckTasks = () => {
  return (
    <div className="CheckTasks">
      <ul className="ToDoTable" style={style}>
        <h2 className="ToDoTable_title">Do Sprawdzenia</h2>
        <Task />
        <Task />
        <Task />
        <Task />
      </ul>
    </div>
  );
};

export default CheckTasks;
