const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  platform: {
    type: [String],
    required: true
  },
  mode: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  artwork: {
    type: String,
    required: true
  },/*
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },*/
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

GameSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Game", GameSchema);
