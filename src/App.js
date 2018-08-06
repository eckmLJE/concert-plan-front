import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import Concerts from "./views/Concerts";
import Plans from "./views/Plans";
import Account from "./views/Account";
import BottomBar from "./components/BottomBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/concerts" component={Concerts} />
        <Route path="/plans" component={Plans} />
        <Route path="/account" component={Account} />
        <BottomBar />
      </div>
    );
  }
}

export default App;
