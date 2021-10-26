import React from "react";

// Header component
const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

// Content component
const Content = (props) => {
  console.log(props);
  console.log(props.part1.name);
  return (
    <>
      <Parts part={props.part1.name} exercises={props.part1.exercises} />
      <Parts part={props.part2.name} exercises={props.part2.exercises} />
      <Parts part={props.part1.name} exercises={props.part2.exercises} />
    </>
  );
};

// Parts component for Content component
const Parts = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} + {props.exercises}
    </p>
  );
};

// Total number of exercises component
const Total = (props) => {
  return (
    <>
      <p>
        Total of{" "}
        {props.part1.exercises + props.part2.exercises + props.part3.exercises}{" "}
        exercises
      </p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";

  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };

  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  );
};

export default App;
