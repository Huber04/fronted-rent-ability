var bcrypt = require('bcrypt');

const validatePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);

}

module.exports = validatePassword;