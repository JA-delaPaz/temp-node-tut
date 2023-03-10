// Every file is a module (by default)
// Modules - encapsulated code

const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");

sayHi(peter);
sayHi(john);
require("./7-mind-grenade");

// this file is connected to modules 4, 5, 6 and 7
