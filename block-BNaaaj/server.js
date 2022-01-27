const url = require("url");
const parsedUrl = new URL("https://airindia.com/fares/calculate?from=delhi&to=detroit");
console.log(parsedUrl.searchParams)
console.log(parsedUrl.protocol)
console.log(parsedUrl.pathname)