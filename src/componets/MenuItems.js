import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNav } from "../duck/action";

const MenuItems = ({ toggleNav, toggleOpen }) => {
  return (
    <nav className={toggleOpen.toggleOpen ? "showMenu" : "hideMenu"}>
      <ul className="nav__Menu">
        <li className="nav__Menu__Link">
          <NavLink exact onClick={() => toggleNav()} to="/">
            Strona startowa
          </NavLink>
        </li>
        <li className="nav__Menu__Link">
          <NavLink onClick={() => toggleNav()} to="/addProject">
            Dodaj projekt
          </NavLink>
        </li>
        <li className="nav__Menu__Link">
          <NavLink onClick={() => toggleNav()} to="/manageTasks">
            Zarządzaj zadaniami
          </NavLink>
        </li>
        <li className="nav__Menu__Link">
          <NavLink onClick={() => toggleNav()} to="/checkTasks">
            Sprawdź zadania
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
const mapStateToProps = state => ({
  toggleOpen: state.toggleOpen
});

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav())
});
export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);
