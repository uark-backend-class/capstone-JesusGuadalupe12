const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/respondents")

mongoose.connection.on("open", () => { console.log("Connected to mongodb");});
