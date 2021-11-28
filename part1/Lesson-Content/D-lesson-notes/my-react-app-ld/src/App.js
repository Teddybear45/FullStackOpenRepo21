import "./App.css";
import React, { useState } from "react";


//rendering of histroy is handled by a new component





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
	return (
		<div>
			{clicks.left}
			<button onClick={handleLeftClick}>Left</button>
			<button onClick={handleRightClick}>Right</button>
			{clicks.right}
      <p>History: {allClicks.join(" ")}</p>
		</div>
	);
};

export default App;
