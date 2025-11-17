// Write a function `numberJoinerWhile` which is given a start number and an end number.

const num_start = prompt("a start number");
const num_end = prompt("a end number");

const numberJoinerWhile = (num_start, num_end) => {
    if (num_start > num_end) {
        [num_start, num_end] = [num_end, num_start];
    }
    let goal = "";
    let i = num_start
    while (i <= num_end) {
        goal += i + "_";
        i++;
    }
    return goal.substring(0, goal.length - 1);
}

document.getElementById("loop").innerHTML = numberJoinerWhile(num_start, num_end);