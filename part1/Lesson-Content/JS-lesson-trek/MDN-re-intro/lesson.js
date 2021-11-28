// closures

//function which returns a function
//the returned function still has access to the
function makeAdderPlus100(a) {
	a += 100;
	return function (b) {
		return a + b;
	};
}

//the local variable passed in, a, is still kept
var add105 = makeAdderPlus100(5);
var add120 = makeAdderPlus100(20);
add105(6); // 111
add120(7); // 127

// log these to console
console.log(add105(6));
console.log(add120(7));
