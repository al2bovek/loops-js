// Write a function `numberJoinerFancy` which does the same thing as `numberJoinerWhile`, except it takes an optional third argument specifying the separator between the numbers.
const num_start = prompt("a start number");
const num_end = prompt("a end number");
const separator = prompt("separator");

const numberJoinerFancy = (num_start, num_end, separator = "_") => {
    if (num_start > num_end) {
        [num_start, num_end] = [num_end, num_start];
    }
    let goal = "";
    for (let i = num_start; i < num_end; i++) {
        goal += i + separator;
    }
    return goal += num_end;
}
// document.getElementById("loop").innerHTML = numberJoinerFancy(num_start, num_end);

document.getElementById("loop").innerHTML = numberJoinerFancy(num_start, num_end, separator);
