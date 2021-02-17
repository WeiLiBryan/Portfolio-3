module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        projName: DataTypes.STRING,
        deployLink: DataTypes.STRING,
        image: DataTypes.STRING
    });

    return Project;
}