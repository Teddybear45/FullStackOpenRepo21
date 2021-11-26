let x = "\u00A9"; //copyright symbol with escape char
console.log(typeof x);

// multi line template literals

let multiStr = `
line 1 str
line 2 str
line 3 str
`;

console.log(multiStr);

//internationalization object is useful for formatting time and date and currencies etc...

const gasPrice = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 3,
});

console.log(gasPrice.format(5.2775543));


