const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('vehicles_rental', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect:'mysql'
});
module.exports= sequelize;