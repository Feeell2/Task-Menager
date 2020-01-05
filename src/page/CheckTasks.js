import React from "react";
import Task from "../componets/Task";
import { connect } from "react-redux";
const style = { height: "80vh" };
const mapStateToProps = state => ({
  tasks3: state.tasks3
});

const CheckTasks = ({ tasks3 }) => {
  const delateButton = () => {
    return { display: "none" };
  };
  return (
    <div className="CheckTasks">
      <ul className="ToDoTable" style={style}>
        <h2 className="ToDoTable_title">WYKONANE</h2>
        {tasks3.tasks3.map(task => (
          <Task
            key={tasks3.tasks3.indexOf(task)}
            titleTask={task.titleTask}
            describeTask={task.describeTask}
            startDate={task.startDate}
            // click={delateButton.bind(this)}
            index={tasks3.tasks3.indexOf(task)}
            style={delateButton()}
          />
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, {})(CheckTasks);
