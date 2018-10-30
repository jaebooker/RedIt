const Post = require('../models/post');
module.exports = app => {
    app.get('/', (req, res) => {
        Post.find({})
        .then(posts => {
            res.render("posts-index", { posts });
        })
        .catch(err => {
            console.log(err.message);
        });
    })
    app.get('/posts/new', (req, res) => {
        res.render('posts-new', {});
    })
    app.post("/posts/new", (req, res) => {
      //instantiate post model
    const post = new Post(req.body);
    //save instance to data
    post.save((err, post) => {
        //redirect to main
        return res.redirect(`/`);
    })
  });
  app.get("posts/:id", function(req, res) {
      //examine zee post
      Post.findById(req.params.id)
      .then(post => {
          res.render("post-show", { post });
      })
      .catch(err => {
          console.log(err.message);
      });
  });
};
