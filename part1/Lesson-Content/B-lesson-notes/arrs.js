// arrays are defined as a const beacasue they always point to the same object
const arrT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// push method adds an element to the end of the array
arrT.push(21);

console.log(arrT); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21 ] is the result

console.log(arrT[2]); // 3 is the result

// itertate through the array and print each element
arrT.forEach((value) => {
  console.log(value);
});

//React prefers the use of immutable data structs
// preferrable to use the method concat which creates a new array where the content of the old array and the new item are included

const arr1 = [1, -1, 3];
const arr2 = arr1.concat(5);

console.log(arr1); // [ 1, -1, 3 ] is the result
console.log(arr2); // [ 1, -1, 3, 5 ] is the result

// Lots of methods for arrays

// using arr1
const mapArr1 = arr1.map((value) => value * 2); // map creates and returns a new arr

console.log(mapArr1);

//transforming arr with map
const mapArr2 = arr1.map((value) => "<li>" + value + "</li>");
console.log(mapArr2);

//destructuring assignment
const t = [1, 2, 3, 4, 5];
const [first, second, ...rest] = t; // first = 1, second = 2, rest = [3,4,5]
console.log(first, second); // 1, 2
console.log(rest); // [3,4,5] because rest is an array returned by the spread operator

// destructuring assignment second example
console.log("desturcturing second example");
const t2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const [first2, second2, second3, ...rest2] = t2; // first = 1, second = 2, rest = [3,4,5]
console.log(first2, second2, second3); // 1, 2, 3
console.log(rest2); // [3,4,5,6,7,8,9,10,11,12,13,14,15] because rest is an array returned by the spread operator


