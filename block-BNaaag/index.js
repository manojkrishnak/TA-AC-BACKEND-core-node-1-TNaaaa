const fs = require("fs");

fs.readFile("./index.md", "utf8",(err, file) => {
    console.log(file)
})


const fileContent = fs.readFileSync("./index.md", {encoding: "utf8"});
console.log(fileContent);


const buffer = Buffer.alloc(10);

buffer.write("Welcome to Buffer");
console.log(buffer.toString())
