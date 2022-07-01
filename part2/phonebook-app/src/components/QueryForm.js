import React from "react";

const QueryForm = ({ newCountryQuery, handleNewCountryChangeQuery }) => {

	return (
		<div>
			find countries:
			<input onChange={handleNewCountryChangeQuery} value={newCountryQuery} />
		</div>
	);
};

export default QueryForm;
