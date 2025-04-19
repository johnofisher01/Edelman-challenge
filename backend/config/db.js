const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("articles_dashboard", "postgres", "your_password", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;