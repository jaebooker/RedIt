const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const posts = require('./controllers/posts.js')(app);
const db = require('./data/reddit-clone-db');
app.use(bodyParser.json());
app.use(bodyParser.urlended({ extended: false }));
app.use(expressValidator());
app.get('/', (req, res) => res.send('Good Morning, Starshine, the Earth says Hello!'))
app.get('/posts/new', (req, res) => {
    res.render('posts-new', {});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
