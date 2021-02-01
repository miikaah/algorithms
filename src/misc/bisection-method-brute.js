const f = (x) => Math.pow(x, 2) - 3;
const g = (x) => x * Math.log(x);
const threshold = Number(process.argv[2]) || 0.001;

const start = Date.now();

const root = (x) => {
    if (Math.abs(f(x) - g(x)) < threshold) {
        return x;
    }

    return root(x + threshold);
};

console.log("-------------------------");
console.log("Naive brute force recursion");
console.log("threshold: ", threshold);
console.log("root: ", root(threshold));
console.log(`time: ${Date.now() - start} milliseconds`);
console.log("-------------------------");
