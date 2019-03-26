var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
    console.log("app listenint on PORT: " + PORT);
});

app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/index.html"));
  });