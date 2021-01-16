// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Basic
//
// Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.
//
// Example 1:
//
// Input:
// N = 5, K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: First group consists of elements
// 1, 2, 3. Second group consists of 4,5.
//
// Example 2:
//
// Input:
// N = 4, K = 3
// arr[] = {5,6,8,9}
// Output: 8 6 5 9
//
// Your Task:
// You don't need to read input or print anything.
// The task is to complete the function reverseInGroups() which takes the array, N and K as
// input parameters and modifies the array in-place.

import { strict as assert } from "assert";

const testCases = [
    {
        k: 3,
        input: [1, 2, 3, 4, 5],
        expected: [3, 2, 1, 5, 4],
    },
    {
        k: 3,
        input: [5, 6, 8, 9],
        expected: [8, 6, 5, 9],
    },
];

const reverseInGroups = ({ input, k }) => {
    const { length } = input;

    for (let i = 0; i < length; i += k) {
        for (let j = i; j < i + k; j++) {
            if (j >= length) {
                break;
            }
            const n = input[j];
            input.splice(j, 1);
            input.splice(i, 0, n);
        }
    }

    return input;
};

testCases.forEach((test) => assert.deepEqual(test.expected, reverseInGroups(test)));
