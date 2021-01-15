// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given an array of size N-1 such that it can only contain distinct integers in the range of 1 to N. Find the missing element.
//
// Example 1:
//
// Input:
// N = 5
// A[] = {1,2,3,5}
// Output: 4
// Example 2:
//
// Input:
// N = 10
// A[] = {1,2,3,4,5,6,7,8,10}
// Output: 9
// Your Task :
// Complete the function MissingNumber() that takes array and N as input and returns the value of the missing number.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [1, 2, 3, 5],
        expected: 4,
    },
    {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 10],
        expected: 9,
    },
];

const missingNumber = (test) => {
    const { input } = test;
    const { length } = input;

    let next = 1;
    for (let i = 0; i < length; i++) {
        if (input[i] !== next) {
            break;
        }
        next++;
    }

    return next;
};

testCases.forEach((test) => assert.equal(test.expected, missingNumber(test)));
