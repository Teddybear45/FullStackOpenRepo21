import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
};

const AverageStatisticLine = ({ good, bad, total }) => {
	return (
		<tr>
			<td>
				<p>average</p>
			</td>
			<td>
				<p> {(good - bad) / total}</p>
			</td>
		</tr>
	);
};

const PositiveStatisticLine = ({ good, total }) => {
	return (
		<tr>
			<td>
				<p>positive</p>
			</td>
			<td>
				<p>{(good / total) * 100}%</p>
			</td>
		</tr>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>
				<p>{text}</p>
			</td>
			<td>
				<p>{value}</p>
			</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const total = good + bad + neutral;
	if (!total) {
		return "No feedback given";
	}
	return (
		<table>
			<tbody>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />
				<StatisticLine text="all" value={total} />
				<AverageStatisticLine good={good} bad={bad} total={total} />
				<PositiveStatisticLine good={good} total={total} />
			</tbody>
		</table>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>Give feedback</h1>
			<Button
				handleClick={() => {
					setGood(good + 1);
				}}
				text="good"
			/>
			<Button
				handleClick={() => {
					setNeutral(neutral + 1);
				}}
				text="neutral"
			/>
			<Button
				handleClick={() => {
					setBad(bad + 1);
				}}
				text="bad"
			/>

			<h1>Statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
