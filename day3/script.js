//   1.             2.
// vJrwpWtwJgWr hcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw


const fs = require('fs');
var path = require('path');

const dataPath = path.join(__dirname, '..', 'day3', 'data.txt');
const data = fs.readFileSync(dataPath, 'UTF-8').split(/\r?\n/)

const priorities = [
    '-',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
]

console.time("Timer");

for (let i = 0; i < data.length; i++) {
    const half = data[i].length / 2;
    let firstCompartment = data[i].substring(0, half);
    let secondCompartment = data[i].substring(half, data.length - 1)
        // console.log(`
        // Together: ${data[i]}
        // First:    ${firstCompartment}
        // Second:   ${secondCompartment}
        // Together2:${firstCompartment}${secondCompartment}
        // `);
    let
}
//2d array
// var charCount = [
//     [][]
// ]

console.timeEnd("Timer");