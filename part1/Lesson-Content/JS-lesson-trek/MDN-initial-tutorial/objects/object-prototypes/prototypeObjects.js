// javascript described as a prototype based language
// for inheritance, objects can have a prototype object which acts as a template

//prototype object can also have a prototype known as a prototype chain

function Person(first, last, age, gender, interests) {
	// property and method definitions
	this.name = {
		first: first,
		last: last,
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.bio = function () {
		console.log("this is the bio: " + this.name + "\n" + this.age + "\n...");
	};
}

//some methods are inherited, some aren't. inherited ones are defined on the prototype property
//person1 inherits from proto Person inherits from proto object which allow person1 to access methods like valueOf()
let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);

//create()
let person2 = Object.create(person1);
console.log(person2.__proto__);
console.log(person2.constructor);

//modifying protos

//have to add prototype. adding a function to a constructor method
// not best practice since the constuctor functions aren't all in one place: the constuctor
Person.prototype.farewell = function () {
	console.log(this.name.first + " has left the building. Bye for now!");
};

person1.farewell();
person2.name.first = "Josh";
person2.farewell();


