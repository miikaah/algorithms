// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and
// for the multiples of five print “Buzz”. For numbers which are multiples
// of both three and five print “FizzBuzz”.

const isDivisibleBy = (denom, num) => Math.cos((num / denom) * 2 * Math.PI) === 1;

for (let i = 1; i < 101; i++) {
    console.log(`${isDivisibleBy(3, i) ? "Fizz" : ""}${isDivisibleBy(5, i) ? "Buzz" : ""}` || i);
}
