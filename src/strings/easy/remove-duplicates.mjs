// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given a string without spaces, the task is to remove duplicates from it.
//
// Note: The original order of characters must be kept the same.
//
// Example 1:
//
// Input: S = "geeksforGeeks"
// Output: geksfor
// Explanation: Only keep the first
// occurrence
// Example 2:
//
// Input: S = "gfg"
// Output: gf
// Explanation: Only keep the first
// occurrence
//
// Your task:
// Your task is to complete the function removeDups() which takes a single string as input and returns the string.
// You need not take any input or print anything.

import { strict as assert } from "assert";

const testCases = [
    {
        input: "geeksforGeeks",
        expected: "geksfor",
    },
    {
        input: "gfg",
        expected: "gf",
    },
];

const removeDups = ({ input }) => {
    const ret = new Set();
    const arr = Array.from(input.toLowerCase());

    arr.forEach((letter) => ret.add(letter));

    return Array.from(ret).join("");
};

testCases.forEach((test) => assert.equal(test.expected, removeDups(test)));
