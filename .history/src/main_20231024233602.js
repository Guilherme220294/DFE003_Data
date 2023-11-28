import data from './data/beatles_songs/beatles_songs.json' assert { type: "json"};

import animes from './data/animes/naruto_quote.json' assert { type: "json"};


// console.log(data);
const divRoot = document.getElementById("root");
// const value = `${data["1"]["cover"]}`
// divRoot.innerHTML = value;

let allHtml;

function show(data){
    allHtml = data.map(({id,character,quote}) => {
        return (allHtml = `<div>
            <p>${id}</p>
            <p>${character}</p>
            <p>${quote}</p>
            <img src="${cover} alt="`$cover`">
        </div>`)
    })
    divRoot.innerHTML = allHtml;
}

show(data)

// var numbers = [1, 4, 9];
// var doubles = numbers.map(function (num) {
//     return num * 2;
//     });
//     doubles é agora [2, 8, 18] numbers ainda é [1, 4, 9]