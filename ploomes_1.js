'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function abbreviation(a, b) {
    // Write your code here
    let a_char = a.split('');
    let b_char = b.split('');
    let i = 0

    for (let j = 0; j <= a_char.length; j++) {
        if (i < b_char.length) {
            if (j == a_char.length) {
                return ('NO')
            }
            if (a_char[j] != b_char[i]) {
                if (a_char[j].toUpperCase() != b_char[i]) {
                    if (a_char[j] == a_char[j].toUpperCase()) {
                        return ('NO')
                    }
                }
                else {
                    i++
                }
            }
            else {
                i++
            }
        }
        else {
            for (j ; j < a_char.length; j++) {
                if (a_char[j] == a_char[j].toUpperCase()) {
                    return ('NO')
                }
            }
            return ('YES')
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const a = readLine();

        const b = readLine();

        const result = abbreviation(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}