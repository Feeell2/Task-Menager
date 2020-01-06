import React from "react";
import { Route, Switch } from "react-router-dom";
import MenuItems from "./MenuItems";
import AddProject from "../page/AddProject";
import CheckTasks from "../page/CheckTasks";
import ManageTasks from "../page/ManageTasks";
import HomePage from "../page/HomePage";
import ErrorPage from "../page/ErrorPage";

const MainPage = () => {
  return (
    <>
      <MenuItems />
      <section className="main-page__section">
        <Switch>
          <Route path="/" exact component={HomePage} className="greeting" />
          <Route path="/addProject" component={AddProject} />
          <Route path="/checkTasks" component={CheckTasks} />
          <Route path="/manageTasks" component={ManageTasks} />
          <Route component={ErrorPage} />
        </Switch>
      </section>
    </>
  );
};

export default MainPage;
