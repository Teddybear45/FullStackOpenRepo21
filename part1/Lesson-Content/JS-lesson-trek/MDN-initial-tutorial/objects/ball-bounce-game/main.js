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

function Shape(x, y, velX, velY, exists) {
	this.x = x;
	this.y = y;
	this.velX = velX;
	this.velY = velY;
	this.exists = exists;
}

function Ball(x, y, velX, velY, color, size, exists) {
	Shape.call(this, x, y, velX, velY, exists);
	this.color = color;
	this.size = size;
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
	for (let j = 0; j < balls.length; j++) {
		if (!(this === balls[j]) && balls[j].exists) {
			const dx = this.x - balls[j].x;
			const dy = this.y - balls[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < this.size + balls[j].size) {
				balls[j].color = this.color =
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

//evilcircle
//proto constructor
function EvilCircle(x, y, velX, velY, exists) {
	Shape.call(this, x, y, 20, 20, exists);
	this.color = "white";
	this.size = 10;
}
//draw method
EvilCircle.prototype.draw = function () {
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
	ctx.stroke();
};
//checkbounds method
EvilCircle.prototype.checkBounds = function () {
	//updates position instead of velocity
	if (this.x + this.size >= width) {
		this.x = -this.x;
	}

	if (this.x - this.size <= 0) {
		this.x = -this.x;
	}

	if (this.y + this.size >= height) {
		this.y = -this.y;
	}

	if (this.y - this.size <= 0) {
		this.y = -this.y;
	}
};

//controls method for EvilCircle
EvilCircle.prototype.setControls = function () {
	let _this = this;
	window.onkeydown = function (e) {
		if (e.key === "a") {
			_this.x -= _this.velX;
		} else if (e.key === "d") {
			_this.x += _this.velX;
		} else if (e.key === "w") {
			_this.y -= _this.velY;
		} else if (e.key === "s") {
			_this.y += _this.velY;
		}
	};
};

//collision detect method
EvilCircle.prototype.collisionDetect = function () {
	for (let j = 0; j < balls.length; j++) {
		if (balls[j].exists) {
			const dx = this.x - balls[j].x;
			const dy = this.y - balls[j].y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance < this.size + balls[j].size) {
				balls[j].exists = false;
				// or we could remove it from the array

				//incremement score counter
				incremementScorePara();
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
			size,
			true
		);

		balls.push(ball);
	}
}

//animating the ball
//creates array of ball objects
let balls = [];
let currentNumBalls = 25;

spawnBalls(currentNumBalls);
const evilCircle = new EvilCircle(100, 300, 0, 0, true);
evilCircle.setControls();

//score element
const scorePara = document.querySelector("p");
let currentScore = 0;
scorePara.innerText = 0;
const incremementScorePara = () => {
	scorePara.innerText = ++currentScore;
};

//this is looped. draws each frame
function loop() {
	ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
	ctx.fillRect(0, 0, width, height);

	//draws each ball object and updates its position
	for (let i = 0; i < balls.length; i++) {
		if (balls[i].exists) {
			balls[i].draw();
			balls[i].update();
			balls[i].collisionDetect();
		}
	}
	evilCircle.draw();
	evilCircle.checkBounds();
	evilCircle.collisionDetect();

	//recursively calls. infitine loop
	requestAnimationFrame(loop);
}

//calls loop function and runs
loop();
