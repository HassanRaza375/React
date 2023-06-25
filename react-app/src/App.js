import React, { Component } from "react";
import Person from "./Components/person";
import "./App.css";

class App extends Component {
  state = {
    Persons: [
      { Name: "Hassan", Age: 12 },
      { Name: "Ali", Age: 43 },
    ],
  };
  render() {
    return (
      <div>
        <h1 align="center">ReactApp</h1>
        <button>change</button>
        <h2 align="center">
          <Person Details={{ Name: "Hassan", Age: 12 }} />
        </h2>
      </div>
    );
  }
}

export default App;
