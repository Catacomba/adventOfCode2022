const fs = require('fs');
const path = require('path');
const readline = require('readline');

// const filePath = path.join('day5_cgpt', 'data.txt');
const filePath = path.join( 'data.txt');

// create a new readline interface
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
});

// variables to store the data
var initialState = '';
var instructions = '';

// flag to keep track of whether "move" has been read yet
let moveSeen = false;

// read each line of the file
rl.on('line', (line) => {
    // check if the line contains the word "move"
    if (line.includes('move')) {
        moveSeen = true;
    }

    // if "move" has been seen, append the line to the second variable
    if (moveSeen) {
        instructions += line + '\n';
    } else {
        // otherwise, append the line to the first variable
        initialState += line + '\n';
    }
});

// when the file has been read, print the variables
rl.on('close', () => {
    console.log('First:');
    console.log(initialState);
    console.log('Second:');
    console.log(instructions);

    var state = readStringInGroupsOf3(initialState);
    var stateInArrays = createArray(state);

    var instructionsInArray = readStringLines(instructions);

    instructionsInArray.forEach(instruction => {
        var instructionData = parseMoveString(instruction);

        console.log(`Moving ${instructionData[0]} from ${instructionData[1]} to ${instructionData[2]}`)

        moveArrayElements(
            stateInArrays[instructionData[1]], //from
            stateInArrays[instructionData[2]], //to
            instructionData[0] //how much
        );

        console.log(stateInArrays);
    });
    console.log("final state");
    printFinalResult(stateInArrays)
    console.log(stateInArrays);
});

function printFinalResult(stateInArrays){
    var r = '';
    stateInArrays.forEach(arr => {
        r+=arr[arr.length-1]
    });
    console.log(r);
}

function readStringLines(str) {
    // Split the string into an array of lines
    const lines = str.split("\n");

    // Remove empty lines
    const nonEmptyLines = lines.filter(line => line.trim() !== "");

    // Return the array of non-empty lines
    return nonEmptyLines;
}

function parseMoveString(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Check if the array has the correct number of words
    if (words.length !== 6) {
        throw new Error("Invalid input: string must contain 'move', 'from', and 'to'");
    }

    // Check if the words are in the correct order
    if (words[0] !== "move" || words[2] !== "from" || words[4] !== "to") {
        throw new Error("Invalid input: string must contain 'move', 'from', and 'to' in the correct order");
    }

    // Try to convert the number of elements and the array indices to numbers
    const numElements = Number(words[1]);
    const fromIndex = Number(words[3]);
    const toIndex = Number(words[5]);

    // Check if the conversions were successful
    if (Number.isNaN(numElements) || Number.isNaN(fromIndex) || Number.isNaN(toIndex)) {
        throw new Error("Invalid input: number of elements and array indices must be valid numbers");
    }

    // Return the parsed values
    return [numElements, fromIndex - 1, toIndex - 1];
}

function moveArrayElements(from, to, numElements) {
    // Pop the specified number of elements from the first array
    const elements = from.splice(-numElements);

    // Push the elements onto the second array
    to.push(...elements.reverse());
}

function createArray(state) {
    let divider = state[state.length - 2]
    var arrayData = readNthElements(state, divider);
    return arrayData;
}

function readNthElements(arr, n) {
    var arrayData = [];
    // Iterate over the array
    for (let j = 0; j < Number(n); j++) {
        var innerarr = []
        for (let i = j; i < arr.length; i += Number(n)) {
            if (arr[i].length > 0 && !isValidNumber(arr[i])) {
                innerarr.push(removeBrackets(arr[i]))
            }
        }
        arrayData.push(innerarr.reverse());
    }
    return arrayData;
}

function removeBrackets(str) {
    return str.replace(/\[|\]/g, "");
}

function isValidNumber(str) {
    return !Number.isNaN(Number(str));
}

function readStringInGroupsOf3(string) {
    // Create an empty array to store the groups of three characters
    const groups = [];

    // Iterate over the string, taking groups of three characters at a time
    for (let i = 0; i < string.length; i += 4) {
        const group = string.substring(i, i + 4).replace(/\s/g, '');
        groups.push(group);
    }

    return groups;
}