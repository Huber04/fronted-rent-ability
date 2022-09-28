var jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.PRIVATE_KEY || "ESTAESMILLAVEDEJSONHELLOWORLDHELLOPDSKJDDJKAKA";

const generateToken = (id) => {
    return jwt.sign({ id }, PRIVATE_KEY, {  expiresIn: '24h' });
};

module.exports = generateToken;

