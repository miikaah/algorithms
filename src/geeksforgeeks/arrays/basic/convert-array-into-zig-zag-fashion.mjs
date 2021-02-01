// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Basic
//
// Given an array Arr (distinct elements) of size N.
// Rearrange the elements of array in zig-zag fashion.
// The converted array should be in form a < b > c < d > e < f. The relative order of
// elements is same in the output i.e you have to iterate on the original array only.
//
// Example 1:
//
// Input:
// N = 7
// Arr[] = {4, 3, 7, 8, 6, 2, 1}
// Output: 3 7 4 8 2 6 1
// Explanation: 3 < 7 > 4 < 8 > 2 < 6 > 1
// Example 2:
//
// Input:
// N = 4
// Arr[] = {1, 4, 3, 2}
// Output: 1 4 2 3
// Explanation: 1 < 4 > 2 < 3
//
// Your Task:
// You don't need to read input or print anything.
// Your task is to complete the function zigZag() which takes the array of integers arr and n as parameters
// and returns void. You need to modify the array itself.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [4, 3, 7, 8, 6, 2, 1],
        expected: [3, 7, 4, 8, 2, 6, 1],
    },
    {
        input: [1, 4, 3, 2],
        expected: [1, 4, 2, 3],
    },
];

const swapLeftRight = (leftIndex, rightIndex, input) => {
    const right = input[rightIndex];

    input.splice(rightIndex, 1);
    input.splice(leftIndex, 0, right);
};

const zigZag = ({ input }) => {
    const { length } = input;

    for (let i = 0; i < length - 1; i++) {
        const a = input[i];
        const b = input[i + 1];

        if (!(i % 2)) {
            if (a > b) {
                swapLeftRight(i, i + 1, input);
            }
        } else {
            if (a < b) {
                swapLeftRight(i, i + 1, input);
            }
        }
    }

    return input;
};

testCases.forEach((test) => assert.deepEqual(test.expected, zigZag(test)));
