const mainSect = document.querySelector(".flexes");

for (let i = 0; i < 16; i++) {
  console.log("h");
	const newDiv = document.createElement("div");
	newDiv.style.backgroundColor = "red";
	mainSect.appendChild(newDiv);
}

function random(number) {
	return Math.floor(Math.random() * number);
}

function bgChange() {
	var rndCol =
		"rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
	return rndCol;
}

const allDivs = document.querySelectorAll("div");

for (let i = 0; i < allDivs.length; i++) {
	allDivs[i].addEventListener("click", (e) => {
		e.target.style.backgroundColor = bgChange();
	});
}
