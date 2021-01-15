// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Medium
//
// Given an array arr of N integers. Find the contiguous sub-array with maximum sum.
//
// Example 1:
//
// Input:
// N = 5
// arr[] = {1,2,3,-2,5}
// Output: 9
// Explanation: Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which
// is a contiguous subarray.
//
// Example 2:
//
// Input:
// N = 4
// arr[] = {-1,-2,-3,-4}
// Output: -1
// Explanation: Max subarray sum is -1
// of element (-1)
//
// Your Task:
// You don't need to read input or print anything.
// The task is to complete the function maxSubarraySum() which takes arr and N as input
// parameters and returns the sum of subarray with maximum sum.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [1, 2, 3, -2, 5],
        expected: 9,
    },
    {
        input: [-1, -2, -3, -4],
        expected: -1,
    },
    {
        input: [-1, 4, -2, 3, 3, -4],
        expected: 8,
    },
];

const maxSubarraySum = (test) => {
    const { input } = test;
    const { length } = input;
    const arrOfSubArr = [];

    let sizeOfSubArray = 1;
    while (sizeOfSubArray <= length) {
        for (let i = 0; i < length; i++) {
            let subArr = [];

            for (let j = 0; j < sizeOfSubArray; j++) {
                if (i + j === length) {
                    break;
                }
                subArr.push(input[i + j]);
            }
            arrOfSubArr.push(subArr);
        }
        sizeOfSubArray++;
    }

    const sums = arrOfSubArr.reduce((acc, arr) => {
        acc.push(arr.reduce((acc, v) => acc + v, 0));
        return acc;
    }, []);

    return Math.max(...sums);
};

testCases.forEach((test) => assert.equal(test.expected, maxSubarraySum(test)));
