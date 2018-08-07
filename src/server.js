const express = require("express");
const app = express();

app
  .get("/", (request, response) => {
    //setTimeout(function() {
    response.end("Hello");
    //}, 2000);
  })
  .listen(3000);
