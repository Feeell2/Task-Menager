import React from "react";
import { connect } from "react-redux";
import { toggleNav } from "../duck/action";

const MenuHamburger = ({ toggleNav, toggleOpen }) => {
  return (
    <div className="header__Hamburger" onClick={() => toggleNav()}>
      {/* <i className="fas fa-bars"></i> */}
      {toggleOpen.toggleOpen ? (
        <i className="fas fa-times"></i>
      ) : (
        <i className="fas fa-bars"></i>
      )}
    </div>
    // <MenuItems handleMenu={props.handleMenu} />
  );
};
const mapStateToProps = state => ({
  toggleOpen: state.toggleOpen
});

const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(toggleNav())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuHamburger);
