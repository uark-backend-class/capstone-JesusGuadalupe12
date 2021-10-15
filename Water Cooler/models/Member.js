const mongoose = require("mongoose");

// Creating a member schema
const memberSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    responseA: String,
});

// Create a model based on the schema and export it
const Member = mongoose.model("member", memberSchema);

module.exports = Member;