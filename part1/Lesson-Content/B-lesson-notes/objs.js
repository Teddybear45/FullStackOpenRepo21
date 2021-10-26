// object literals w/ key value pairs`
const object1 = {
  name: "Arto Hello",
  age: 40,
  education: "PhD",
};

// object with nested properties
const object3nested = {
  name: "Nested Last",
  age: 17,
  education: {
    BS: "UW",
    MD: "Carnegie Mellon",
  },
  volunteerHours: 320,
  dept: "Surgery"
};

console.log(object3nested.age);
console.log(object3nested.education.BS); 

// when using square bracket notation, have to use quotes
console.log(object3nested["age"]);

//add properties through dot or bracket notation
object3nested.newPropertyFavColor = "blue";

console.log(object3nested.newPropertyFavColor);

//use brackets when key is string with whitespace and isn't allowed to be regular js var name
object3nested["secret number"] = 12341;

console.log(object3nested["secret number"]);
