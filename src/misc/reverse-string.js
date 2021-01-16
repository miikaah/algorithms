// write a function that reverses a string.

const reverse = (reverseThis) => {
    const reversed = [];

    for (let i = reverseThis.length; i >= 0; i--) {
        reversed.push(reverseThis.charAt(i));
    }

    return reversed.join("");
};

console.log(reverse("reverse"));

const reverse2 = (r) => r.split("").reverse().join("");

console.log(reverse2("reverse this too"));

const rev3 = (acc, v) => `${v}${acc}`;

console.log("reverse this three".split("").reduce(rev3, ""));
