import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import peopleService from "./services/people";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newSearch, setNewSearch] = useState("");

	useEffect(() => {
		peopleService.getPeople().then((allPeople) => setPersons(allPeople));
	}, []);

	const handleNewNameChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNewPhoneChange = (event) => {
		setNewPhone(event.target.value);
	};

	const handleSubmitNewPerson = (event) => {
		event.preventDefault();
		const existingPerson = persons.find((p) => p.name === newName);
		if (existingPerson) {
			if (
				window.confirm(
					`${newName} is already added to the phonebook, replace the old number with a new one?`
				)
			) {
				const changedPerson = {
					...existingPerson,
					phone: newPhone,
				};
				console.log(changedPerson);
				peopleService
					.updatePhone(existingPerson.id, changedPerson)
					.then((responseChangedPerson) => {
						setPersons(
							persons.map((p) =>
								p.id === responseChangedPerson.id ? responseChangedPerson : p
							)
						);
						setNewName("");
						setNewPhone("");
					});
			}
		} else {
			const newPersonObject = {
				name: newName,
				phone: newPhone,
			};

			peopleService.addPerson(newPersonObject).then((addedPerson) => {
				setPersons(persons.concat(addedPerson));
				setNewName("");
				setNewPhone("");
			});
		}
	};

	const handlePersonDelete = (id) => {
		console.log("deleting", id);

		if (
			window.confirm(
				`Delete ${persons.find((person) => person.id === id).name}?`
			)
		) {
			peopleService.deletePerson(id).then(() => {
				setPersons(persons.filter((p) => p.id !== id));
			});
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>

			<Filter newSearch={newSearch} setNewSearch={setNewSearch} />

			<h2>Add a new</h2>
			<PersonForm
				newName={newName}
				newPhone={newPhone}
				handleSubmitNewPerson={handleSubmitNewPerson}
				handleNewNameChange={handleNewNameChange}
				handleNewPhoneChange={handleNewPhoneChange}
			/>
			<h2>Numbers</h2>
			<Persons
				persons={persons}
				newSearch={newSearch}
				deleteHandle={handlePersonDelete}
			/>
		</div>
	);
};

export default App;
