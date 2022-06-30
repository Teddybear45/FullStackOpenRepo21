import React from "react";

const Filter = ({newSearch, setNewSearch}) => {
	const handleSearchChange = (event) => {
		setNewSearch(event.target.value);
	};
	return (
		<div>
			filter shown by name:{" "}
			<input onChange={handleSearchChange} value={newSearch} />
		</div>
	);
};

export default Filter;
