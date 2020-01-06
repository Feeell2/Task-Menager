import React, { Component } from "react";
import "../scss/App.scss";
import MenuHamburger from "./menuHamburger";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
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
