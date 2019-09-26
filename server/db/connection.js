const Sequelize = require("sequelize");

const sequelize = new Sequelize("hca", "hca", "password", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
});

const Users = sequelize.import("../models/Users");

// const Leagues = sequelize.import("../models/Leagues");
// const Teams = sequelize.import("../models/Teams");

// Teams.belongsTo(Leagues);
// Leagues.hasMany(Teams);

sequelize.authenticate().then(() => {
    console.log("connected");
});

module.exports = {
    Sequelize,
    sequelize,
    Users
    // Leagues,
    // Teams
};