const path = require("path");

var express = require("express");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var db = require("./models");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on port %s. Visit http://localhost:%s/ in your browser to access.", PORT, PORT);
    });
});