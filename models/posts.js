const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    createdAt: { type: Date },
    updatedAt: { type: Date },
    title: { type: String, required: true},
    uri: { type: String, required: true },
    summary: { type: String, required: true }
});

PostSchema.pre("save", function(next) {
    //createdAt and updatedAt
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = mongoose.model("Post", PostSchema);
