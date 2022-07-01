import React from "react";
import CountryInfo from "./CountryInfo";



const CountriesDisplay = ({ countriesToShow, setCountriesToShow }) => {
	const handleView = (event) => {
		console.log(event.target.value);

		const singleOut = countriesToShow.filter(
			(country) => country.name.common === event.target.value
		);
		console.log(singleOut);
		setCountriesToShow(singleOut);
	};

	if (Object.keys(countriesToShow).length === 1) {
		return <CountryInfo country={countriesToShow[0]} />;
	} else if (
		Object.keys(countriesToShow).length < 10 &&
		Object.keys(countriesToShow).length != 0
	) {
		return (
			<ul>
				{countriesToShow.map((country) => (
					<li>
						<p>{country.name.common}</p>
						<button onClick={handleView} value={country.name.common}>
							view
						</button>
					</li>
				))}
			</ul>
		);
	} else if (Object.keys(countriesToShow).length === 0) {
		return <div></div>;
	} else {
		return <p>Too many matches, specify another filter</p>;
	}
};

export default CountriesDisplay;
