// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.
//
// Example 1:
//
// Input:
// N = 4
// arr[] = {1, 5, 3, 2}
// Output: 2
// Explanation: There are 2 triplets:
// 1 + 2 = 3 and 3 +2 = 5
//
// Example 2:
//
// Input:
// N = 3
// arr[] = {2, 3, 4}
// Output: 0
// Explanation: No such triplet exits
//
// Your Task:
// You don't need to read input or print anything. Your task is to complete the
// function countTriplet() which takes the array arr[] and N as inputs and returns the triplet count

import { strict as assert } from "assert";

const testCases = [
    {
        input: [1, 5, 3, 2],
        expected: 2,
    },
    {
        input: [2, 3, 4],
        expected: 0,
    },
];

const countTriplet = (test) => {
    const { input } = test;
    const { length } = input;
    let count = 0;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            let mSum = input[i] + input[j];

            for (let k = 0; k < length; k++) {
                if (mSum === input[k]) {
                    count++;
                }
            }
        }
    }

    return count;
};

testCases.forEach((test) => assert.equal(test.expected, countTriplet(test)));
