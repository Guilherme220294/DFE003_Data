import data from './data/beatles_songs/beatles_songs.json' assert { type: "json"};

console.log(data);

const divRoot = document.getElementById("root");
const value = `${data["1"]["cover"]}`
divRoot.innerHTML = value;

let allHtml;

function show(data){
    allHtml = data.map(({id}) => {
        return (allHtml = `<div>
            <p>${id}</p>
        </div>`)
    })
}

show(data)

// var numbers = [1, 4, 9];
// var doubles = numbers.map(function (num) {
//     return num * 2;
//     });
//     doubles é agora [2, 8, 18] numbers ainda é [1, 4, 9]