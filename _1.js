// Given two integers, function returns the sum of all integers between those two integers, inclusive.

const int_1 = +prompt("integer");
const int_2 = +prompt("integer");

const sumOfRange = (int_1, int_2) => {
    let sum = 0;
    for (let i = int_1; i <= int_2; i++) {
        sum += i;
    }
    return sum;
}
const sumOfRange_2 = (int_1, int_2) => {
    let sum = int_1;
    for (let i = 2; i <= int_2; i++) {
        sum += i;
    }
    return sum;
}
document.getElementById("loop").innerHTML = sumOfRange_2(int_1, int_2);

// fizzbuzz

const fizzbuzz = () => {
  
}