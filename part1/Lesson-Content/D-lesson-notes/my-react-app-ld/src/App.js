import "./App.css";
import React, { useState } from "react";

//rendering of histroy is handled by a new component
const History = (props) => {
	// conditional rendering
	if (props.allClicks.length === 0) {
		return <div>The app is used by pressing the buttons.</div>;
	} else {
		return <div>Button press history: {props.allClicks.join(" ")}</div>;
	}
};

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const App = () => {
	//can set useState value to be an object with properties
	const [clicks, setClicks] = useState({
		left: 0,
		right: 0,
	});
	// piece of state that remembers every click
	const [allClicks, setAll] = useState([]);

	const handleLeftClick = () => {
		//use concat because it creates a new array and merges it with the old one
		// react forbids you from mutating state directly
		// using .push would directly mutate the array
		setAll(allClicks.concat("L"));
		const newClicks = {
			...clicks,
			left: clicks.left + 1,
		};
		setClicks(newClicks);
	};
	const handleRightClick = () => {
		setAll(allClicks.concat("R"));
		const newClicks = {
			...clicks,
			right: clicks.right + 1,
		};
		setClicks(newClicks);
	};

	const [value, setValue] = useState(10);

	//another way to define an event handler is to use a function that returns a function
	// const hello = (PARAMETER) => () => {
	//                              ^^^
	//															| that's the function that is returned. this function can use the parameter value
	const hello = (who) => () => {
		console.log("Hello", who);
	};

	const setToValue = (newValue) => {
		setValue(newValue);
	};

	return (
		<div>
			{clicks.left}
			<Button handleClick={handleLeftClick} text="left" />
			<Button handleClick={handleRightClick} text="right" />
			{clicks.right}
			<History allClicks={allClicks} />
			{/* using a function which returns the event handler allows us to pass inarguments */}
			<button onClick={hello("first person")}>button</button>
			<button onClick={hello("second person")}>button</button>
			<button onClick={hello("third person")}>button</button>
			<br></br>
			{value}

			<Button handleClick={() => setToValue(value + 1)} text="increment" />
			<Button handleClick={() => setToValue(value - 1)} text="decrement" />
			<Button handleClick={() => setToValue(0)} text="reset" />
			<Button handleClick={() => setToValue(1000)} text="set to thousand" />
		</div>
	);

	//rules of hooks
	// 1. you can only use hooks inside a function component
	// 2. you can't call useState and useEffect inside of a loop, conditional rendering, or nested functions
	// 3. it can only be called from the inside of a function body that defines a React component

	//examples of illegal use of hooks
	// if ( age > 10 ) {
	//   // this does not work!
	//   const [foobar, setFoobar] = useState(null)
	// }

	// for ( let i = 0; i < age; i++ ) {
	//   // also this is not good
	//   const [rightWay, setRightWay] = useState(false)
	// }

	// const notGood = () => {
	//   // and this is also illegal
	//   const [x, setX] = useState(-1000)
	// }
};

export default App;
