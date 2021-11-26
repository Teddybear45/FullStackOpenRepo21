// iterator function which follows the iterator protocol of implementing next: {value: ..., done: true/false}
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
	let nextIndex = start;
	let iterationCount = 0;

	const rangeIterator = {
		next: function () {
			let result;
			if (nextIndex < end) {
				result = { value: nextIndex, done: false }; // this is the {value, done} object when still in bounds for this iterator
				nextIndex += step;
				iterationCount++;
				return result;
			} else {
				return { value: iterationCount, done: true }; // this is for the last result when the end is reached. the value is how many times itered 
			}
		},
	};
	return rangeIterator; // this returns a next equalling an object {value: ..., done: true/false}
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
	console.log(result.value); // 1 3 5 7 9
	result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]


