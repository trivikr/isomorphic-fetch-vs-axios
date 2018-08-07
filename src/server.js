const http = require("http");

http
  .createServer((request, response) => {
    //setTimeout(function() {
    response.end("Hello");
    //}, 2000);
  })
  .listen(3000);
