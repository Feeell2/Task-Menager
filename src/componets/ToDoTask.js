import React from "react";
import Task from "./Task";

const ToDoTask = () => {
  return (
    <ul className="ToDoTable">
      <h2 className="ToDoTable_title">Do zrobienia</h2>
      <Task />
      <Task />
      <Task />
      <Task />
    </ul>
  );
};

export default ToDoTask;
