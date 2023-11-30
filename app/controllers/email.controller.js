const { format } = require('date-fns');
const { sequelize } = require('../models');
const db = require("../models");
const Email = db.email;
const QueryTypes = db.Sequelize.QueryTypes;

// Submit Email
exports.emailSubmit = (req, res) => {
    // Create Item
    const email = {
        email: req.body.email,
    };
    // Save Email in the database
    Email.create(email)
    .then(result => {
        res.send({status: "SUCCESS", data: result})
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while submit Email."
        });
    });
};

// Email List
exports.emailList = async(req, res) => {
    const draw = (req.query.draw) ? parseInt(req.query.draw):0;
    const start = (req.query.start) ? req.query.start:0;
    const length = (req.query.length && req.query.length > 0) ? req.query.length:10;
    const colIndex = (req.query.order && req.query.order[0]['column']) ? req.query.order[0]['column']:0;
    const colDir = (req.query.order && req.query.order[0]['dir']) ? req.query.order[0]['dir']:"";
    const colName = (req.query.columns && req.query.columns[colIndex]['data']) ? req.query.columns[colIndex]['data']:"";
    const orderBy = (colName) ? colName +" "+ colDir:`id DESC`;

    const foundEmail = await sequelize.query(
        `SELECT email 
        FROM emails
        ORDER BY `+ orderBy +`
		LIMIT `+ length +` OFFSET `+ start, 
        { type: QueryTypes.SELECT }
    );
    const allEmail = await sequelize.query(
        `SELECT COUNT(id) AS email_total FROM emails`, 
        { type: QueryTypes.SELECT }
    );
    if (foundEmail) {
        res.send({status: "SUCCESS", draw: draw, iTotalDisplayRecords: allEmail[0]['email_total'], iTotalRecords: foundEmail.length, data: foundEmail});

    } else {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Email."
        });
    }
};