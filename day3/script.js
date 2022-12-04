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
const data = fs.readFileSync(dataPath, 'UTF-8')

console.time("Timer");
//2d array
// var charCount = [
//     [][]
// ]

console.timeEnd("Timer");