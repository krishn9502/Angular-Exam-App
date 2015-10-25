var express = require("express"), app = express(), path = require("path");
app.use(express["static"](__dirname + "/public"));
app.listen(3000);