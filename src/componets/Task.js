import React from "react";

const Task = props => {
  return (
    <li className="Task">
      <h3 className="Task_title">{props.titleTask}</h3>
      <p className="Task_description">{props.describeTask}</p>
      <p className="Task_time"> {props.startDate} </p>
      <button
        className="Task_button"
        onClick={props.click}
        index={props.index}
        style={props.style}
      >
        Zrobione
      </button>
    </li>
  );
};

export default Task;
