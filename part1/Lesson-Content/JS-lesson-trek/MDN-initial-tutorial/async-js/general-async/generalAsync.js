//blocking code
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
	let myDate;
	for (let i = 0; i < 10000000; i++) {
		let date = new Date();
		myDate = date;
	}

	console.log(myDate);

	let pElem = document.createElement("p");
	pElem.textContent = "This is a newly-added paragraph.";
	document.body.appendChild(pElem);
});

//these operations are single threaded

// web workers allows us to send some procoesses to a separate thread called a worker

// limiations
// worker isn't able to access the DOM
// syncronous if relies on previous e.g. fetching image and will become blocking code

//promises fix this issue by waiting for the result until running another operation

