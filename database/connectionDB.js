const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('vehicles_rental', 'root', 'lopez0410', {
    host: 'localhost',
    port: 3306, 
    dialect:'mysql'
});
module.exports= sequelize;