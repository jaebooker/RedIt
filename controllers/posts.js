const Post = require('../models/post');
module.exports = app => {
  app.post("/posts/new", (req, res) => {
      //instantiate post model
    const post = new Post(req.body);
    //save instance to data
    post.save((err, post) => {
        //redirect to main
        return res.redirect(`/`);
    })
  });
};
