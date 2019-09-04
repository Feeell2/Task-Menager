import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink exact to="/">
          Strona startowa
        </NavLink>
      </li>
      <li className="nav__Menu__Hamburger__Link">
        <NavLink to="/addProject">Dodaj projekt</NavLink>
      </li>
      <li className="nav__Menu__Hamburger__Link">
        <NavLink to="/manageTasks">Zarządzaj zadaniami</NavLink>
      </li>
      <li className="nav__Menu__Hamburger__Link">
        <NavLink to="/checkTasks">Sprawdź zadania</NavLink>
      </li>
    </ul>
  );
};

export default MenuItems;
