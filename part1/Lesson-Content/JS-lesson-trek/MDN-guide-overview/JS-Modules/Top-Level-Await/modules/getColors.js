// top level await allos modules to act as a big async function

const colors = fetch("./colors.json").then((res) => res.json());

export default await colors;
