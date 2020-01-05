import React, { Component } from "react";
import "../scss/App.scss";
import MenuHamburger from "./menuHamburger";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.hamburgerMenu = document.querySelector(".nav__Menu__Hamburger__Link");
  }
  state = { stateHamburger: false, handleMenu: "" };
  handleCloseMenu = () => {
    console.log("click");
    this.setState({
      stateHamburger: false,
      handleMenu: "hideMenu"
    });
  };
  handleMenuHamburger = () => {
    if (this.state.stateHamburger === false) {
      this.setState({
        stateHamburger: true,
        handleMenu: "showMenu"
      });
    } else if (this.state.stateHamburger === true) {
      this.setState({
        stateHamburger: false,
        handleMenu: "hideMenu"
      });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="header">
            <h1 className="header__logo">Task Manager</h1>
            <MenuHamburger />
          </header>
          <main className="Main-page">
            <MainPage />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
