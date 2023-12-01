module.exports = {
  HOST: "tiny.db.elephantsql.com",
  USER: "rwygbrux",
  PASSWORD: "3ECCf24BLY5q6P76CsebrfRwJDbQ5VeX",
  DB: "rwygbrux",
  dialect: "postgres",
  dialectOptions: {
    idle_in_transaction_session_timeout: 1000,
    
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};