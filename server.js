const http = require("http");
// const http = require("node:http"); same as above == node js core module 
const server = http.createServer(function (req, res) {
   if(req.url === "/getSecretData"){
    res.end(" I like you.... this is the secret 💓💓💓💓")
   }
    res.end("Hello Create server world"); // close this 
});

server.listen(4444)