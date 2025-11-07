import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt.config.js";

export function generateToken(payload) {
    const expiration = { expiresIn: jwtConfig.expiresIn };
    return jwt.sign(payload, jwtConfig.secretKey, expiration);
};