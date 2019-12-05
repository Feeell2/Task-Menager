import React from "react";
import { NavLink } from "react-router-dom";


const MenuItems = props => {
  return (
    <nav className={props.handleMenu}>
      <ul className="nav__Menu">
        <li className="nav__Menu__Link">
          <NavLink exact to="/">
            Strona startowa
          </NavLink>
        </li>
        <li className="nav__Menu__Link">
          <NavLink to="/addProject">Dodaj projekt</NavLink>
        </li>
        <li className="nav__Menu__Link">
          <NavLink to="/manageTasks">Zarządzaj zadaniami</NavLink>
        </li>
        <li className="nav__Menu__Link">
          <NavLink to="/checkTasks">Sprawdź zadania</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItems;
