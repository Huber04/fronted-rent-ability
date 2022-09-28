const { DataTypes } = require("sequelize");
const sequelize = require ("../database/connectionDB");
const Vehicle =sequelize.define ('vehiculo', {
    matricula: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    cilindraje: {
        type: DataTypes.STRING
    },
    imagen: {
        type: DataTypes.STRING
    },
    id_publico_imagen: {
        type: DataTypes.STRING
    },
    modelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    linea: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM(["MOTO", "AUTOMOVIL"]),
        allowNull: false
    }
},{})
module.exports = Vehicle