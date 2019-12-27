import React from "react";
import ToDoTask from "../componets/ToDoTask";
import ToCheckTask from "../componets/ToCheckTask";
const ManageTasks = () => {
  return (
    <>
      <div className="manageTask">
        <ToDoTask />
        <ToCheckTask />
      </div>
    </>
  );
};

export default ManageTasks;
