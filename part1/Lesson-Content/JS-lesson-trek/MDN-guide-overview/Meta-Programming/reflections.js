// reflect helps iwth forwarding default oeprations from the handler to the target

Reflect.has(Object, "assign"); // true

// typcailly use this to call a function with a given "this" value and arguments provided as an array
Function.prototype.apply.call(Math.floor, undefined, [1.75]);

Reflect.apply(Math.floor, undefined, [1.75]);
// 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
