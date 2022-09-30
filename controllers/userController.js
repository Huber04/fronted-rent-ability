const User = require("../models/User");
const {request, response} = require('express');
const hashPassword = require('../helpers/hashPassword');

const getUsers = async(rq = request, rs = response) => {
   
};

const createUSer = async(rq = request, rs = response) => {
    const {confirmar_password, ...user} = rq.body;
    const passwordEncrypt = hashPassword(user.password);
    user.password = passwordEncrypt;
    await User.create(user);
    return rs.status(200).send('<script>window.location.href="http://localhost:3000/login"</script>');
};

const deleteUser = async (rq = request, rs = response) => {
    

}

const updateUser = async (rq = request, rs = response) => {
    
}

module.exports = {getUsers, createUSer, deleteUser, updateUser}