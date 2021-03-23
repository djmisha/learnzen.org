import data from "./poemData.json";

const parsedData = data.poems;

let dataArray = [];

for (let i = 0; i < parsedData.length; i++) {
    dataArray.push(parsedData[i]);
}

export default dataArray;
