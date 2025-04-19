const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("articles_dashboard", "postgres", "!123456", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;