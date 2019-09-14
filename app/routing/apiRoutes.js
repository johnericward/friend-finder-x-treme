// ========================================================
// LOAD DATA

// ========================================================

var friends = require("../data/friends");

// =================================================
// ROUTING
// =================================================

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        res.json(true);
    });
  
    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendData.length = 0;
    
    
        res.json({ ok: true });
    });


};





