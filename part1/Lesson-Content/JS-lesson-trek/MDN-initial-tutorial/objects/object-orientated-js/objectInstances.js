//constructor functions. convention capital letter like a Java clss
function Person(name) {
	this.name = name;
	this.greeting = function () {
		console.log("Hello, this is " + this.name);
	};
}

const person1 = new Person("John");
person1.greeting();

// other ways to create object instances 

//Object() constructor
const person2 = new Object();
person2.name = "Oliver"
console.log(person2.name);
// also able to pass constructor into Object() parameter
let person3 = new Object({
  name: "Chris"
})
console.log(person3.name);

//create() method which takes the parameter as a prototype, like inheriting
let person4 = Object.create(person1);
console.log(person4.name);