// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
//
// Example 1:
//
// Input:
// S = i.like.this.program.very.much
// Output: much.very.program.this.like.i
// Explanation: After reversing the whole
// string(not individual words), the input
// string becomes
// much.very.program.this.like.i
// Example 2:
//
// Input:
// S = pqr.mno
// Output: mno.pqr
// Explanation: After reversing the whole
// string , the input string becomes
// mno.pqr
//
// Your Task:
// You dont need to read input or print anything. Complete the function reverseWords()
// which takes string S as input parameter and returns a string containing the
// words in reversed order. Each word in the returning string should also be separated by '.'

import { strict as assert } from "assert";

const testCases = [
    {
        input: "i.like.this.program.very.much",
        expected: "much.very.program.this.like.i",
    },
    {
        input: "pqr.mno",
        expected: "mno.pqr",
    },
];

const reverseWords = (test) => {
    const { input } = test;

    return input.split(".").reverse().join(".");
};

testCases.forEach((test) => assert.equal(reverseWords(test), test.expected));
