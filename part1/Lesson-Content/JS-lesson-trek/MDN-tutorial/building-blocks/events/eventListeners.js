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

btn.addEventListener('click', bgChange);

//preventing default behavior 

//form validation preventing default behavior
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

//onsubmit default behavior fires a submit event
form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}


//event bubbling and capture