import axios from "axios";
const baseUrl = "/api/persons";

const getPeople = () => {
	return axios.get(baseUrl).then((res) => res.data);
};

const addPerson = (person) => {
	const promise = axios.post(baseUrl, person);
	return promise.then((res) => res.data);
};

const updatePerson = (id, changedPerson) => {
	const promise = axios.put(`${baseUrl}/${id}`, changedPerson);
	return promise.then((res) => res.data);
};

const deletePerson = (id) => {
	const promise = axios.delete(`${baseUrl}/${id}`);
	return promise;
};

export default { getPeople, addPerson, deletePerson, updatePerson };
