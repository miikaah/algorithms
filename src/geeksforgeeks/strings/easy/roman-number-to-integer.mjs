// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given a string in roman no format (s)  your task is to convert it to an integer . Various symbols and their values are given below.
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000
//
// Example 1:
//
// Input:
// s = V
// Output: 5
// Example 2:
//
// Input:
// s = III
// Output: 3
// Your Task:
// Complete the function romanToDecimal() which takes an string as input parameter and returns the equivalent decimal number.

import { strict as assert } from "assert";

const testCases = [
    {
        input: "V",
        expected: 5,
    },
    {
        input: "III",
        expected: 3,
    },
    {
        input: "CMX",
        expected: 910,
    },
    {
        input: "MMXX",
        expected: 2020,
    },
];

const rn1 = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

const rn2 = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
};

const romanToDecimal = (r) => {
    const r2 = r.slice(0, 2);
    if (rn2[r2]) {
        return rn2[r2] + romanToDecimal(r.slice(2));
    }

    const r1 = r.slice(0, 1);
    if (rn1[r1]) {
        return rn1[r1] + romanToDecimal(r.slice(1));
    }

    return 0;
};

testCases.forEach((test) => assert.equal(romanToDecimal(test.input), test.expected));
