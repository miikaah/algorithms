// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Basic
//
// Given an array arr of N integers, write a function that returns true if there is a triplet (a, b, c)
// that satisfies a2 + b2 = c2, otherwise false.
//
// Example 1:
//
// Input:
// N = 5
// Arr[] = {3, 2, 4, 6, 5}
// Output: Yes
// Explanation: a=3, b=4, and c=5 forms a
// pythagorean triplet.
//
// Example 2:
//
// Input:
// N = 3
// Arr[] = {3, 8, 5}
// Output: No
// Explanation: No such triplet possible.
//
// Your Task:
// Complete the function checkTriplet() which takes an array arr, single integer n,
// as input parameters and returns boolean denoting answer to the problem.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [3, 2, 4, 6, 5],
        expected: true,
    },
    {
        input: [3, 8, 5],
        expected: false,
    },
];

const hasPythagoreanTriplet = ({ input }) => {
    const { length } = input;

    for (let i = 0; i < length; i++) {
        const a = Math.pow(input[i], 2);

        for (let j = i + 1; j < length; j++) {
            const b = Math.pow(input[j], 2);

            for (let k = j + 1; k < length; k++) {
                const c = Math.pow(input[k], 2);

                if (a + b === c) {
                    return true;
                }
            }
        }
    }

    return false;
};

testCases.forEach((test) => assert.equal(hasPythagoreanTriplet(test), test.expected));
