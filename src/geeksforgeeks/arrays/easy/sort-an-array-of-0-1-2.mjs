// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
//
// Example 1:
//
// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output: 0 0 1 2 2
// Explanation: 0s 1s and 2s are segregated
// into ascending order.
//
// Example 2:
//
// Input:
// N = 3
// arr[] = {0 1 0}
// Output: 0 0 1
// Explanation: 0s 1s and 2s are segregated
// into ascending order.
//
// Your Task:
// You don't need to read input or print anything.
// Your task is to complete the function sort012() that takes array and n
// as input parameters and sorts the array in-place.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [0, 2, 1, 2, 0],
        expected: [0, 0, 1, 2, 2],
    },
    {
        input: [0, 1, 0],
        expected: [0, 0, 1],
    },
];

const sort012 = ({ input }) => {
    const { length } = input;

    let offset = 1;
    let count = 0;
    while (count < length) {
        const n = input[offset];

        if (n === 0 && offset > 1) {
            input.splice(offset, 1);
            input.unshift(n);
            count++;
            continue;
        }
        if (n === 2 && offset < length - 1) {
            input.splice(offset, 1);
            input.push(n);
            count++;
            continue;
        }
        count++;
        offset++;
    }

    return input;
};

testCases.forEach((test) => assert.deepEqual(sort012(test), test.expected));
