// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Easy
//
// Given a string S, find length of the longest substring with all distinct characters.
// For example, for input "abca", the output is 3 as "abc" is the longest substring with all distinct characters.
//
// Input:
// The first line of input contains an integer T denoting the number of test cases.
// The first line of each test case is String str.
//
// Output:
// Print length of smallest substring with maximum number of distinct characters.
// Note: The output substring should have all distinct characters.
//
// Constraints:
// 1 ≤ T ≤ 100
// 1 ≤ size of str ≤ 10000
//
// Example:
// Input:
// 2
// abababcdefababcdab
// geeksforgeeks
//
// Output:
// 6
// 7

import { strict as assert } from "assert";

const testCases = [
    {
        input: "abababcdefababcdab",
        expected: 6,
    },
    {
        input: "geeksforgeeks",
        expected: 7,
    },
];

const longestSubstring = ({ input }) => {
    const { length } = input;

    let sub = "";
    const subs = [];
    for (let i = 0; i < length; i++) {
        if (!sub.includes(input[i])) {
            sub += input[i];
        } else {
            subs.push(sub);
            sub = "";
        }
    }

    return subs.map((sub) => sub.length).sort((a, b) => b - a)[0];
};

testCases.forEach((test) => assert.equal(longestSubstring(test), test.expected));
