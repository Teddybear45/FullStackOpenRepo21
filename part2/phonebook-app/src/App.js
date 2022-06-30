import { useState } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", phone: "040-123456", id: 1 },
		{ name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", phone: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newSearch, setNewSearch] = useState("");

	const personsToShow = persons.filter((person) =>
		person.name.toLowerCase().includes(newSearch.toLowerCase())
	);

	return (
		<div>
			<h2>Phonebook</h2>

			<Filter newSearch={newSearch} setNewSearch={setNewSearch} />

			<h2>Add a new</h2>
			<PersonForm
        persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newPhone={newPhone}
        setNewPhone={setNewPhone}
			/>
			<h2>Numbers</h2>
      <Persons persons={persons} newSearch={newSearch}/>
		</div>
	);
};

export default App;
