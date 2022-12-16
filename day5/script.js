const fs = require('fs');
var path = require('path');

//Relative path to data.txt
const dataPath = path.join(__dirname, '..', 'day4', 'data.txt');
const rearangementProcedures = fs.readFileSync(dataPath, 'UTF-8').split(/\r?\n/)

// Starting configuration
//     [D]    
// [N] [C]    
// [Z] [M] [P]
//  1   2   3 

var startingConfiguration = [
    ['Z', 'N'],
    ['M', 'C', 'D']
    ['P']
]

for(let i = 0; i < rearangementProcedures.length; i++){
    var pair = rearangementProcedures[i].replace(/\s/g, '').split('from');
    var fromWhereToWhere = pair[1].split('to');
    var whichStacktbpza = pair[1].split('-');
}

