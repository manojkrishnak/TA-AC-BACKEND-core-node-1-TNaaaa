const http = require("http");

http.createServer(function(req, res){
    if(req.method === "GET" && req.url === "/"){
        res.setHeader("Content-Type", "text/plain");
        res.write("Welcome to homepage");
        res.end();
    }else if(req.method === "GET" && req.url === "/about"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h2>this is all about NodeJS</h2>");
        res.end();
    }else if(req.method === "POST" && req.url === "/about"){
        res.setHeader("Content-Type", "application/json");
        res.write("{message: 'this is a post request'}");
        res.end();
    }else{
        res.statusCode === "404";
        res.setHeader("Content-Type", "text/html");
        res.write("Page not found");
        res.end();
    }
}).listen(4444, () => console.log("listening"))