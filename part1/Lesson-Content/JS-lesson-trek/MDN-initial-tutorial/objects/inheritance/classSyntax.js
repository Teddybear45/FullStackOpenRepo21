//rewrite Person with class style
class Person {
	constructor(first, last, age, gender, interests) {
		this.name = {
			first,
			last,
		};
		this.age = age;
		this.gender = gender;
		this.interests = interests;
	}

	greeting() {
		console.log(`Hi! I'm ${this.name.first}`);
	}

	farewell() {
		console.log(`${this.name.first} has left the building. Bye for now!`);
	}
}

let han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
han.greeting();

//extends to inherit
class Teacher extends Person {
	constructor(first, last, age, gender, interests, subject, grade) {
		super(first, last, age, gender, interests);

		// subject and grade are specific to Teacher
		this._subject = subject; //subject has an _ REQUIRED for this kind of property
		this.grade = grade;
	}

	//IMPORTANT
	//getters and setter methods

	get subject() {
		return this._subject;
	}

	set subject(newSubject) {
		this._subject = newSubject;
	}
}

let snape = new Teacher(
	"Severus",
	"Snape",
	58,
	"male",
	["Potions"],
	"Dark arts",
	5
);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age; // 58
snape.subject; // Dark arts

console.log(snape.subject);

snape.subject = "Balloon Animals"; // setter to set subject

console.log(snape.subject);

