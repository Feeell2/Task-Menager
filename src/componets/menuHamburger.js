import React from "react";
import MenuItems from "./MenuItems";
const MenuHamburger = props => {
  return (
    <nav className="nav">
      <div className="nav__Menu">
        <i
          className="nav__Menu__Hamburger fas fa-bars"
          onClick={props.click}
        ></i>
      </div>
      <MenuItems handleMenu={props.handleMenu} />
    </nav>
  );
};

export default MenuHamburger;
