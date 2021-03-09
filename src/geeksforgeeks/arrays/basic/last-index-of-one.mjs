// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Basic
//
// Given a string S consisting only '0's and '1's,  find the last index of the '1' present in it.
//
// Example 1:
//
// Input:
// S = 00001
// Output:
// 4
// Explanation:
// Last index of  1 in given string is 4.
//
// Example 2:
//
// Input:
// 0
// Output:
// -1
// Explanation:
// Since, 1 is not present, so output is -1.
//
// Your Task:
// You don't need to read input or print anything.
// Your task is to complete the function lastIndex() which takes the string S as inputs
// and returns the last index of '1'. If '1' is not present, return "-1" (without quotes).

import { strict as assert } from "assert";

const testCases = [
    {
        input: "00001",
        expected: 4,
    },
    {
        input: "0",
        expected: -1,
    },
    {
        input: "000010000100001",
        expected: 14,
    },
];

const lastIndex = ({ input }) => {
    const inputArr = Array.from(input);
    const { length } = inputArr;

    let lastIdx = -1;
    for (let i = 0; i < length; i++) {
        if (inputArr[i] === "1") {
            lastIdx = i;
        }
    }

    return lastIdx;
};

testCases.forEach((test) => assert.deepEqual(lastIndex(test), test.expected));
