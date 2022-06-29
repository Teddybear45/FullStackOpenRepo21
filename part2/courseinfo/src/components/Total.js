import React from "react";

export const Total = ({ exercises }) => {
	const total = exercises.reduce((s, p) => s + p);

	return <div>total of {total} exercises</div>;
};
