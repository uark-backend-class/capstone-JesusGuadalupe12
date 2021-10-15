const mongoose = require("mongoose");

// Creating a question schema
const questionSchema = mongoose.Schema({
    questionA: String,
});

// Create a model based on the schema and export it
const Question = mongoose.model("question", questionSchema);

module.exports = Question;