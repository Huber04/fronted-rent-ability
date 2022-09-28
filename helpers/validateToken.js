var jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.PRIVATE_KEY || "ESTAESMILLAVEDEJSONHELLOWORLDHELLOPDSKJDDJKAKA";

const validateToken = (token) => {
    try {
        return jwt.verify(token, PRIVATE_KEY);
    } catch (error) {
        return null;
    }
};

module.exports = validateToken;