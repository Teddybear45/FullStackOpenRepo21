//empty object
const person = {};
console.log(person);

//object with attributes containing nums, lists, and functions using this
const person = {
	name: ["Bob", "Smith"],
	age: 32,
	gender: "male",
	interests: ["music", "skiing"],
	bio: function () {
		alert(
			this.name[0] +
				" " +
				this.name[1] +
				" is " +
				this.age +
				" years old. He likes " +
				this.interests[0] +
				" and " +
				this.interests[1] +
				"."
		);
	},
	greeting: function () {
		alert("Hi! I'm " + this.name[0] + ".");
	},
};
// these objects are referred to as an OBJECT LITERAL
// object literal used often

// dot notation
// object name acts as namespace and thing after dot can have a subn-namepsace
// person.name.first

//bracket notation
// person['age']['name']['first']


//create and set new properties including funcs

