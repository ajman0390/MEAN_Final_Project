const Users = require("../db/connection").Users;

var Service = {};

// POST: http://localhost:3000/users/login
Service.authUser = (userObj) => {
    return Users.findOne({
        where: userObj
    })
        .then(user => {
            console.log(user);
            return user;
        })
        .catch(error => {
            throw error;
        })
};

// GET: http://localhost:3000/users/data 
Service.getAllUsers = () => {
    return Users.findAll()
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

// GET: http://localhost:3000/users/:id
Service.getUserData = (userId) => {
    return Users.findOne({where: {ID: userId}})
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

// POST: http://localhost:3000/users/register 
Service.createUserProfile = (userObj) => {
    return Users.create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

// PUT: http://localhost:3000/users/update/:id 
Service.update = (userObj) => {
    return Users.update({ EMAIL: userObj.email, PASSWORD:  userObj.password }, { returning: true, where: { ID: userObj.userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

// DELETE: http://localhost:3000/users/delete/:id
Service.deleteUserProfile = (userId) => {
    return Users.destroy(
        {returning: true, where: { ID: userId } }
        )
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

module.exports = Service;