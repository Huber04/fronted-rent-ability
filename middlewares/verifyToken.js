const validateToken = require("../helpers/validateToken");

const verifyToken = (rq, rs, next) => {
    const token = rq.headers.authorization;
    if (!token) {
        return rs.status(401).json(
            {
                error: "Invalid Token"
            }
        )
    }

    const payload = validateToken(token);

    if (!payload) {
        return rs.status(401).json({
            error: "Invalid Token"
        })
    }

    if (Date.now() >= payload.exp * 1000) {
        return rs.status(401).json({
            error: "Token expired"
        })
    }
    rq.user = payload.id;
    next();
}
module.exports = verifyToken;