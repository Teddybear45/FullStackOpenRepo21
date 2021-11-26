//NOTE: not advisable to use for ... in
// instead should use array.forEach((element) => {})

// some js objects behave like arrays but don't implemented methods for forEach()
// to deal with this, we can just use the arrays prototype for each method and just call it for our use
function printArguments() {
	Array.prototype.forEach.call(arguments, (item) => {
		console.log(item);
	});
}

printArguments("a", 7, "b", true, null, false, 9.5, undefined);

// js typed arrs?

