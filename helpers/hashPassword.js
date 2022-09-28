const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.SALT_ROUNDS) || 5;

const hashPassword = (password) => {
    return bcrypt.hashSync(password, saltRounds);
}

module.exports = hashPassword;
