const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.get("/main.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/main.js"));
});

app.get("/hello", (req, res) => {
  setTimeout(() => res.end("Hello"), 100);
});

app.listen(3000);
