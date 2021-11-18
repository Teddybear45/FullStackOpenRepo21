//promises are a new way to handle async operations in javascript
// fetch() is a promise-based API for making HTTP requests which is more efficient version of XMLHttpRequest

fetch("products.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (json) {
		let products = json;
		initialize(products);
	})
	.catch(function (err) {
		console.log("Fetch problem: " + err.message);
	});
// .then() is a promise method 

// the fetch method waits for browser and then the .then() block with its callback function is executed
// the .then() block returns another promise 
// the .catch() block is executed if the promise is rejected

// async operatations are put into an event queue 

console.log ('Starting');
let image;

fetch('coffee.jpg').then((response) => {
  console.log('It worked :)')
  return response.blob();
}).then((myBlob) => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

console.log ('All done!');

// all done would be printed before it worked is printed because the fetch is asynchronous but the all done doesn't wait for the fetch
// add another .then() after the first callback and then print all done for desired order
// starting -> it worked -> all done


