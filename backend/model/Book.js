const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookid: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true,
  },
  bookstate: {
    type: String,
    required: true,
  },
  requestedBy: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
