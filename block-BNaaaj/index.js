const os = require("os");
const fs = require("fs");

console.log(os.cpus());
console.log(os.freemem());
console.log(os.uptime())
console.log(os)
console.log('Welcome to Nodejs');

// =======================

// Buffer

const buffer = Buffer.alloc(12);
buffer.write("Welcome to Node.js tutorial");
console.log(buffer.toString())

// blocking

const blocking = fs.readFileSync("./index.md", {encoding: "utf8"});
console.log("blocking", blocking);
console.log("value blocking");

// non blocking

fs.readFile("./index.md", "utf8", (err, file) => {
    console.log("non blocking", file);
});
console.log("value non - blocking");


// http protcol
