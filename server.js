// step 1) set up server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

// create application/json parser
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false})

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/**json'}))

// parse some custom thing into a Buffer
app.use(bodyParser.text({type: 'text/html'}))

app.listen(PORT, function(){
    console.log("app listenint on PORT: " + PORT);
});