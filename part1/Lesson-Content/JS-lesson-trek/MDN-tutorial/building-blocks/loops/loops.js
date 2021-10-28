// for loop similar to 3 element java loop
for (let i = 0; i < 10; i++) {
	console.log(i);
	i++;
}

// list
const cats = ["bill", "jeff", "pete"];

for (let i = 0; i < cats.length; i++) {
	if (cats[i] === "bill") {
		continue;
	}
	//continue will move to next iteration, here bill won't be printed
	console.log(cats[i]);

	// break; // can be used to exit loop
}

//while and do while

