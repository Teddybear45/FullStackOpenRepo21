const people = [
	"Chris",
	"Anne",
	"Colin",
	"Terri",
	"Phil",
	"Lola",
	"Sam",
	"Kay",
	"Bruce",
];
const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";

//tertiary for loop
for (let i = 0; i < people.length; i++) {
	if (people[i] === "Phil" || people[i] === "Lola") {
		refused.textContent += "Refused " + people[i] + ", ";
	} else {
		admitted.textContent += "Admitted " + people[i] + ", ";
	}
}

// for each w/ helper func
const personConcat = (personName, isAdmitted) => {
	return (isAdmitted ? "Admitted" : "Refused") + " " + personName + ", ";
};
people.forEach((person) => {
	person === "Phil" || person === "Lola"
		? (refused.textContent += personConcat(person, false))
		: (admitted.textContent += personConcat(person, true));
});
