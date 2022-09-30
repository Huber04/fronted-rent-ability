const { response, request } = require("express");
const {generateToken} = require("../helpers/generateToken");
const validatePassword = require("../helpers/validatePassword");
const User = require("../models/User");

const login = async (rq = request, rs = response) => {
    const email = rq.body.email;
    console.log(email)
    const password = rq.body.password;
    const userDB = await User.findOne({where:{ email: email }});
    if (userDB) {
        if(validatePassword(password, userDB.getDataValue('password'))) {
            return rs.json({
                data:[{...userDB}]
            })
        }
        return rs.json({
            message: 'Upss, tu contraseña es inválida :(',
            data: []
        })
    }
    return rs.json({
        message: 'Upss, tu cuenta no existe :(',
        data: []
    })
}

module.exports = login;