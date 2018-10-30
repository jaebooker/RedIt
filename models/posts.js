const mongoose = requore("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String, required: true},
    uri: { type: String, required: true },
    summary: { type: String, required: true }
});

module.exports = mongoose.model("Post", PostSchema);
