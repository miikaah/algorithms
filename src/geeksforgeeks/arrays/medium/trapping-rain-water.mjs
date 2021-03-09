// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Medium
//
// Given an array arr[] of N non-negative integers representing the height of blocks.
// If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.
//
// Example 1:
//
// Input:
// N = 6
// arr[] = {3,0,0,2,0,4}
// Output: 10
// Explanation:
//
// Example 2:
//
// Input:
// N = 4
// arr[] = {7,4,0,9}
// Output: 10
// Explanation: Water trapped by above
// block of height 4 is 3 units and above
// block of height 0 is 7 units. So, the
// total unit of water trapped is 10 units.
//
// Example 3:
//
// Input:
// N = 3
// arr[] = {6,9,9}
// Output: 0
// Explanation: No water will be trapped.
//
// Your Task:
// You don'y need to read input or print anything.
// The task is to complete the function trappingWater() which takes arr and N as input parameters
// and returns the total amount of water that can be trapped.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [3, 0, 0, 2, 0, 4],
        expected: 10,
    },
    {
        input: [7, 4, 0, 9],
        expected: 10,
    },
    {
        input: [6, 9, 9],
        expected: 0,
    },
];

const trappingWater = ({ input }) => {
    const { length } = input;
    const left = input[0];
    const right = input[length - 1];
    const maxHeight = Math.min(left, right);

    let maxRainWater = (length - 2) * maxHeight;
    for (let i = 1; i < length - 1; i++) {
        maxRainWater -= input[i];
    }

    return maxRainWater >= 0 ? maxRainWater : 0;
};

testCases.forEach((test) => assert.equal(trappingWater(test), test.expected));
