// https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/
//
// Basic
//
// Given a singly linked list of N nodes. The task is to find the middle of the linked list.
// For example, if given linked list is 1->2->3->4->5 then the output should be 3.
// If there are even nodes, then there would be two middle nodes, we need to print
// the second middle element. For example, if given linked list is 1->2->3->4->5->6 then the output should be 4.
//
// Example 1:
//
// Input:
// LinkedList: 1->2->3->4->5
// Output: 3
//
// Example 2:
//
// Input:
// LinkedList: 2->4->6->7->5->1
// Output: 7
//
// Your Task:
// The task is to complete the function getMiddle() which takes a head reference as the only argument
// and should return the data at the middle node of the linked list.

import { strict as assert } from "assert";

class Node {
    constructor(root) {
        this.root = root;
    }

    setNext(next) {
        this.nextNode = next;
        return next;
    }

    next() {
        return this.nextNode;
    }

    value() {
        return this.root;
    }
}

class LinkedList {
    constructor(elements) {
        const nodes = elements.map((el) => new Node(el));

        let root = nodes[0];
        nodes.slice(1).forEach((node) => {
            root = root.setNext(node);
        });

        this.head = nodes[0];
    }

    root() {
        return this.head;
    }

    next() {
        return this.head.next();
    }
}

const testCases = [
    {
        input: new LinkedList([1, 2, 3, 4, 5]),
        expected: 3,
    },
    {
        input: new LinkedList([2, 4, 6, 7, 5, 1]),
        expected: 7,
    },
];

const getMiddle = (test) => {
    const { input } = test;

    let root = input.root();
    let count = 0;
    while (root) {
        root = root.next();
        count++;
    }

    let middle;
    if (count % 2) {
        middle = Math.floor(count / 2);
    } else {
        middle = Math.ceil(count / 2);
    }

    root = input.root();
    while (middle) {
        root = root.next();
        middle--;
    }

    return root.value();
};

testCases.forEach((test) => assert.equal(test.expected, getMiddle(test)));
