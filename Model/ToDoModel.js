const mongoose = require("mongoose");

// building a Schema for the Todo App
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
