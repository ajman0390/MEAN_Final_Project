module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LEAGUES', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        NAME: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        CODE: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        Description: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, {
        tableName: 'LEAGUES'
    });
};