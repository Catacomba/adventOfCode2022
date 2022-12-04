const fs = require('fs');


const data = fs.readFileSync('data.txt', 'UTF-8')
const lines = data.split(/\r?\n/)
console.time("Timer");
//      r p s
//      X Y Z
// r A  3 4 8
// p B  1 5 9
// s C  2 6 7

const strat2array = {}

const strat2 = [
    [3, 4, 8],
    [1, 5, 9],
    [2, 6, 7]
]

const strat = [
    [4, 8, 3],
    [1, 5, 9],
    [7, 2, 6]
]
const map = {
    "A": 0,
    "X": 0,
    "B": 1,
    "Y": 1,
    "C": 2,
    "Z": 2
};
var accumulator = 0;
for (var i = 0; i < lines.length - 1; i++) {
    accumulator += strat2[map[lines[i][0]]][map[lines[i][2]]];
}
console.timeEnd('Timer');
console.log(accumulator);