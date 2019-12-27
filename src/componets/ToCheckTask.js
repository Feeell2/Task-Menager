import React from "react";
import Task from "./Task";
const ToCheckTask = () => {
  return (
    <ul className="ToDoTable">
      <h2 className="ToDoTable_title">do zatwierdzienia</h2>

      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  );
};

export default ToCheckTask;
