import data from './data/beatles_songs/beatles_songs.json' assert { type: "json"};

import animes from './data/animes/naruto_quote.json' assert { type: "json"};


// console.log(data);
const divRoot = document.getElementById("root");
// const value = `${data["1"]["cover"]}`
// divRoot.innerHTML = value;

let allHtml;

function show(data){
    allHtml = data.map(({name,character,cover}) => {
        return (allHtml = `<div>
            <p>${name}</p>
            <p>${character}</p>
            <p>${character}</p>
            <img class="imagens" src="${cover}" alt="${cover}">
        </div>`)
    })
    divRoot.innerHTML = allHtml;
}

show(animes)

// var numbers = [1, 4, 9];
// var doubles = numbers.map(function (num) {
//     return num * 2;
//     });
//     doubles é agora [2, 8, 18] numbers ainda é [1, 4, 9]

