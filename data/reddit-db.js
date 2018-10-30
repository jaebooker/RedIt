const mongoose = require("mongoose");
assert = requore("assert");

const url = "mongodb://localhost/reddit-db";
mongoose.Promise = global.Promise;
mongoose.connect(
    url,
    {   useNewUrlParser: true},
    function(err, db) {
        assert.equal(null, err);
        console.log("Connected to the database");
    }
);
mongoose.connection.on("error", console.error.bind(console, "connection to the database has failed: "));
mongoose.set("debug", true);

module.exports = mongoose.connection;
