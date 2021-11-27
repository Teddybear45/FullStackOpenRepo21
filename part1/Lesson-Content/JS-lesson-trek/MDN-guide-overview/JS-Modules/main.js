// const {squareLib} = require("./modules/square.js")

import { draw as squareDraw, name as squareName } from "./modules/square.js";
import * as CanvasModule from "./modules/canvas.js";

console.log(squareName);

//dynamic module loading

//for example | won't run on Node
let squareBtn = document.querySelector(".square");

squareBtn.addEventListener("click", () => {
	import("./modules/square.js").then((Module) => {
		let square1 = new Module.Square(
			myCanvas.ctx,
			myCanvas.listId,
			50,
			50,
			100,
			"blue"
		);
		square1.draw();
		square1.reportArea();
		square1.reportPerimeter();
	});
});

