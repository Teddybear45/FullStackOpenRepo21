//generators are an iterative algorithm whose execution isn't continuous
// a Generator is an iterator

function* makeRangeIterator(start = 0, end = 100, step = 1) {
	let iterationCount = 0;
	for (let i = start; i < end; i += step) {
		iterationCount++;
		yield i;
	}
	return iterationCount;
}

const gen = makeRangeIterator(1, 10, 2);
console.log(gen.next().value);
console.log(gen.next().value);

//
