import React from "react";
import Person from "./Person";
const Persons = ({persons, newSearch}) => {
	const personsToShow = persons.filter((person) =>
		person.name.toLowerCase().includes(newSearch.toLowerCase())
	);
	return (
		<ul>
			{personsToShow.map((person) => (
				<Person key={person.id} name={person.name} phone={person.phone} />
			))}
		</ul>
	);
};

export default Persons;
