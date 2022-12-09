const fs = require('fs');
var path = require('path');

//Relative path to data.txt
const dataPath = path.join(__dirname, 'data.txt');
const rucksacks = fs.readFileSync(dataPath, 'UTF-8').split(/\r?\n/)

//Hardcoded array of key-value pairs, kindof convoluted,
//perhaps it would be faster to use array of array, 
//indexes would be priority and search would be implemented some other way.
var occurances = {
    //[occurance in first compartment, occurance in second compartment, priority]
    'a': [0, 0, 0, 1],
    'b': [0, 0, 0, 2],
    'c': [0, 0, 0, 3],
    'd': [0, 0, 0, 4],
    'e': [0, 0, 0, 5],
    'f': [0, 0, 0, 6],
    'g': [0, 0, 0, 7],
    'h': [0, 0, 0, 8],
    'i': [0, 0, 0, 9],
    'j': [0, 0, 0, 10],
    'k': [0, 0, 0, 11],
    'l': [0, 0, 0, 12],
    'm': [0, 0, 0, 13],
    'n': [0, 0, 0, 14],
    'o': [0, 0, 0, 15],
    'p': [0, 0, 0, 16],
    'q': [0, 0, 0, 17],
    'r': [0, 0, 0, 18],
    's': [0, 0, 0, 19],
    't': [0, 0, 0, 20],
    'u': [0, 0, 0, 21],
    'v': [0, 0, 0, 22],
    'w': [0, 0, 0, 23],
    'x': [0, 0, 0, 24],
    'y': [0, 0, 0, 25],
    'z': [0, 0, 0, 26],
    'A': [0, 0, 0, 27],
    'B': [0, 0, 0, 28],
    'C': [0, 0, 0, 29],
    'D': [0, 0, 0, 30],
    'E': [0, 0, 0, 31],
    'F': [0, 0, 0, 32],
    'G': [0, 0, 0, 33],
    'H': [0, 0, 0, 34],
    'I': [0, 0, 0, 35],
    'J': [0, 0, 0, 36],
    'K': [0, 0, 0, 37],
    'L': [0, 0, 0, 38],
    'M': [0, 0, 0, 39],
    'N': [0, 0, 0, 40],
    'O': [0, 0, 0, 41],
    'P': [0, 0, 0, 42],
    'Q': [0, 0, 0, 43],
    'R': [0, 0, 0, 44],
    'S': [0, 0, 0, 45],
    'T': [0, 0, 0, 46],
    'U': [0, 0, 0, 47],
    'V': [0, 0, 0, 48],
    'W': [0, 0, 0, 49],
    'X': [0, 0, 0, 50],
    'Y': [0, 0, 0, 51],
    'Z': [0, 0, 0, 52]
}

console.time("Timer");

var prioritySum = 0;
//Go trough rucksacks
for (let i = 0; i < rucksacks.length - 1; i += 3) {

    for (let j = 0; j < rucksacks[i].length; j++) {
        occurances[rucksacks[i][j]][0]++;
    }
    for (let j = 0; j < rucksacks[i + 1].length; j++) {
        occurances[rucksacks[i + 1][j]][1]++;
    }
    for (let j = 0; j < rucksacks[i + 2].length; j++) {
        occurances[rucksacks[i + 2][j]][2]++;
    }
    console.log(i)
        //Count the final scores
    for (const property in occurances) {
        if (occurances[property][0] > 0 && occurances[property][1] > 0 && occurances[property][2] > 0) {
            prioritySum += occurances[property][3];
        }
        occurances[property][0] = 0;
        occurances[property][1] = 0;
        occurances[property][2] = 0;
    }
}
console.timeEnd("Timer");

console.log(prioritySum);