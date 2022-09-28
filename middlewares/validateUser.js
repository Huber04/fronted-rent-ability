const User = require("../models/User");

const validateUser = async (req, res, next) => {
    const user = req.body;
    if (!user || !user.username || !user.email || !user.password) {
        return res.status(400).json({
            message: "Invalid User"
        })
    }
    const userDB = await User.findOne({email: user.email});
    if (userDB) {
        return res.status(400).json({
            message: "User already exists"
        })
    }
    next()
};

module.exports = validateUser;