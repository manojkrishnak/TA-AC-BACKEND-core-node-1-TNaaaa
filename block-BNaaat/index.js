const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.method === "GET" && req.url === "/file") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.readFile("./node.html", "utf8", (err, content) => {
        if (err) {
          console.log(err);
          return;
        }
        res.end(content);
      });
    }else if (req.method === "GET" && req.url === "/stream") {
      res.writeHead(200, { "Content-Type": "text/html" });
      let stream = fs.createReadStream("./node.html", {encoding: "utf8"});
      stream.on("error", function (err) {
        console.log(err);
      });
      stream.on("data", function (data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }else{
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<p>Page not Found</p>");
    }
  })
  .listen(4444, () => console.log("listening"));
