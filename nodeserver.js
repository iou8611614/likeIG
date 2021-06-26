const express = require("express");
const path = require("path");
const { PORT } = require("./serverConfig");
const app = express();

app.use(express.static("dist"));
console.log(express.static("./dist"));

app.listen(PORT, "127.0.0.1", function() {
  console.log("Server Start at 127.0.0.1:", PORT);
});
