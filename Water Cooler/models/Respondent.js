const mongoose = require("mongoose");

// Creating a respondent schema
const respondentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    response: String,
});

// Create a model based on the schema and export it
const Respondent = mongoose.model("respondent", respondentSchema);

module.exports = Respondent;