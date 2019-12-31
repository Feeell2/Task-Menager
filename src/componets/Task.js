import React from "react";

const Task = props => {
  return (
    <li className="Task">
      <h3 className="Task_title">{props.titleTask}</h3>
      <p className="Task_description">{props.describeTask}</p>
      <p className="Task_time">{props.date} </p>
      <button className="Task_button">Zrobione</button>
    </li>
  );
};

export default Task;
