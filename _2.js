// Write a function `fizzbuzz` that returns the fizzbuzz string for an input number.

const num = +prompt("number");


const fizzbuzz = (num) => {
    let goal = "";
    for (let i = 1; i <= num; i++) {
if (i % 3 !== 0 && i % 5 !== 0) {
    goal += ".";
}
if (i % 3 === 0 && i % 5 !== 0) {
    goal += "Fizz";
}
if (i % 3 !== 0 && i % 5 === 0) {
    goal += "Buzz";
}
if (i % 3 === 0 && i % 5 === 0) {
    goal += "Fizzbuzz";
}
    }
    return goal;
}
document.getElementById("loop").innerHTML = fizzbuzz(num);