const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
const Post = require('../models/posts')

chai.use(chaiHttp)

describe('site', () => {
    it('Should have main', (done) => {
    chai.request('localhost:3000')
    .get('/')
    .end((err, res) => {
        if (err) {
            done(err)
        }
        res.status.should.be.equal(200)
        done() //if successful
        })
    })
    it('Should create new post', (done) => {
        Post.findOneAndRemove(post, function() {
        Post.find(function(err, posts) {
            var postCount = Posts.count;

            var post = { title: "The World Is Not Enough", url: "https://www.google.com", summary: "post summary" }
        })
        chai.request('localhost:3000')
        .post('/posts/new')
        .end((err, res) => {
            Post.find(function(err, posts) {
                postCount.should.be.equal(post + 1);
            if (err) {
                done(err)
            }
            res.status.should.be.equal(200)
            done()
            });
        });
    });
});
});
