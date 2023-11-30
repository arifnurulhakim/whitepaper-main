module.exports = (sequelize, Sequelize) => {
    const View = sequelize.define("view", {
        view: {
            type: Sequelize.INTEGER
        }
    });
    return View;
};