import "./App.css";
import React, { useState } from "react";

// Part 1:
// const Hello = ({name, age}) => {
// 	//destructuring props
//   // const { name, age } = props;

//   const bornYear = () => {
// 		return new Date().getFullYear() - age;
// 	};

// 	return (
// 		<div>
// 			<p>
// 				Hello {name}, you are {age} years old
// 			</p>
//       <p>So you were probably born in {bornYear()}</p>
// 		</div>
// 	);
// };

// const App = () => {
// 	const name = "Peter";
// 	const age = 10;

// 	return (
// 		<div>
// 			<h1>Greetings</h1>
// 			<Hello name="Maya" age={26 + 10} />
// 			<Hello name={name} age={age} />
// 		</div>
// 	);
// };

//part 2: using reactDOM.render()
// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// part 3: using stateful components

const App = (props) => {
	const [counter, setCounter] = useState(0); // takes in 0 as the initial value of counter
	// useState returns an array with two elements: the current state and a function to update it
	// we assign the first element of the array to a variable called counter and the second to a function called setCounter
	// the function setCounter takes in a value and updates the state

	//when the state modifying function setCounter is called, React re-renders the component, in this case the component counter

	//part 3a: using a timeout function
	// setTimeout(() => {
	// 	setCounter(counter + 1);
	// }, 1000);

	// return <div>the current count is: {counter}</div>;

	// part 3b: using a button to increment the counter

	const incrementCounter = () => {
		setCounter(counter + 1);
	};
	const decrementCounter = () => {
		setCounter(counter - 1);
	};
	const resetCounter = () => {
		setCounter(0);
	};
	// return (
	// 	<div>
	// 		<div>{counter}</div>
	// 		<button onClick={incrementCounter}>Add Counter</button>
	// 		<button onClick={decrementCounter}>Subtract Counter</button>
	// 		<button onClick={resetCounter}>Reset Counter</button>
	// 	</div>
	// );

	//part 4: using many child components
	const Display = ({counter}) => {
		return <div>{counter}</div>;
	};

	const Button = ({onClick, text}) => {
		return <button onClick={onClick}>{text}</button>;
	};

	return (
		<div>
			<Display counter={counter} />
			<Button onClick={incrementCounter} text="Add Counter" />
			<Button onClick={decrementCounter} text="Subtract Counter" />
			<Button onClick={resetCounter} text="Reset Counter" />
		</div>
	);
};

export default App;
