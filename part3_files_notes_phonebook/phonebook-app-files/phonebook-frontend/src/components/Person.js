import React from "react";

const Person = ({ name, phone, deleteHandle }) => (
	<li>
		{`${name}: ${phone}`}{" "}
		<button onClick={deleteHandle}>delete</button>
	</li>
);

export default Person;
