// npm startimport React from "react";
import data from "./poemData.json";

/* Get Our Data into an Array from JSON FORMAT*/

const parsedData = data.poems;
let dataArray = [];

for (let i = 0; i < parsedData.length; i++) {
    dataArray.push(parsedData[i]);
}

export default dataArray;
