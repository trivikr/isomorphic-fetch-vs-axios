const http = require("http");

http
  .createServer((request, response) => {
    response.end("Hello");
  })
  .listen(2000);
