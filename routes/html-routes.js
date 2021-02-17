var path = require("path");
var db = require("../models");
var Op = db.Sequelize.Op;

const projects = require("../models/projects");

module.exports = function (app) {

    // Welcome page
    app.get("/", function (req, res) {
        res.render("home");
    });
}