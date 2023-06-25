import React from "react";

const person = (props) => {
  const { Name, Age } = props.Details;
  debugger;
  return (
    <div>
      person age is {Math.floor(Math.random() * Age)} and Name is {Name}
      {props.name}
    </div>
  );
};

export default person;
