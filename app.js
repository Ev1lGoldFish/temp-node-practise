//npm(node package manager) - global command comes with node
//npm --version

//local dependency - install a package to use it only in this particaluar project
//npm i <packageName>

//global dependency - install a package to use it in any project
//npm install -g <packageName>

//package.json - manifest files(stores important info about project.package)
//manual approach(create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);
