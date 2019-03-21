// LOAD DATA
var friends = require("../data/friends.js");

// ROUTING

module.exports = function (app) {
    //  API GET requests
    // BELOW CODE HANDLES WHEN USERES "VISIT" A PAGE
    //  in each of the below cases wehn a user visits a link
    // (ex localhose:PORT/api.admin ... they are shown a JSON of the data in the table)
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendsDifference: Infinity //scores 
        };
        console.log(req.body);

        // req.body captures what is in the form
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);
        var totalDifferences = 0;

        for (var i = 0; i < friends.length; i++) {
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if (totalDiffrence <= bestMatch.friendsDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendsDifference = friends[i].friendsDifference;
            }
        }

        friends.push(userData);
        res.json(bestMatch);

    });

}