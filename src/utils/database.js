// * Información para la conexion con la base de datos
const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "sequelize",
  port: 5432,
  host: "localhost",
  username: "iannacus",
  password: "root",
  dialect: "postgres",
});

module.exports = db;
