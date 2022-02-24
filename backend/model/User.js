const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userid: {
    type: Number,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
