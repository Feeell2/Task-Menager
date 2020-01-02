import React from "react";
import ToDoTask from "../componets/ToDoTask";
import ToCheckTask from "../componets/ToCheckTask";

const ManageTasks = () => {
  return (
    <>
      <h1 className="manageTask_title">Zarządzanie zadaniami</h1>
      <div className="manageTask">
        <ToDoTask />
        <ToCheckTask />
      </div>
    </>
  );
};

export default ManageTasks;
