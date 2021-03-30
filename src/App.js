import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <NavMobile />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Project} path="/project" />
        <Route component={About} path="/about" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
