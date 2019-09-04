import React, { Component } from "react";
import "../scss/App.scss";
import MenuHamburger from "./menuHamburger";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddProject from "../page/AddProject";
import CheckTasks from "../page/CheckTasks";
import ManageTasks from "../page/ManageTasks";
import HomePage from "../page/HomePage";
import ErrorPage from "../page/ErrorPage";

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
    } else {
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
          </header>
          <main className="Main-page">
            <MenuHamburger
              click={this.handleMenuHamburger}
              stateMenu={this.state.stateHamburger}
              handleMenu={this.state.handleMenu}
            />
            <section>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/addProject" component={AddProject} />
                <Route path="/checkTasks" component={CheckTasks} />
                <Route path="/manageTasks" component={ManageTasks} />
                <Route component={ErrorPage} />
              </Switch>
            </section>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
