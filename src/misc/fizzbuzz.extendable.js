// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and
// for the multiples of five print “Buzz”. For numbers which are multiples
// of both three and five print “FizzBuzz”.

// Extendable logic -> bigger numbers override smaller

for (let i = 1; i < 101; i++) {
    let result = "";

    if (!(i % 15)) {
        result += "FizzBuzz";
    } else if (!(i % 7)) {
        result += "Bazz";
    } else if (!(i % 5)) {
        result += "Buzz";
    } else if (!(i % 3)) {
        result += "Fizz";
    }

    console.log(result || i);
}
