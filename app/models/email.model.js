module.exports = (sequelize, Sequelize) => {
    const Email = sequelize.define("email", {
        email: {
            type: Sequelize.STRING,
            unique: false
        }
    });
    return Email;
};