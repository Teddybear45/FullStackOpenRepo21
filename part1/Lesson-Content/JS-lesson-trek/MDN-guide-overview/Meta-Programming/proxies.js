//programming at a meta level of javascript

//this Proxy object defines a target and a handler. the get TRAP is implemented.
//here an object that is proxied won't return undefined when the get method is called on an undefined property, but will instead return the number 42
let handler = {
	get: function (target, name) {
		return name in target ? target[name] : 42;
		// return name in target ? target[name] : undefined
		// ^ would be the default behavior
	},
};

let p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42

