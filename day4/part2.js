const fs = require('fs');
var path = require('path');

//Relative path to data.txt
const dataPath = path.join(__dirname, 'data.txt');
const pairsOfElves = fs.readFileSync(dataPath, 'UTF-8').split(/\r?\n/)

var uselessElves = 0;
console.time('timer');
for (let i = 0; i < pairsOfElves.length; i++) {
    const pair = pairsOfElves[i].split(',');
    const firstElfArea = pair[0].split('-');
    const secondElfArea = pair[1].split('-');
    const firstElfStart = Number(firstElfArea[0]);
    const firstElfEnd = Number(firstElfArea[1]);
    const secondElfStart = Number(secondElfArea[0]);
    const secondElfEnd = Number(secondElfArea[1]);

    //Instead of checking all overlaps, check not overlaps
    if (firstElfEnd < secondElfStart) {
        continue;
    }
    if (secondElfEnd < firstElfStart) {
        continue;
    }
    uselessElves++;
}
console.timeEnd('timer');
console.log(uselessElves);