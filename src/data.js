import data from "./poemData.json";

/* Get Our Data into an Array from JSON FORMAT*/

const parsedData = data.poems;
// const parsedData = data.poems;
// JSON.parse(this.responseText)
// console.log(parsedData);
let dataArray = [];

for (let i = 0; i < parsedData.length; i++) {
    // console.log(parsedData[i].content);
    dataArray.push(parsedData[i]);
}

export default dataArray;
