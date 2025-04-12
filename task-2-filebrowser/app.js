import fs from "fs";
import prompt from "picoprompt";

const readDir = (path) => {
  try {
    return fs.readdirSync(path);
  } catch (error) {
    console.log(`${path} - invalid path for listing`);
    process.exit();
  }
};

const printArray = (array) => {
  let i = 0;
  while (i < array.length) {
    console.log(`${i} - ${array[i]}`);
    i++;
  }
};

console.clear();
let myOrdner = process.argv[2];
if (myOrdner == undefined) {
  console.log("Must provide starting path as argument");
  process.exit();
}

while (true) {
  let myArray = readDir(myOrdner);
  printArray(myArray);
  console.log(`Viewing ${myOrdner}`);
  let ordnerNummer = prompt("Enter number of next Folder: ");
  myOrdner += "/" + myArray[ordnerNummer];
}
