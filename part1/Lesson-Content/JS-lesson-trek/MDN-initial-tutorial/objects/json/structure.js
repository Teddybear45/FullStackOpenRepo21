// same basic data types as a javascript object inclduing strings, numbers, arrays, booleans, and other object literals
// JSON stands for Javascript Object Notation 

//example json string
// can be parsed into a JS variable
//note: const makes variable immutable but its properties can still change here
const superHeroes = {
	squadName: "Super hero squad",
	homeTown: "Metro City",
	formed: 2016,
	secretBase: "Super tower",
	active: true,
	members: [
		{
			name: "Molecule Man",
			age: 29,
			secretIdentity: "Dan Jukes",
			powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
		},
		{
			name: "Madame Uppercut",
			age: 39,
			secretIdentity: "Jane Wilson",
			powers: [
				"Million tonne punch",
				"Damage resistance",
				"Superhuman reflexes",
			],
		},
		{
			name: "Eternal Flame",
			age: 1000000,
			secretIdentity: "Unknown",
			powers: [
				"Immortality",
				"Heat Immunity",
				"Inferno",
				"Teleportation",
				"Interdimensional travel",
			],
		},
	],
};

console.log(superHeroes);
superHeroes.squadName = "Super Power Squad";
console.log(superHeroes);
console.log(superHeroes['members'][1]['powers'][0]); // same access notation for regular js objects


// arrays as json are valid
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]

//notes on JSON
// purely string format
// requires double quotes for keys as well unlike regular JS object
