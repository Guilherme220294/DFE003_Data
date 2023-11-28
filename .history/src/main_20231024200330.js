import data from './data/beatles_songs/beatles_songs.json' assert { type: "json"};

console.log(data);

const divRoot = document.getElementById("root");
const value = `${data["1"]["cover"]}`
divRoot.innerHTML = value;

var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
    return num * 2;
    });
    doubles é agora 