// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
	const num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}

//lots of balls but same behavior so makes sense they're an object

// using a prototypal object instead of class to afford more flexibility

function Ball(x, y, velX, velY, color, size) {
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.color = color;
	this.size = size;

	function incremementSize() {
		this.size++;
	}
}

//add method to Ball proto
Ball.prototype.draw = function () {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.fill();
};

//update method to Ball proto to check wall bounces and to update ball placement based on velocity
Ball.prototype.update = function () {
	//first four check ball position by checking the position and size (for edges of ball) and checks to width and height of screen
	if (this.x + this.size >= width) {
		this.velX = -this.velX;
	}

	if (this.x - this.size <= 0) {
		this.velX = -this.velX;
	}

	if (this.y + this.size >= height) {
		this.velY = -this.velY;
	}

	if (this.y - this.size <= 0) {
		this.velY = -this.velY;
	}
	//actual update to ball pos
	this.x += this.velX;
	this.y += this.velY;
};

//collision detection
Ball.prototype.collisionDetect = function () {
	//iters through each ball
	for (let j = 0; j < balls.length; j++) {
		//makes sure check isn't current ball
		if (!(this === balls[j])) {
			// distance from current ball to check ball
			const dx = this.x - balls[j].x;
			const dy = this.y - balls[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			// if distance from current ball to check ball, keeping size in mind
			if (distance < this.size + balls[j].size) {
				// removes ball collided with
				balls.splice(j, 1);
				//50/50 chance of creating another ball (+2) or removing current ball as well (-2)
				if (Math.random() < 0.5) {
					spawnBalls(++currentNumBalls);
				} else {
					currentNumBalls--;
				}

				//change color
				this.color =
					"rgb(" +
					random(0, 255) +
					"," +
					random(0, 255) +
					"," +
					random(0, 255) +
					")";
			}
		}
	}
};

function spawnBalls(numBalls) {
	while (balls.length < numBalls) {
		let size = random(10, 20);
		let ball = new Ball(
			// ball position always drawn at least one ball width
			// away from the edge of the canvas, to avoid drawing errors
			random(0 + size, width - size),
			random(0 + size, height - size),
			random(-7, 7),
			random(-7, 7),
			"rgb(" +
				random(0, 255) +
				"," +
				random(0, 255) +
				"," +
				random(0, 255) +
				")",
			size
		);

		balls.push(ball);
	}
}

//animating the ball
//creates array of ball objects
let balls = [];
let currentNumBalls = 25;

spawnBalls(currentNumBalls);

//this is looped. draws each frame
function loop() {
	ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
	ctx.fillRect(0, 0, width, height);

	//draws each ball object and updates its position
	for (let i = 0; i < balls.length; i++) {
		balls[i].draw();
		balls[i].update();
		balls[i].collisionDetect();
	}

	console.log(currentNumBalls);

	//recursively calls. infitine loop
	requestAnimationFrame(loop);
}

//calls loop function and runs
loop();
