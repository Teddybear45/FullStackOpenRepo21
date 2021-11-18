//difficult to work using async code 

// let response = fetch('myImage.png'); // fetch is asynchronous
// let blob = response.blob();
// display your image blob in the UI somehow

//don't know how long image iwll take to download

//async callbacks. older but still commonly used
// when the backgroudn code finishes running, it calls the callback function to let you know the work is done

// addEventListener() is an example of an async callback 
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});

//first parameter is the event type and the second is the callback function which is invoked when the event is fired
// the callback function passed in isn't executed immediately

// function containg a callback
//load asset loads an image then once it loads, will run the passed in function called callback
// passed in function runs when the inner function decides
function loadAsset(url, type, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = type;

  xhr.onload = function() {
    callback(xhr.response);
  };

  xhr.send();
}

function displayImage(blob) {
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

loadAsset('coffee.jpg', 'blob', displayImage);

//callbacks allow you to control order the functions are run and allow data to be passed in
