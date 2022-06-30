import React from "react";

const PersonForm = ({
  persons,
	setPersons,
	newName,
	setNewName,
	newPhone,
	setNewPhone,
}) => {
	const handleNewNameChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNewPhoneChange = (event) => {
		setNewPhone(event.target.value);
	};

	const handleSubmitNewPerson = (event) => {
		event.preventDefault();

		if (persons.map((person) => person.name).includes(newName)) {
			alert(`${newName} is already added to the phonebook`);
		}
		// Only add new if passes the not duplicate name check
		else {
			const newPersonObject = {
				id: persons.length + 1,
				name: newName,
				phone: newPhone,
			};
			setPersons(persons.concat(newPersonObject));
			setNewName("");
			setNewPhone("");
		}
	};
	return (
		<form onSubmit={handleSubmitNewPerson}>
			<div>
				name: <input value={newName} onChange={handleNewNameChange} />
			</div>
			<div>
				phone: <input value={newPhone} onChange={handleNewPhoneChange} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
