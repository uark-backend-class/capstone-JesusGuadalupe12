const express = require("express");
const routes = require("./routes");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(routes);

app.listen(3000, () => {
    console.log("Now listening on port 3000");
});

