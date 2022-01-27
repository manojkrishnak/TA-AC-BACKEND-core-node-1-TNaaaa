const http = require("http");

function handleReq(req, res) {
  console.log(req);
  console.log("--------------------------------------");
  console.log(res);
  res.end("Welcome to Node js");
}

//127.0.0.1 is loopback address (also know as localhost)
// 0.0.0.0 is non routable address used to desingate invalid, unknown, not applicable target. In the language of Servers it is considerd as "all IPV4 addresses on local machine"

let server = http
  .createServer(handleReq)
  .listen(4000, () =>
    console.log(`Server running on ${server.address().port}`)
  );
