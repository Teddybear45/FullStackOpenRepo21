import React from "react";

// Header component
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

// Content component
const Content = (props) => {
  return (
    <>
      <Parts part={props.parts[0]} />
      <Parts part={props.parts[1]} />
      <Parts part={props.parts[2]} />
    </>
  );
};

// Parts component for Content component
const Parts = (props) => {
  return (
    <p>
      {props.part.name} + {props.part.exercises}
    </p>
  );
};

// Total number of exercises component
const Total = (props) => {
  return (
    <>
      <p>
        Total of{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}{" "}
        exercises
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
