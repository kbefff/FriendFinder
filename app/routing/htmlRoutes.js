var path = require('path');

module.exports = function (app) {
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });


    // "*" is the default page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}