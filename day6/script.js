const fs = require('fs');
var path = require('path');

//Relative path to data.txt
const dataPath = path.join(__dirname, 'data.txt');
const stream = fs.readFileSync(dataPath, 'UTF-8')

console.time("timer");

for (let i = 0; i < stream.length - 4; i++) {
    var potentialMarker = stream.substring(i, i + 14);
    if (checkifStringisUnique(potentialMarker)) {
        console.timeEnd("timer");
        console.log(i + 14)
        break;
    }
}


function checkifStringisUnique(str) {
    var hash = Object.create(null);

    return str.split('').every(function(c) {
        return !hash[c] && (hash[c] = true);
    });
}