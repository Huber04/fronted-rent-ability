const User = require("../models/User");
const {request, response} = require('express');
const hashPassword = require("../helpers/hashPassword");
const  generateToken  = require("../helpers/generateToken");
const validateToken = require("../helpers/validateToken");

const getUsers = async(rq = request, rs = response) => {
   
};

const createUSer = async(rq = request, rs = response) => {
    
};

const deleteUser = async (rq = request, rs = response) => {
    

}

const updateUser = async (rq = request, rs = response) => {
    
}

module.exports = {getUsers, createUSer, deleteUser, updateUser}