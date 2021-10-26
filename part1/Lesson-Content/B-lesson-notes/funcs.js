// regular arrow function
const sumArrowFunc = () => {
  return "hello world";
};
console.log(sumArrowFunc());

// arrow func with params
const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

console.log(sum(12, 14));

// single param can ommit the parentheses
//const square = p
const square = (p) => {
  return p * p;
};

// or if only a single expression is returned, the second set of parentheses can also be ommitted
const square2 = (p) => p * p;

//this notation is useful for manipulating arrays
const t = [1, 2, 3, 4];
const tSquared = t.map(square2);

console.log(tSquared);
console.log(t.map((p) => p * p));

// can also be declared with function keyword
function product(a, b) {
  return a * b;
}

// rewritten as arrow func
const productFunc = (a, b) => a * b;

console.log("product with reg func is " + product(3, 8));
console.log(productFunc(12,3));


