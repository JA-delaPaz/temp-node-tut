const os = require("os");

//info about the user
const user = os.userInfo();
console.log(user);

//method the returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

//you can store multiple properties in an object

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
