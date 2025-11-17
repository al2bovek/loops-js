// Write a function "makeBanner" which is given some text and returns a banner with a border surrounding the text. The border should stretch to the length of the text.

const makeBox = (text) => {
  let line = "";
  let lineInn = "";
  for (let i = 0; i < text.length + 4; i++) {
    line += "*";
  }

  lineInn = `${line[0]} ${text} ${line.at(-1)}`;

  console.log(line);
  console.log(lineInn);
  console.log(line);
  return "";
}
makeBox("Welcome to DigitalCrafts");
