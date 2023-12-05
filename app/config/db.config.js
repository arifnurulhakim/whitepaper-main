module.exports = {
  // HOST: "tiny.db.elephantsql.com",
  // USER: "rwygbrux",
  // PASSWORD: "3ECCf24BLY5q6P76CsebrfRwJDbQ5VeX",
  // DB: "rwygbrux",
  // dialect: "postgres",
  HOST: "user-prod-us-east-2-1.cluster-cfi5vnucvv3w.us-east-2.rds.amazonaws.com",
  USER: "whitepapper-main-db-0acc8b69bc342c60d",
  PASSWORD: "Htds5BrNk7cCGnnmyxUp31KyvwrtEX",
  DB: "whitepapper-main-db-0acc8b69bc342c60d",
  dialect: "postgres",
  dialectOptions: {
    idle_in_transaction_session_timeout: 10000,
    
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
