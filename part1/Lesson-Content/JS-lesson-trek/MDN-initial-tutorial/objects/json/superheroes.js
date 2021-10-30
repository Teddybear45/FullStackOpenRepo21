// obtain our JSON through api called XMLHttpRequest (XHR)

// document selectors
const header = document.querySelector("header");
const section = document.querySelector("section");

//store url of JSON want to retrieve
let requestURL =
	"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";

request.send();

//once recieves request
request.onload = function () {
	const superHeroes = request.response;
	console.log(superHeroes);
	populateHeader(superHeroes);
	showHeroes(superHeroes);
};

//takes content from js and populates html header with data from request
function populateHeader(obj) {
	const squadNameH1 = document.createElement("h1");
	squadNameH1.textContent = obj["squadName"];
	header.appendChild(squadNameH1);

	const herosDetailPara = document.createElement("p");
	herosDetailPara.textContent =
		"Hometown: " + obj["homeTown"] + " // Formed: " + obj["formed"];
	header.appendChild(herosDetailPara);
}

//fills from request
function showHeroes(obj) {
	const heroes = obj["members"];

	for (let i = 0; i < heroes.length; i++) {
		const myArticle = document.createElement("article");
		const myH2 = document.createElement("h2");
		const myPara1 = document.createElement("p");
		const myPara2 = document.createElement("p");
		const myPara3 = document.createElement("p");
		const myList = document.createElement("ul");

		myH2.textContent = heroes[i].name;
		myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
		myPara2.textContent = "Age: " + heroes[i].age;
		myPara3.textContent = "Superpowers:";

		const superPowers = heroes[i].powers;
		for (let j = 0; j < superPowers.length; j++) {
			const listItem = document.createElement("li");
			listItem.textContent = superPowers[j];
			myList.appendChild(listItem);
		}

		myArticle.appendChild(myH2);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);
		myArticle.appendChild(myPara3);
		myArticle.appendChild(myList);

		section.appendChild(myArticle);
	}
}

//sometimes we recieve a reaw JSON string and need to convert it to an object ourselves
// also, when sending a JS object, we need to conver to JSON

//parse() example

// request.responseType = 'text'; // now we're getting a string!
// with a string, we have to do
// const superHeroes = JSON.parse(superHeroesText); // converts the text into a JS object

//stringify() works the opposite way

let myObj = { name: "Chris", age: 38 };

let myString = JSON.stringify(myObj); // turned into JSON format from JS object



