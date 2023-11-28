import data from './data/a/animes.json' assert { type: "json"};

console.log(data);

const divRoot = document.getElementById("root");
const value = `${data["id"]}`
divRoot.innerHTML = value;