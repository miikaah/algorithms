// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given an unsorted array of size N. Find the first element in array such that all of its
// left elements are smaller and all right elements to it are greater than it.
//
// Note: Left and right side elements can be equal to required element.
// And extreme elements cannot be required element.
//
// Example 1:
//
// Input:
// N = 4
// A[] = {4, 2, 5, 7}
// Output:
// 5
// Explanation:
// Elements on left of 5 are smaller than 5
// and on right of it are greater than 5.
//
// Example 2:
//
// Input:
// N = 3
// A[] = {11, 9, 12}
// Output:
// -1
//
// Your Task:
// You don't need to read input or print anything.
// Your task is to complete the function findElement() which takes the array A[] and its size N
// as inputs and returns the required element.
// If no such element present in array then return -1.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [4, 2, 5, 7],
        expected: 5,
    },
    {
        input: [11, 9, 12],
        expected: -1,
    },
];

const findElement = ({ input }) => {
    const { length } = input;

    for (let i = 1; i < length - 1; i++) {
        const element = input[i];
        const leftMax = Math.max(...input.slice(0, i));
        const rightMin = Math.min(...input.slice(i + 1, length));

        if (element >= leftMax && element <= rightMin) {
            return element;
        }
    }

    return -1;
};

testCases.forEach((test) => assert.equal(test.expected, findElement(test)));
