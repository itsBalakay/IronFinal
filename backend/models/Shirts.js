const { Schema, model } = require("mongoose");

const shirtSchema = new Schema({
  club: String,
  year: Number,
  player: String,
  league: String,
  size: String,
  condition: Number,
  price: Number,
  notes: String,
  imageUrl: [String],
  //   userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Shirt", shirtSchema);
