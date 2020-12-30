// https://twitter.com/JustineTunney/status/645304018554761217/photo/1

import { strict as assert } from "assert";

const rn1 = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};
const rn1Keys = Object.keys(rn1);

const rn2 = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
};
const rn2Keys = Object.keys(rn2);

const combined = { ...rn1, ...rn2 };
const rr = Object.keys(combined)
    .sort((a, b) => combined[b] - combined[a])
    .reduce((acc, key) => {
        acc.push([combined[key], key]);
        return acc;
    }, []);

const rtoi = (r) => {
    const r2 = r.slice(0, 2);
    if (rn2Keys.includes(r2)) {
        return rn2[r2] + rtoi(r.slice(2));
    }

    const r1 = r.slice(0, 1);
    if (rn1Keys.includes(r1)) {
        return rn1[r1] + rtoi(r.slice(1));
    }

    return 0;
};

const itor = (i, ret = [""], lookup = rr) => {
    if (!lookup[0]) {
        return ret.join("");
    }

    const [num, numeral] = lookup[0];
    const times = Math.floor(i / num);
    const isInLookup = !!times;
    const remainder = i % num;

    if (isInLookup) {
        for (let j = 0; j < times; j++) {
            ret.push(numeral);
        }
    }

    return itor(remainder, ret, lookup.slice(1));
};

const [, , command, value] = process.argv;

if (command === "rtoi") {
    console.log(rtoi(value));
    process.exit(0);
}

if (command === "itor") {
    console.log(itor(Number(value)));
    process.exit(0);
}

assert.equal(rtoi(""), 0);
assert.equal(rtoi("I"), 1);
assert.equal(rtoi("IV"), 4);
assert.equal(rtoi("XIV"), 14);
assert.equal(rtoi("CXLV"), 145);
assert.equal(rtoi("CXLVIII"), 148);
assert.equal(rtoi("CMX"), 910);
assert.equal(rtoi("MI"), 1001);
assert.equal(rtoi("MCCXXXIV"), 1234);
assert.equal(rtoi("MCCXCIV"), 1294);

assert.equal(itor(0), "");
assert.equal(itor(1), "I");
assert.equal(itor(4), "IV");
assert.equal(itor(14), "XIV");
assert.equal(itor(145), "CXLV");
assert.equal(itor(148), "CXLVIII");
assert.equal(itor(910), "CMX");
assert.equal(itor(1003), "MIII");
assert.equal(itor(1234), "MCCXXXIV");
assert.equal(itor(1294), "MCCXCIV");
assert.equal(itor(2020), "MMXX");

// Solution in unary

const itorUnary = (i) => {
    const ret = [""];

    let unary = Array(i).fill("I").join("");
    for (let j = 0; j < rr.length; j++) {
        const [num, numeral] = rr[j];
        const times = Math.floor(unary.length / num);
        const isInLookup = !!times;

        if (isInLookup) {
            unary = unary.slice(num * times);

            for (let j = 0; j < times; j++) {
                ret.push(numeral);
            }
        }
    }

    return ret.join("");
};

assert.equal(itorUnary(0), "");
assert.equal(itorUnary(1), "I");
assert.equal(itorUnary(4), "IV");
assert.equal(itorUnary(14), "XIV");
assert.equal(itorUnary(145), "CXLV");
assert.equal(itorUnary(148), "CXLVIII");
assert.equal(itorUnary(910), "CMX");
assert.equal(itorUnary(1003), "MIII");
assert.equal(itorUnary(1234), "MCCXXXIV");
assert.equal(itorUnary(1294), "MCCXCIV");
assert.equal(itorUnary(2020), "MMXX");
