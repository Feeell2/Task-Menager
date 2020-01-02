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
        entry={props.index}
        index={props.index}
      >
        Zrobione
      </button>
    </li>
  );
};

export default Task;
