// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given an array A of positive integers. Your task is to find the leaders in the array.
// An element of array is leader if it is greater than or equal to all the elements to its right side.
// The rightmost element is always a leader.
//
// Example 1:
//
// Input:
// N = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17
// as it is greater than all the elements
// to its right.  Similarly, the next
// leader is 5. The right most element
// is always a leader so it is also
// included.
//
// Example 2:
//
// Input:
// N = 5
// A[] = {1,2,3,4,0}
// Output: 4 0
//
// Your Task:
// You don't need to read input or print anything.
// The task is to complete the function leader() which takes array A and N as input parameters
// and returns an array of leaders in order of their appearance.

import { strict as assert } from "assert";

const testCases = [
    {
        input: [16, 17, 4, 3, 5, 2],
        expected: "17 5 2",
    },
    {
        input: [1, 2, 3, 4, 0],
        expected: "4 0",
    },
];

const leader = ({ input }) => {
    const { length } = input;
    const leaders = [];

    for (let i = 0; i < length; i++) {
        let rightSum = 0;
        for (let j = i + 1; j < length; j++) {
            rightSum += input[j];
        }

        if (input[i] >= rightSum) {
            leaders.push(input[i]);
        }
    }

    return leaders.join(" ");
};

testCases.forEach((test) => assert.equal(leader(test), test.expected));
