var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendsDifference: 1000
        };
        console.log(req.body);

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