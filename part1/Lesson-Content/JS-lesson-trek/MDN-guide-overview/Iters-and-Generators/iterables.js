function* makeIterator() {
	yield 1;
	yield 2;
}

const it = makeIterator();

for (const itItem of it) {
	console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); // true;

// This example show us generator(iterator) is iterable object,
// which has the @@iterator method return the it (itself),
// and consequently, the it object can iterate only _once_.

// If we change it's @@iterator method to a function/generator
// which returns a new iterator/generator object, (it)
// can iterate many times

it[Symbol.iterator] = function* () {
	yield 2;
	yield 1;
};

//user defined iterables

const myIterable = {
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
		yield 3;
	},
};

for (let value of myIterable) {
	console.log(value);
}
// 1
// 2
// 3
