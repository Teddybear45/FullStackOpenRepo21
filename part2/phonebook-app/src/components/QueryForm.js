import React from "react";

const QueryForm = ({
	newCountryQuery,
	setNewCountryQuery,
	countries,
	setCountriesToShow,
}) => {
	const handleNewCountryChangeQuery = (event) => {
		setNewCountryQuery(event.target.value);

		setCountriesToShow(
			countries.filter((country) =>
				country.name.common.toLowerCase().includes(newCountryQuery)
			)
		);
		console.log(
			countries.filter((country) =>
				country.name.common.toLowerCase().includes(newCountryQuery)
			)
		);
	};
	return (
		<div>
			find countries:
			<input onChange={handleNewCountryChangeQuery} value={newCountryQuery} />
		</div>
	);
};

export default QueryForm;
