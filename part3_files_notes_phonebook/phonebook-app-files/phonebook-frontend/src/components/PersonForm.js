import React from "react";

const PersonForm = ({
	handleSubmitNewPerson,
	newName,
	newPhone,
	handleNewNameChange,

	handleNewPhoneChange,
}) => {
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
