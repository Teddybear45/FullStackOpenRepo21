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

// The Proxy object defines a target (an empty object here) and a handler object, in which a get trap is implemented. 
// Here, an object that is proxied will not return undefined when getting undefined properties, but will instead return the number 42.

let p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42

// many different kind of traps | the "get" was the trap up there

//revocable proxy creates a proxy that can be revoked

let revocable = Proxy.revocable(
	{},
	{
		get: function (target, name) {
			return "[[" + name + "]]";
		},
	}
);
let proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError is thrown
proxy.foo = 1; // TypeError again
delete proxy.foo; // still TypeError
typeof proxy; // "object", typeof doesn't trigger any trap
