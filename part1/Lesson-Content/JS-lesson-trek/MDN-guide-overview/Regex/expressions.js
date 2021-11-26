let re = /abc/; //simple pattern
let testStr = "acbdjfkeidabc222abcdo2d==abchd";
let matchesArray = testStr.match(re);

console.log(matchesArray);

console.log(testStr.slice(10, 13));
