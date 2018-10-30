const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const posts = require('./controllers/posts.js')(app);
const db = require('./data/reddit-clone-db');
mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb://localhost/redditclone",
    { useMongoClient: true }
);
mongoose.connection.on("error", console.error.bind(console, "failed to connect to the data: "));
mongoose.set('debug', true);
app.use(bodyParser.json());
app.use(bodyParser.urlended({ extended: false }));
app.use(expressValidator());
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
