// Write a function "makeBox" which is given a width and height and returns a hollow box of those dimensions.

const makeBox = (integer_1, integer_2) => {
  let line = "";
  let lineTemp = "";
  let lineInn = "";
  for (let i = 0; i < integer_1; i++) {
    line += "*";
  }
   for (let i = 0; i < integer_1 - 2; i++) {
    lineTemp += " ";
  }
  lineInn = line[0] + lineTemp + line.at(-1);

  console.log(line);
  for (let i = 0; i < integer_2 - 2; i++) {
    console.log(lineInn);
  }
  console.log(line);
  return "";
}
makeBox(6, 3);
