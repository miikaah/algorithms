// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given an array of integers. Find the Inversion Count in the array.
//
// Inversion Count: For an array, inversion count indicates how far (or close)
// the array is from being sorted. If array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum.
// Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
//
//
// Example 1:
//
// Input: N = 5, arr[] = {2, 4, 1, 3, 5}
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5
// has three inversions (2, 1), (4, 1), (4, 3).
// Example 2:
//
// Input: N = 5
// arr[] = {2, 3, 4, 5, 6}
// Output: 0
// Explanation: As the sequence is already
// sorted so there is no inversion count.
// Example 3:
//
// Input: N = 3, arr[] = {10, 10, 10}
// Output: 0
// Explanation: As all the elements of array
// are same, so there is no inversion count.
//
// Your Task:
// You don't need to read input or print anything. Your task is to complete the
// function inversionCount() which takes the array arr[] and the size of
// the array as inputs and returns the inversion count of the given array.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [2, 4, 1, 3, 5],
        expected: 3,
    },
    {
        input: [2, 3, 4, 5, 6],
        expected: 0,
    },
    {
        input: [10, 10, 10],
        expected: 0,
    },
];

const inversionCount = ({ input }) => {
    const { length } = input;

    let sum = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (input[i] > input[j]) {
                sum++;
            }
        }
    }

    return sum;
};

testCases.forEach((test) => assert.equal(test.expected, inversionCount(test)));
