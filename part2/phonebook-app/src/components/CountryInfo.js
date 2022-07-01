import React from "react";
import WeatherInfo from "./WeatherInfo";

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
			<hr></hr>
			<h2>Weather in {country.capital[0]}</h2>
			<WeatherInfo country={country} />
		</div>
	);
};

export default CountryInfo;
