import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1/all";

const getCountries = () => {
	const request = axios.get(baseUrl);
	return request.then((res) => res.data);
};

export default { getAllPeople };
