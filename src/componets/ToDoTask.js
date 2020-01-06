import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { addToCheck } from "../duck/action";

const mapStateToProps = state => ({
  tasks: state.tasks
});
const mapDispatchToProps = dispatch => ({
  addToCheck: id => dispatch(addToCheck(id))
});

const ToDoTask = ({ tasks, addToCheck }) => {
  const delateButton = event => {
    const id = event.currentTarget.getAttribute("index");
    addToCheck(id);
  };
  return (
    <ul className="ToDoTable">
      <h2 className="ToDoTable_title">Do zrobienia</h2>
      {tasks.tasks.map(task => (
        <Task
          key={tasks.tasks.indexOf(task)}
          titleTask={task.titleTask}
          describeTask={task.describeTask}
          startDate={task.startDate}
          click={delateButton}
          index={tasks.tasks.indexOf(task)}
        />
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoTask);
