import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";
import peopleService from "./services/people";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newSearch, setNewSearch] = useState("");
	const [notificationMessage, setNotificationMessage] = useState(null);
	const [notifyError, setNotifyError] = useState(false);

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
		// Change person's phone number cause alr exist
		if (existingPerson) {
			if (
				window.confirm(
					`${newName} is already added to the phonebook, replace the old number with a new one?`
				)
			) {
				const changedPerson = {
					...existingPerson,
					number: newPhone,
				};
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
						setNotificationMessage(
							`Updated ${responseChangedPerson.name}'s phone number`
						);
						setTimeout(() => {
							setNotificationMessage(null);
						}, 5000);
					})
					.catch((err) => {
						setNotificationMessage(
							`Information of ${changedPerson.name} has already been removed from the server`
						);
						setNotifyError(true);
						// correct displayed info
						peopleService
							.getPeople()
							.then((allPeople) => setPersons(allPeople));

						setTimeout(() => {
							setNotificationMessage(null);
							setNotifyError(false);
						}, 5000);
					});
			}
		} else {
			const newPersonObject = {
				name: newName,
				number: newPhone,
			};

			peopleService.addPerson(newPersonObject).then((addedPerson) => {
				setPersons(persons.concat(addedPerson));
				setNewName("");
				setNewPhone("");
				setNotificationMessage(`Added ${addedPerson.name}`);
				setTimeout(() => {
					setNotificationMessage(null);
				}, 5000);
			});
		}
	};

	const handlePersonDelete = (id) => {
		if (
			window.confirm(
				`Delete ${persons.find((person) => person.id === id).name}?`
			)
		) {
			peopleService.deletePerson(id).then(() => {
				setPersons(persons.filter((p) => p.id !== id));
				setNotificationMessage(
					`Deleted ${persons.find((p) => p.id === id).name}`
				);
				setTimeout(() => {
					setNotificationMessage(null);
				}, 5000);
			});
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={notificationMessage} error={notifyError} />

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
