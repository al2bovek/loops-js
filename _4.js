// Write a function `numberJoinerFor` which does the same thing as `numberJoinerWhile`, except using a `for` loop internally.

const num_start = prompt("a start number");
const num_end = prompt("a end number");


const numberJoinerFor = (num_start, num_end) => {
    if (num_start > num_end) {
        [num_start, num_end] = [num_end, num_start];
    }
    let goal = "";
    for (let i = num_start; i < num_end; i++) {
        goal += i + "_";
    }
    return goal += num_end;
}

document.getElementById("loop").innerHTML = numberJoinerFor(num_start, num_end);