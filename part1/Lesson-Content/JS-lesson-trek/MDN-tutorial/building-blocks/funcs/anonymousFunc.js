const myButton = document.querySelector("button");

// anonymous function without a name
myButton.onclick = function () {
	alert("hello");
};

//also works with arrow funcs
myButton.onclick = () => {
	alert("hello arrow");
};

// first.js

// let name = "Chris";
// function greeting() {
// 	alert("Hello " + name + ": welcome to our company.");
// }

// second.js

// let name = "Zaptec";
// function greeting() {
// 	alert("Our company is called " + name + ".");
// }

//if both scripts are put into an html file, only first.js greeting function would work
// declaring name again in the second.js file would cause an error

//use functions and not having variables in this global is best practice
