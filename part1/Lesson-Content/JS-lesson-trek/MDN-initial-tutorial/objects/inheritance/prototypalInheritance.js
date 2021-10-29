// prototype chains

// initial constructor function which is a prototype
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;

};

// all methods are defined on the constructor's prototype 
Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

// new Teacher constructor with a new subject parameter
function Teacher(first, last, age, gender, interests, subject) {
  // call() passes in this first and allows it to call in this context
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

//able to inherit from a consturctor without parameters
function Brick() {
  this.width = 10;
  this.height = 20;
}

//just passes in this without other parameters so it'll only inherit width and height
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}

// problem: 
/* greeting method isn't inherited by teacher from Person because
the Person constructor doesn't contain the methods in its prototype property 
*/

console.log(Person.prototype.greeting)
console.log(Teacher.prototype.greeting) //teacher's prototype (template) didn't inherit Person's method


//we need to get Teacher to inherit the method defined in the Person()'s prototype
Teacher.prototype = Object.create(Person.prototype); // this is another problem where the consturctor property of Teacher.prototype is now equal to Person()

//fixed through defining property of the Teacher prototype with constructor
Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
  enumerable: false, //makes it not iterable
  writable: true,
});


console.log(Teacher.prototype.constructor);

//adding a function to the Teacher() constructor
Teacher.prototype.greeting = function() {
  console.log("greeting from Teacher")
  console.log(this.name.first)
}

const t1 = new Teacher("josh", "last", 33, "male", "math")
t1.greeting()

//other languages of js can use things like class and extends (like java)

//notes
// static methods are commonly available on built-in browser objects and are chanined to a constructor 

//creating with constructor's protoype inherits all properties defined in the prototype
const personJohnDoe = Person("josh2", "last2", 332, "male2");
console.log(Person.prototype)

// can't run this because the method defined in the proto uses this. and below is run through the global scope

// console.log(Person.prototype.greeting())


