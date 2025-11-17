// Write a function `gcd` that returns the Greatest Common Divisor of two numbers. If no GCD exists, return 1.
const num_1 = +prompt("integer");
const num_2 = +prompt("integer");

const gcd = (num_1, num_2) => {
  const div_1 = [];
  const div_2 = [];
  for (let i = 2; i < num_1; i++) {
    if (num_1 % i === 0) {
      div_1.push(i);
    }
  }
   for (let i = 2; i < num_2; i++) {
      if (num_2 % i === 0) {
        div_2.push(i);
      }
    }
    let l;
    const div_3 = []
    div_1.length > div_2.length ? l = div_2.length : l = div_1.length;
    for (let i = 0; i < l; i++) {
       for (let j = 0; j < l; j++) {
     if (div_1[i] === div_2[j]) {
      div_3.push(div_1[i]);
     }
    }
    }
  return div_3.at(-1);
}
document.getElementById("loop").innerHTML = gcd(num_1, num_2);
