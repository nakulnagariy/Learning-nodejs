const fs = require("fs");
// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);

// const parseData = JSON.parse(bookJSON);
// console.log(parseData.title);

const dataBuffer = fs.readFileSync("./1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Nakul";

const updatedData = JSON.stringify(data);
fs.writeFileSync("./1-json.json", updatedData);
console.log(data.name);
