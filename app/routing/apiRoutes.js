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
        var totalDifference;

        for (var i = 0; i < friends.length; i++) {
            // var currentFriend = friends[i];
            // totalDifference = 0;

            // console.log(currentFriend.name);

            for (var j = 0; j < friends[i].scores.length; j++) {
                // var currentFriendScore = currentFriend.scores[j];
                // var currentUserScore = userScores[j];

                totalDifference += Math.abs(parseInt(userData.scores[j]) - parseInt(friends[i].scores[j]));
            }
            if (totalDifference <= bestMatch.friendsDifference) {
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendsDifference = totalDifference;
            }
            totalDifference = 0;
        }
        friends.push(userData);
        res.json(bestMatch);
    });

}