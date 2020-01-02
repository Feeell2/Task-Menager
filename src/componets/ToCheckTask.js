import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
const mapStateToProps = state => ({
  tasks2: state.tasks2
});
const ToCheckTask = ({ tasks2 }) => {
  return (
    <ul className="ToDoTable">
      <h2 className="ToDoTable_title">do zatwierdzienia</h2>

      {tasks2.tasks2.map(task => (
        <Task
          key={tasks2.tasks2.indexOf(task)}
          titleTask={task.titleTask}
          describeTask={task.describeTask}
          startDate={task.startDate}
          // click={delateButton.bind(this)}
          index={tasks2.tasks2.indexOf(task)}
        />
      ))}
    </ul>
  );
};

export default connect(mapStateToProps, {})(ToCheckTask);
