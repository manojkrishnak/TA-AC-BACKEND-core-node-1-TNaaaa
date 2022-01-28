const http = require("http");

http
  .createServer(function (req, res) {
    console.log("Method used is ",req.method)
    res.writeHead(201, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Node</h1>");
    res.end();
  })
  .listen(4444, () => console.log("server listening on 4444"));
