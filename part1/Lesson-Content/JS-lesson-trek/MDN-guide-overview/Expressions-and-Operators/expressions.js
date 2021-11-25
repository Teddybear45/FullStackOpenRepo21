// destructuring
let foo = ["one", "two", "three"];

let [one, two, three] = foo;

console.log(one + " " + two + " " + three);

//two dimensional array of objects can be looped and the incremementer/decremementer can be used with a comma
let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = [x, x, x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
	console.log(a[i][j]);
}

//delete operator deletes the property from the object

//use this to refer to the current object

//new to create new instance of an object

// super to call to the parent class or to call constructor
// e.g. super(props) or supper.functionOfParentClass(props)

