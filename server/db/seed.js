const connection = require("./connection");
const userData = require("./seed_data/users.json");
// const automobileData = require("./seed_data/automobile_data.json");

connection.Users.destroy({ where: {} }).then(() => {
    connection.Users.bulkCreate(userData).then(() => {
        process.exit();
    });
});
