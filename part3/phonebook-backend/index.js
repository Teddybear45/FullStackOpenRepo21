const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());

// for exercise: only logs if the request is POST
app.use(
	morgan(function (tokens, req, res) {
		const requestType = tokens.method(req, res);
		if (requestType === "POST") {
			return [
				tokens.method(req, res),
				tokens.url(req, res),
				tokens.status(req, res),
				tokens.res(req, res, "content-length"),
				"-",
				tokens["response-time"](req, res),
				"ms",
			].join(" ").concat(JSON.stringify(req.body));
		}
	})
);

let persons = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

app.get("/api/persons", (request, response) => {
	response.json(persons);
});

app.get("/info", (request, response) => {
	const amtPeople = persons.length;
	response.send(
		`<p>Phonebook has info for ${amtPeople} people </p> <br/> ${new Date()}`
	);
});

app.get("/api/persons/:id", (request, response) => {
	const id = request.params.id;
	const person = persons.find((p) => p.id === Number(id));
	if (person) {
		response.json(person);
	} else {
		response.status(404).end();
	}
});

app.delete("/api/persons/:id", (request, response) => {
	const id = Number(request.params.id);
	persons = persons.filter((p) => p.id !== id);

	response.status(204).end();
});

const generateId = () => {
	return Math.round(Math.random() * 9_999_999_999);
};

app.post("/api/persons", (request, response) => {
	const body = request.body;

	if (!body.name || !body.number) {
		return response.status(400).json({
			error: "name or number missing",
		});
	}

	if (persons.find((p) => p.name === body.name)) {
		return response.status(400).json({
			error: "name must be unique",
		});
	}

	const person = {
		name: body.name,
		number: body.number,
		id: generateId(),
		date: new Date(),
	};

	persons = persons.concat(person);
	response.json(person);
});

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
