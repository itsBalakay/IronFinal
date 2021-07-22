const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  club: String,
  year: Number,
  player: String,
  league: String,
  notes: String,
  imageUrl: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Post", postSchema);
