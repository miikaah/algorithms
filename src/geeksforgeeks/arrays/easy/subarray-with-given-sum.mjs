// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given an unsorted array A of size N of non-negative integers,
// find a continuous sub-array which adds to a given number S.
//
// Input:
// The first line of input contains an integer T denoting the number of test cases.
// Then T test cases follow. Each test case consists of two lines.
// The first line of each test case is N and S, where N is the size of array and S is the sum.
// The second line of each test case contains N space separated integers denoting the array elements.
//
// Output:
// For each testcase, in a new line, print the starting and ending positions(1 indexing)
// of first such occuring subarray from the left if sum equals to subarray, else print -1.
//
// Constraints:
// 1 <= T <= 100
// 1 <= N <= 107
// 1 <= Ai <= 1010
//
// Example:
// Input:
// 2
// 5 12
// 1 2 3 7 5
// 10 15
// 1 2 3 4 5 6 7 8 9 10
// Output:
// 2 4
// 1 5
//
// Suomeksi:
//
// Printtaa ensimmäinen ja viimeinen taulukon indeksi (indeksointi alkaa 1:stä)
// jos näiden indeksien sisälle jäävä integerien summa on sama kuin syötteen toinen integer,
// muuten printtaa -1.

import { strict as assert } from "assert";

const testCases = [
    {
        sum: 12,
        input: [1, 2, 3, 7, 5],
        expected: "2 4",
    },
    {
        sum: 15,
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        expected: "1 5",
    },
    {
        sum: 42,
        input: [9, 5, 3, 2],
        expected: "-1",
    },
];

const output = (test) => {
    const { input, sum } = test;
    const { length } = input;
    let offset = 0;

    for (let i = 0; i < length; i++) {
        let mSum = 0;

        for (let j = offset; j < length; j++) {
            mSum += input[j];
            if (sum === mSum) {
                return `${i + 1} ${j + 1}`;
            }
        }
        offset += 1;
    }

    return "-1";
};

testCases.forEach((test) => assert.equal(output(test), test.expected));
