// setTimeout() returns an ID that can be used to clear the timeout.

let myGreeting = setTimeout(() => console.log("Hello"), 2000, 'Mr. Universe');

clearTimeout(myGreeting);

//same idea with intervals

//can set timeout as 0 to run after the main code thread of async code has finished

//spinner game example
