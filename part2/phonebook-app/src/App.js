import { useState, useEffect } from "react";
import axios from "axios";
import CountriesDisplay from "./components/CountriesDisplay";
import QueryForm from "./components/QueryForm";
import WeatherInfo from "./components/WeatherInfo";

const App = () => {
	const [newCountryQuery, setNewCountryQuery] = useState("");
	const [countries, setCountries] = useState([]);
	const [countriesToShow, setCountriesToShow] = useState([]);

	useEffect(() => {
		axios.get("https://restcountries.com/v3.1/all").then((response) => {
			setCountries(response.data);
		});
	}, []);

	const handleNewCountryChangeQuery = (event) => {
		setNewCountryQuery(event.target.value);
		setCountriesToShow(
			countries.filter((country) =>
				country.name.common.toLowerCase().includes(event.target.value)
			)
		);
		// console.log(updatedCountries);
	};

	return (
		<div>
			<QueryForm
				newCountryQuery={newCountryQuery}
				handleNewCountryChangeQuery={handleNewCountryChangeQuery}
			/>

			<CountriesDisplay
				countriesToShow={countriesToShow}
				setCountriesToShow={setCountriesToShow}
			/>
		</div>
	);
};

export default App;
