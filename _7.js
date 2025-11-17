//  Write a function `factors` which is given a number and returns an array containing all its factors.

const integer = prompt("integer");
const factors = (integer) => {
  const goal = [];
  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0) {
      goal.push(i)
    }
  }
  return goal;
}
document.getElementById("loop").innerHTML = factors(integer);