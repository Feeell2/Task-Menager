import React from "react";
import Task from "./Task";
import { connect } from "react-redux";

import { addCheck } from "../duck/action";
const mapStateToProps = state => ({
  tasks2: state.tasks2
});
const mapDispatchToProps = dispatch => ({
  addCheck: id => dispatch(addCheck(id))
});
const ToCheckTask = ({ tasks2, addCheck }) => {
  const delateButtonCheck = event => {
    const id = event.currentTarget.getAttribute("index");
    addCheck(id);
  };
  return (
    <ul className="ToDoTable">
      <h2 className="ToDoTable_title">do zatwierdzienia</h2>

      {tasks2.tasks2.map(task => (
        <Task
          key={tasks2.tasks2.indexOf(task)}
          titleTask={task.titleTask}
          describeTask={task.describeTask}
          startDate={task.startDate}
          click={delateButtonCheck}
          index={tasks2.tasks2.indexOf(task)}
        />
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToCheckTask);
