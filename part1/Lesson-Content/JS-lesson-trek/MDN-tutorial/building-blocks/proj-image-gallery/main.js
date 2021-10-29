const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Looping through images */

for (let i = 5; i > 0; i--) {
	const newImage = document.createElement("img");
	newImage.setAttribute("src", "images/pic" + i + ".jpg");
	thumbBar.appendChild(newImage);
}

// event handler for thumbnail image
thumbBar.addEventListener("click", (e) => {
	e.stopPropagation();
	displayedImage.setAttribute("src", e.target.getAttribute("src"));
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", (e) => {
	if (e.target.getAttribute("class") === "dark") {
		btn.setAttribute("class", "light");
		btn.textContent = "Brighten";
		overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
	} else {
		btn.setAttribute("class", "dark");
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
	}
});
