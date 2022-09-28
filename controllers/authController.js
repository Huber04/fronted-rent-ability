const { response, request } = require("express");
const {generateToken} = require("../helpers/generateToken");
const validatePassword = require("../helpers/validatePassword");
const User = require("../models/User");

const login = async (rq = request, rs = response) => {
    
}

module.exports = login;