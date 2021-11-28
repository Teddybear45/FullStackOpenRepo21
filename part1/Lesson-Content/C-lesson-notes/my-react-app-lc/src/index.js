import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Part 1
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// Part 2: using reactDOM.render()
// let counter = 1;

// ReactDOM.render(<App counter={counter} />, document.getElementById("root"));

// const refresh = () => {
// 	ReactDOM.render(<App counter={counter} />, document.getElementById("root"));
// };

// setInterval(() => {
// 	refresh();
// 	counter += 1;
// }, 1000);

//using reactDOM.render isn't a great way to re-render components

//Part 3: Using states

ReactDOM.render(<App />, 
  document.getElementById('root'))


