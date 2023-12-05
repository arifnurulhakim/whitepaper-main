module.exports = (sequelize, Sequelize) => {
    const Email = sequelize.define("email", {
        email: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: false,
            unique: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Invalid email format. Please provide a valid email address.',
                },
            },
        }
    });
    return Email;
};
