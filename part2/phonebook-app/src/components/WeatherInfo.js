import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const api_key = process.env.REACT_APP_API_KEY;

const WeatherInfo = ({ country }) => {
	const [temperature, setTemperature] = useState(NaN);
	const [lat, lon] = country.capitalInfo.latlng;

	useEffect(() => {
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
			)
			.then((res) => {
				console.log(res);
				const f_temp = (res.data.main.feels_like - 273.15) * (9 / 5) + 32;
				setTemperature((Math.round(f_temp * 100) / 100).toFixed(2));
			});
	}, []);

	return <div>Temperature (F): {temperature}</div>;
};

export default WeatherInfo;
