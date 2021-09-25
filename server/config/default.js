require("dotenv").config();

module.exports = {
  apiPrefix: "/api/v1",
  mysql: {
    host: "localhost",
    port: 3306,
    db: process.env.MYSQL_DB_ENV,
    username: process.env.MYSQL_USER_ENV,
    password: process.env.MYSQL_PASSWORD_ENV,
  },
  auth: {
    secret: process.env.SECRET_KEY,
    tokenExpire: "24h",
  },
};
