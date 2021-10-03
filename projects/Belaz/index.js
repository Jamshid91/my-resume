const http = require("http");
const fs = require("fs");

const template = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url == "/index.html") {
    res.end(template);
  }
});

server.listen(3000);

// const express = require("express");

// const app = express();

// app.use("/", (req, res) => {
//   res.send("<h1>Hello Express</h1>");
// });

// app.listen(3000);
