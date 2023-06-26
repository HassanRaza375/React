import React from "react";

const person = (props) => {
  const { Name, Age } = props.Details;
  return (
    <div>
      <h3 onClick={props.click}>
        person age is {Math.floor(Math.random() * Age)} and Name is {Name}
      </h3>
      <input type="text" onChange={props.changed} value={Name} />
    </div>
  );
};

export default person;
