//method to replace all str1 in og string with str2
let myText = "I'm a string";
let newString = myText.replace("string", "sausage");
console.log(newString);

//method to turn array into string
let myArray = ["I", "love", "chocolate", "frogs"];
let madeAString = myArray.join(" + ");
console.log(madeAString);

//rand num
let myNumber = Math.random();
console.log(myNumber);

//tests NaN
let testerSequence = "this is a cool number 1234";
console.log(parseFloat(testerSequence)); //trying to parse the string returns NaN
if (isNaN(testerSequence)) {
	console.log("not a number");
}
