const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Node</h1>");
    res.end();
  })
  .listen(4444, () => console.log("server listening on 4444"));
