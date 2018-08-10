import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import Login from "./views/Login"
import Concerts from "./views/Concerts";
import Plans from "./views/Plans";
import User from "./views/User";
import BottomBar from "./components/BottomBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/concerts" component={Concerts} />
        <Route exact path="/plans" component={Plans} />
        <Route exact path="/user" component={User} />
        <BottomBar />
      </div>
    );
  }
}

export default App
