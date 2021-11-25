// you can pass more arguments into a function than it expects

// you can use arguments.length to check how many arguments are actually passed to the function

function myConcat(separator) {
	var result = ""; // initialize list
	var i;
	// iterate through arguments
	for (i = 1; i < arguments.length; i++) {
		result += arguments[i] + separator;
	}
	return result;
}

// these function calls have more arguments than the function specified

// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

// prints these previous results
console.log(myConcat(", ", "red", "orange", "blue"));
console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));

// default parameters example
function multiply(a, b = 1) {
	return a * b;
}

//prints
console.log(multiply(5));
console.log(multiply(5, 2));

// the rest operator puts the rest of the arguments into an array
function multiply(multiplier, ...theArgs) {
	return theArgs.map((x) => multiplier * x);
}

var args = [2, 4, 10, 16];
console.log(multiply(10, ...args));

// in an arrow function, the this is bound to the upper scope
// for example:
function Person() {
	this.age = 0;

	setInterval(() => {
		this.age++;
	}, 1000);
}

var p = new Person();

// top level build in functions

//eval()
//eval is used to evaluate string as if they were javascript code

// ...
