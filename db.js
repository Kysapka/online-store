const { Sequelize } = require('sequelize')
const {ssl} = require("pg/lib/defaults");

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // Пароль
    ssl,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
)