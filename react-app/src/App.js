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
  SwitchNameHandler = (name) => {
    this.setState({
      Persons: [
        { Name: name, Age: 23 },
        { Name: "Ali Raza", Age: 543 },
      ],
    });
  };
  nameChangeHandler = (event) => {
    this.setState({
      Persons: [
        { Name: event.target.value, Age: 23 },
        { Name: event.target.value, Age: 543 },
      ],
    });
  };
  render() {
    return (
      <div>
        <h1 align="center">ReactApp</h1>
        <div style={{ textAlign: "center" }}>
          <button onClick={() => this.SwitchNameHandler("Ali Haider")}>
            change
          </button>
        </div>
        {this.state.Persons.map((e, i) => {
          return (
            <h2 align="center" key={i}>
              <Person
                click={() => this.SwitchNameHandler("Ali Abbas")}
                Details={{
                  Name: e.Name,
                  Age: e.Age,
                }}
                changed={this.nameChangeHandler}
              />
            </h2>
          );
        })}
      </div>
    );
  }
}

export default App;
