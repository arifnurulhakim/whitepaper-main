const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    dialectOptions: {
        idle_in_transaction_session_timeout: dbConfig.dialectOptions.idle_in_transaction_session_timeout,
        ssl: {
            ca: fs.readFileSync(path.join(__dirname, 'path', 'root-certs.crt')),
        },
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.view = require("./view.model.js")(sequelize, Sequelize);
db.email = require("./email.model.js")(sequelize, Sequelize);
db.admin = require("./admin.model.js")(sequelize, Sequelize);

db.admintoken = require("./admintoken.model.js")(sequelize, Sequelize);
db.admin.hasMany(db.admintoken);
db.admintoken.belongsTo(db.admin);

// Penanganan kesalahan koneksi database
sequelize.authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = db;
