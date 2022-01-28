function server(port, cb) {
  const http = require("http");

  http
    .createServer(function (req, res) {
      cb(req, res);
    })
    .listen(port);
}

