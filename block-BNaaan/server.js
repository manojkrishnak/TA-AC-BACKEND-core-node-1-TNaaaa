const http = require("http");

http.createServer(function(req, res){
    console.log(req.headers);
    console.log(req.method, req.url);
    res.end("djendj");
}).listen(4000, () => console.log("runnning server"));