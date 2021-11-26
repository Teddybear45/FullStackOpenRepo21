// map object. similar to dict in python or hashmap in java. KV pair.

//this is using the Map object
let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");

//map preserves insertion order
for (let [key, value] of sayings) {
	console.log(key + " goes " + value);
}

//this is using an Object of KV pairs
let objSayings = {
	dog: "woof",
	cat: "meow",
	elephant: "toot",
};

console.log(objSayings);
for (key in objSayings) {
	console.log(key + ": " + objSayings[key]);
}

//object vs map comparison
/* 
1. the keys for a Map object can be of any type
2. easily able to get the size of a Map
3. maps iteration is based on insertion of elements order 
*/

//set object
let mySet = new Set();
mySet.add("some text");
mySet.add("some text");
mySet.add(4);
mySet.add("foo");

console.log(mySet.has("some text"));

//sets allow for the deletion of items by value

