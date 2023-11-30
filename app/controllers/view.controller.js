const { format } = require('date-fns');
const { sequelize } = require('../models');
const db = require("../models");
const View = db.view;
const QueryTypes = db.Sequelize.QueryTypes;

// Add View
exports.viewAdd = async(req, res) => {
    const allView = await sequelize.query(
        `SELECT COUNT(id) AS view_total FROM views`, 
        { type: QueryTypes.SELECT }
    );

    // Create View
    const view = {
        view: 1,
    };
    // Save View to Database
    View.create(view)
    .then(result => {
        res.send({status: "SUCCESS", view_total: (parseInt(allView[0]['view_total']) + 1), data: result})
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while submit View."
        });
    });
};

// View Total
exports.viewTotal = async(req, res) => {
    const allView = await sequelize.query(
        `SELECT COUNT(id) AS view_total FROM views`, 
        { type: QueryTypes.SELECT }
    );

    if (allView) {
        res.send({status: "SUCCESS", data: allView});

    } else {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving View."
        });
    }
};