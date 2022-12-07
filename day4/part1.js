const fs = require('fs');
var path = require('path');

//Relative path to data.txt
const dataPath = path.join(__dirname, '..', 'day4', 'data.txt');
const pairsOfElves = fs.readFileSync(dataPath, 'UTF-8').split(/\r?\n/)

var uselessElves = 0;
for(let i = 0; i < pairsOfElves.length; i++){
    var pair = pairsOfElves[i].split(',');
    var firstElfArea = pair[0].split('-');
    var secondElfArea = pair[1].split('-');

    if(Number(firstElfArea[0]) >= Number(secondElfArea[0]) && Number(firstElfArea[1]) <= Number(secondElfArea[1])){
        //first is inside of second
        uselessElves++;
    }
    else if(Number(firstElfArea[0]) <= Number(secondElfArea[0]) && Number(firstElfArea[1]) >= Number(secondElfArea[1])){
        //second is inside of first
        uselessElves++;
    }
}

console.log(uselessElves);