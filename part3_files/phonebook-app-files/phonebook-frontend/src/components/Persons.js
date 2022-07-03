import React from "react";
import Person from "./Person";
const Persons = ({ persons, newSearch, deleteHandle }) => {
	const personsToShow = persons.filter((person) =>
		person.name.toLowerCase().includes(newSearch.toLowerCase())
	);

	
	return (
		<ul>
			{personsToShow.map((person) => (
				<Person
					deleteHandle={() => deleteHandle(person.id)}
					key={person.id}
					name={person.name}
					phone={person.number}
				/>
			))}
		</ul>
	);
};

export default Persons;
