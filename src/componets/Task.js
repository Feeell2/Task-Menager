import React from "react";

const Task = () => {
  return (
    <li className="Task">
      <h3 className="Task_title">tytuł</h3>
      <p className="Task_description">
        opis zadaniea do zrobienia który jest ograniczony czasemmmm ii potem
        bedzie zatwierdzony przez teamleadera wiec działąj zeby było okkk
      </p>
      <p className="Task_time">Termin zakończenia </p>
      <button className="Task_button">Zrobione</button>
    </li>
  );
};

export default Task;
