// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given an array A of N positive numbers. The task is to find the first Equilibium Point in the array.
// Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.
//
// Example 1:
//
// Input:
// N = 1
// A[] = {1}
// Output: 1
// Explanation: Since its the only
// element hence its the only equilibrium
// point.
// Example 2:
//
// Input:
// N = 5
// A[] = {1,3,5,2,2}
// Output: 3
// Explanation: For second test case
// equilibrium point is at position 3
// as elements before it (1+3) =
// elements after it (2+2).
//
// Your Task:
// The task is to complete the function equilibriumPoint() which takes the array and N as input parameters
// and returns the point of equilibrium. Return -1 if no such point exists.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [1],
        expected: 0,
    },
    {
        input: [1, 3, 5, 2, 2],
        expected: 2,
    },
    {
        input: [1, 1, 1, 1, 1, 3, 5],
        expected: 5,
    },
];

const equilibriumPoint = ({ input }) => {
    const { length } = input;

    if (length === 1) {
        return 0;
    }
    if (length === 2) {
        return -1;
    }

    for (let i = 1; i < length; i++) {
        let leftSum = 0;
        for (let j = i - 1; j > -1; j--) {
            leftSum += input[j];
        }
        let rightSum = 0;
        for (let j = i + 1; j < length; j++) {
            rightSum += input[j];
        }

        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
};

testCases.forEach((test) => assert.equal(equilibriumPoint(test), test.expected));
