// https://thelimberlambda.com/2015/09/11/what-is-a-senior-developer/
// https://en.wikipedia.org/wiki/Bisection_method
//
// y = 1.66
//
// 1.66 = x^2 - 3          | - 1.66
// x^2 - 3 - 1.66 = 0      | + 4.66
// x^2 = 4.66              | sqrt
// x = sqrt(4.66)
//
// 1.66 = x * ln(x)        | - 1.66
// x * ln(x) - 1.66 = 0    | + 1.66
// ln(x^x) = 1.66          |
// e^ln(x^x) = e^1.66      |
// x^x = e^1.66            |
// x^x = 2.71828^1.66      |
//

const f = (x) => Math.pow(x, 2) - 3;
const g = (x) => x * Math.log(x);
const diff = (x) => g(x) - f(x);
const threshold = Number(process.argv[2]) || 0.001;

// The proposed solution

const start = Date.now();

const findRoot = (left, right) => {
    if (Math.abs(left - right) < threshold) {
        return left;
    }

    const mid = (left + right) / 2;

    return Math.sign(diff(left)) === Math.sign(diff(mid))
        ? findRoot(mid, right)
        : findRoot(left, mid);
};

console.log("-----------------------------------------");
console.log("Proposed recursive binary search solution");
console.log("threshold: ", threshold);
console.log("root: ", findRoot(threshold, 4));
console.log(`time: ${Date.now() - start} milliseconds`);
console.log("-----------------------------------------");
