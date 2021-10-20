const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/respondent")

mongoose.connection.on("open", () => { console.log("Connected to mongodb");});
