const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    fs.createReadStream(path.join(__dirname + "/index.html")).pipe(res);
  })
  .listen(2000);
