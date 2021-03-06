var express = require("express");
var app = express();
var api = require("./router/api");
var mock = require("./router/mock");

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/save", function(req, res) {
  res.send("Hello World    hhhhhhhhhhh!");
});
app.use("/api", api);
app.use("/mock", mock);
var server = app.listen(4000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});
