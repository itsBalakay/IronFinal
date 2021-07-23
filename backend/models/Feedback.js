const { Schema, model } = require("mongoose");

const feedbackSchema = new Schema({
  name: String,
  email: String,
  message: String,
  rating: String,
  //   userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Feedback", feedbackSchema);
