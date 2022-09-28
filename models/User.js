const { DataTypes } = require("sequelize");
const sequelize = require ("../database/connectionDB");
const User = sequelize.define('usuario', {
   
    cedula: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    edad: {
        type: DataTypes.INTEGER
    },
    contacto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
  }, {
   
  });
  module.exports = User;