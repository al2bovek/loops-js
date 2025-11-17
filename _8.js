// Write a function `makeSquare` which is given a size and returns a square of that size using asterisks.

const makeSquare = (integer) => {
  let line = "";
  for (let i = 0; i < integer; i++) {
    line += "*";
  }
  for (let i = 0; i < integer; i++) {
    console.log(line);
  }
  return "";
}
makeSquare(5);