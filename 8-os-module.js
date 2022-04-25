//OS module - help with OS and server.
const os = require('os');


//info about current user
const user = os.userInfo();

console.log(user);

//method return the system up time in seconds

console.log(`The System uptime is ${os.uptime} seconds`);