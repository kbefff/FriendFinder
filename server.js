// step 1) set up server
var express = require('express');
var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));

app.use(express.json())


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function(){
    console.log("app listenint on PORT: " + PORT);
});