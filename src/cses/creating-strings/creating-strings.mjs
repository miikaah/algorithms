// https://cses.fi/alon/task/1622
//
// Creating Strings
// TASK
// Time limit: 1.00 s Memory limit: 512 MB
// Given a string, your task is to generate all different strings that can be created using its characters.
//
// Input
//
// The only input line has a string of length n. Each character is between a–z.
//
// Output
//
// First print an integer k: the number of strings. Then print k lines: the strings in alphabetical order.
//
// Constraints
// 1≤n≤8
// Example
//
// Input:
// aabac
//
// Output:
// 20
// aaabc
// aaacb
// aabac
// aabca
// aacab
// aacba
// abaac
// abaca
// abcaa
// acaab
// acaba
// acbaa
// baaac
// baaca
// bacaa
// bcaaa
// caaab
// caaba
// cabaa
// cbaaa

import { strict as assert } from "assert";

const testCases = [
    {
        input: "aabac",
        expected: [
            "aaabc",
            "aaacb",
            "aabac",
            "aabca",
            "aacab",
            "aacba",
            "abaac",
            "abaca",
            "abcaa",
            "acaab",
            "acaba",
            "acbaa",
            "baaac",
            "baaca",
            "bacaa",
            "bcaaa",
            "caaab",
            "caaba",
            "cabaa",
            "cbaaa",
        ],
    },
];

const creatingStrings = ({ input }) => {
    const ret = {};
    const base = input.split("").sort();
    ret[base.join("")] = "";

    let counter = 0;
    for (let i = 0; i < base.length; i++) {
        for (let j = 1; j < base.length; j++) {
            const swap = base[j];
            base[j] = base[i];
            base[i] = swap;
            console.log(base.join(""));
            ret[base.join("")] = "";
        }

        counter++;
        if (counter === base.length * 2) {
            break;
        }
    }

    return Object.keys(ret);
};

testCases.forEach((test) => {
    const start = Date.now();
    const result = creatingStrings(test);

    console.log(`Took: ${Date.now() - start} milliseconds`);
    console.log(`Memory: ${process.memoryUsage().rss / 1000000} MB`);
    console.log("Result:", result);

    assert.deepEqual(result, test.expected);
});
