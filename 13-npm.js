// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

//package.json - a manifest file (stores important information regarding project)
//npm init

// run this command in PS for P&G laptops
// npm set strict-ssl false

// trying out one of the installed packages - lodash

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
