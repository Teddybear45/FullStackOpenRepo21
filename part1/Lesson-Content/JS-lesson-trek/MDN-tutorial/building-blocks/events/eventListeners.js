const btn = document.querySelector("button");

function random(number) {
	return Math.floor(Math.random() * (number + 1));
}

//onclick is the event handler property here
// btn.onclick = function() {
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }

//other event handlers for a button
//ondbclick = double click
//onmouseover and onmouseout = mouse hover
btn.onmouseover = function () {
	const rndCol =
		"rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
	document.body.style.backgroundColor = rndCol;
};

// NOTE
// Below --> best practice to use addEventListener

//also able to add to a window
window.onkeydown = () => {
	alert("key pressed");
};

//adding event handlers to an element
//able to input function into param or use anonmyous
function alertClick() {
	alert("button clicked");
}

btn.addEventListener("click", alertClick);

//removed through removeEventListener
btn.removeEventListener("click", alertClick);

//event handlers can be removed through AbortSignals as well with an AbortController
const btnControllerChangeColorClick = new AbortController();
btn.addEventListener(
	"click",
	() => {
		alert("button clicked in function with abort controller");
	},
	{ signal: btnControllerChangeColorClick.signal }
);
//aborts and removes controller associated with event listener
btnControllerChangeColorClick.abort();

// some event handlers have parameters specified with a name such as event
//this is an event object

//event object e in the function
function bgChange(e) {
	const rndCol =
		"rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
	e.target.style.backgroundColor = rndCol; //target property of event object is always a reference to the element itself, in this case the button
	console.log(e);
}

btn.addEventListener("click", bgChange);

//preventing default behavior

//form validation preventing default behavior
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

//onsubmit default behavior fires a submit event
form.onsubmit = function (e) {
	if (fname.value === "" || lname.value === "") {
		e.preventDefault();
		para.textContent = "You need to fill in both names!";
	}
};

//event bubbling and capture

//when an event is fired on an element that has parent elements it runs through 3 phases
//capturing, target, and bubbling

// capturing: for a click on the target event, the event first goes through the ancestors chain down to the element
// goes down and checks if any element in its path and if any match, it'll get called
// capturing is not standard because it captures all elements before the dom tree

//target: the event reaches the target element and triggeres it
// this step is reached last for capturing and first for bubbling

//bubbling: goes back up the dom tree calling handlers after the target has been triggered
// this is default behavior

// true means capture phase is used (default is false)
// elem.addEventListener(..., true)

/*
<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

HTML → BODY → FORM → DIV (capturing phase [the first listener])
P (target phase, triggers 2 times, (one for capturing , one for bubbling)
DIV → FORM → BODY → HTML (bubbling phase [the second listener])

*/

// this event is broadcasted up or down the dom tree structure and event LISTENERS listen for an event

// these events bubble upwards so clicking a video to play can also hide it

//stopPropagation() fixes this problem and makes it so events don't bubble up the chian so no more handlers run

/*

video.onclick = function(e) {
  e.stopPropagation();
  video.play();
};

*/

// event delegation - concept where some code to select any one of a large number of child elements
// an example of its usefulness is for a list of items in an <ul>
// setting the event listener for the parent element (<ul>) instead of each list item allows each list item event to be handled by the parent (<ul>)

/*
<ul>
	<li>
	<li>
	<li>
	<li>
</ul>

- the ul can have an event handler for click and when the li is clicked, the event is bubbled up to the ul
- once the ul handles the event at the target phase, stopPropagation() can be used to stop anymore bubbling up the dom tree


*/


