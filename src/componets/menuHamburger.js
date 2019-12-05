import React from "react";

const MenuHamburger = props => {
  return (
    <div className="header__Hamburger" onClick={props.click}>
      {/* <i className="fas fa-bars"></i> */}
      {props.stateMenu ? (
        <i class="fas fa-times"></i>
      ) : (
        <i class="fas fa-bars"></i>
      )}
    </div>
    // <MenuItems handleMenu={props.handleMenu} />
  );
};

export default MenuHamburger;
