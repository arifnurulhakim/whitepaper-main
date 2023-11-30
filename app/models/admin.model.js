module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
    return Admin;
};