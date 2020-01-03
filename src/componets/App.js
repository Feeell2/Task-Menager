import React, { Component } from "react";
import "../scss/App.scss";
import MenuHamburger from "./menuHamburger";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.hamburgerMenu = document.querySelector(".nav__Menu__Hamburger__Link");
  }
  state = { stateHamburger: false, handleMenu: "" };

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
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="header">
            <h1 className="header__logo">Task Manager</h1>
            <MenuHamburger
              click={this.handleMenuHamburger}
              stateMenu={this.state.stateHamburger}
            />
          </header>
          <main className="Main-page">
            <MainPage
              click={this.handleMenuHamburger}
              handleMenu={this.state.handleMenu}
            />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
