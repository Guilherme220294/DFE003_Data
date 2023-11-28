import data from './data/beatles_songs/beatles_songs.json' assert { type: "json"};

console.log(data);

const divRoot = document.getElementById("root");
const value = `${data["1"]["cover"]}`
divRoot.innerHTML = value;

