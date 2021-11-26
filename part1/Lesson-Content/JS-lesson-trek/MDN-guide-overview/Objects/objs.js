function Car() {
	this.amtWheels = 4;
	this.drive = function () {
		console.log("driving");
	};
  this.drive = function() {
    console.log("vroom")
  }
}

function Transmission(wheelDrive) {
	this.bestTraction = false;

	if (wheelDrive === "awd") {
		this.bestTraction = true;
	}
}

function HondaCar() {
	Car.call(this);
	this.brand = "honda";
	this.transmission = new Transmission("fwd");

}

const mysteryCar = new HondaCar();
console.log(mysteryCar.transmission.bestTraction);

//getters and setters for Objects
const obj = {
	a: 7,
	get b() {
		return this.a + 10;
	},
	set c(n) {
		this.a = n % 2 == 0 ? n + 1 : n;
	},
};

console.log(obj.a);
console.log(obj.b);
obj.c = 14;
console.log(obj.a);
