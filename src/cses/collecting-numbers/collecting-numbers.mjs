// https://cses.fi/alon/task/2216
//
// Collecting Numbers
// TASK
// Time limit: 1.00 s Memory limit: 512 MB
// You are given an array that contains each number between 1…n exactly once. Your task is to collect the numbers from 1 to n in increasing order.
//
// On each round, you go through the array from left to right and collect as many numbers as possible. What will be the total number of rounds?
//
// Input
//
// The first line has an integer n: the array size.
//
// The next line has n integers x1,x2,…,xn: the numbers in the array.
//
// Output
//
// Print one integer: the number of rounds.
//
// Constraints
// 1≤n≤2⋅105
// Example
//
// Input:
// 5
// 4 2 1 5 3
//
// Output:
// 3

import { strict as assert } from "assert";
import fs from "fs";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "test-data-collecting-numbers.json")));

const testCases = [
    {
        input: [4, 2, 1, 5, 3, 6],
        expected: 3,
    },
    {
        input: data.input,
        expected: 99929,
    },
];

const collectingNumbers = ({ input }) => {
    let pointers = {};

    for (let i = 0; i < input.length; i++) {
        pointers[input[i]] = undefined;
    }

    for (let i = 0; i < input.length; i++) {
        const val = input[i];

        const prev = pointers[val - 1];
        if (typeof prev !== "undefined") {
            pointers[val] = val - 1;
        } else {
            pointers[val] = val;
        }
    }

    const ret = [];
    for (let i = Object.keys(pointers).length; i > 0; i--) {
        const merged = [];
        merged.push(i);

        let ptr = pointers[i];

        if (i === ptr) {
            ret.push(merged);
            continue;
        }

        while (ptr) {
            const curVal = pointers[ptr];
            merged.push(ptr);

            if (curVal === ptr) {
                i = curVal;
                break;
            }
            ptr = curVal;
        }
        ret.push(merged);
    }

    return ret.length;
};

testCases.forEach((test) => {
    const start = Date.now();
    const result = collectingNumbers(test);

    console.log(`Took: ${Date.now() - start} milliseconds`);
    console.log(`Memory: ${process.memoryUsage().rss / 1000000} MB`);
    console.log(result);

    assert.deepEqual(result, test.expected);
});
