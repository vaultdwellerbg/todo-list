var express = require("express");
var mongoose = require("mongoose");
var config = require("./config");

var app = express();

var port = process.env.PORT || 1212;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString());
app.listen(port);