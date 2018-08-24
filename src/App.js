import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Workout from "./Components/Workout";
import Tabs from "./Components/Tabs";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs />
      </div>
    );
  }
}

export default App;
