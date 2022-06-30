import React from "react";

const CountryInfo = ({ country }) => {
	return (
		<div>
			<h1>{country.name.common}</h1>
			<p>capital: {country.capital}</p>
			<p>area: {country.area}</p>

			<h2>Languages</h2>
			<ul>
				{Object.keys(country.languages).map((langKey, i) => (
					<li key={i}>{country.languages[langKey]}</li>
				))}
			</ul>
			<hr></hr>
			<img src={country.flags.png} />
		</div>
	);
};

export default CountryInfo;
