'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('USER', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        USER_NAME: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        PASSWORD: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        EMAIL: {
            type: DataTypes.STRING(200),
            unique: true,
            allowNull: false
        }
    }, {
        tableName: 'USER'
    });
};