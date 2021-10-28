const select = document.querySelector("select");
const html = document.querySelector(".output");

select.onchange = () => {
	const choice = select.value;
	switch (choice) {
		case "red":
			update("red", "black");
			break;
		case "blue":
			update("blue", "white");
			break;
		case "green":
			update("green", "black");
			break;
		default:
			update("black", "white");
			break;
	}
};

function update(bgColor, textColor) {
	console.log(bgColor);
	html.style.backgroundColor = bgColor;
	html.style.color = textColor;
}
