import jwt from "jsonwebtoken";
import { jwtConfig } from "../../config/jwt.config.js";

export default (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader)
            res.sendStatus(401);

        const token = authHeader.split(' ')[1];
        if (!token)
            res.sendStatus(401);

        const decoded = jwt.verify(token, jwtConfig.secretKey);
        req.user = decoded;

        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};