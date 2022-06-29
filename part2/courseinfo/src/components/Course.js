import React, { Fragment } from "react";
import Content from "./Content";
import Header from "./Header";
import { Total } from "./Total";

const Course = ({ course }) => {
	return (
		<Fragment>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total exercises={course.parts.map((part) => part.exercises)} />
		</Fragment>
	);
};

export default Course;
