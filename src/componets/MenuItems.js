import React from "react";
import { Link } from "react-router-dom";

const MenuItems = props => {
  // const handleMenu = props => {
  //   if (props === null) return;
  //   if (props) {
  //     return "showMenu";
  //   } else {
  //     return "hideMenu";
  //   }
  // };

  // return <ul style={props.stateMenu ? null : style}>{MenuList}</ul>;
  return (
    <ul className={props.handleMenu}>
      <li className="nav__Menu__Hamburger__Link">
        <Link to="/addProject">Dodaj projekt</Link>
      </li>
      <li className="nav__Menu__Hamburger__Link">
        <Link to="/manageTasks">Zarządzaj zadaniami</Link>
      </li>
      <li className="nav__Menu__Hamburger__Link">
        <Link to="/checkTasks">Sprawdź zadania</Link>
      </li>
    </ul>
  );
};

export default MenuItems;
