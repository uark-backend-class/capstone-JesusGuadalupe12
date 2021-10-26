require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const exphbs = require("express-handlebars");
const email = require("./email")
require("./db");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.urlencoded()); // This takes data from the form on the question.handlebars file and POSTS it on the request body
app.use(express.static("./public")); // creates a main.css route within the ./public folder. 
app.use(routes);

app.listen(process.env.PORT, () => {
    console.log("Now listening on port 3000");
});

