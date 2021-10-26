const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION);

mongoose.connection.on("open", () => { console.log("Connected to mongodb");});
