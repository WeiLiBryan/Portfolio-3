var path = require("path");
var db = require("../models");
var Op = db.Sequelize.Op;

module.exports = function (app) {

    // Welcome page
    app.get("/", function (req, res) {
        res.render("home");
    });

    // Projects
    app.get("/projects", function(req, res) {
        db.Project.findAll({}).then( data => {
            var proj = [];

            for (var i =0; i < data.length; i++) {
                proj.push(data[i].dataValues);
            }

            var projObj = { proj: proj };

            res.render("projects", projObj);
        });
    });
}