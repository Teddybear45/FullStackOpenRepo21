// methods can be assigned to an object by defining properties
const arto = {
  name: "Arto Hellas",
  age: 35,
  greet: function () {
    console.log("Hello, my name is " + this.name); // here this refers to the object itself
  },
  printAddition: function (a, b) {
    console.log(a + b);
  },
};

arto.greet();

// can assign methods ot objects even after they have been defined
arto.growOlder = function () {
  this.age++;
};

arto.growOlder();

console.log(arto.age);

const referenceToPrintAddition = arto.printAddition; // first class function
referenceToPrintAddition(1, 2);


// when calling a method through a reference, the method loses the original object (this) 
// for example, this would work: 
arto.greet();
//while this reference would make the method print "Hello, my name is undefined"
// the reference loses access to the object
const referenceToGreet = arto.greet;
referenceToGreet();
// when calling the method through a reference, the value of this becomes a global object

//when setTimeout is calling the function, the JS engine actually calls the method and refers to the global object this
setTimeout(arto.greet, 1000);

//the originial this can be preserved using the method called bind
setTimeout(arto.greet.bind(arto), 1000);

// calling ...gret.bind(arto) creates a new function where this is bound to point to arto permanently at that time

//note: arrow functions make this not work

