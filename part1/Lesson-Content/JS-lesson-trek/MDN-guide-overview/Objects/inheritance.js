function Employee(name) {
	this.name = name;
	this.status = "employed";
	this.work = function () {
		console.log("working hard");
	};
}

function Boss(name) {
	Employee.call(this, name);
	this.position = function () {
		console.log("highest");
	};
}

function Manager(name, dept, reports) {
	Employee.call(this, name);
	this.dept = dept;
	this.reports = reports;
}

let Jeff = new Boss("Jeff");
console.log(Jeff);

Boss.prototype.greeting = function () {
	console.log("HI");
};
const NewBoss = new Boss("Bob");
NewBoss.greeting();

const ManagingSteve = new Manager("Steve", "Finance", Jeff);
console.log(ManagingSteve);
console.log(ManagingSteve.reports);
