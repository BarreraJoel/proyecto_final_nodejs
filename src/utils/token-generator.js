import jwt from "jsonwebtoken";
import { env } from "process";

const secretKey = env.JWT_SECRET_KEY;

export function generateToken(payload) {
    const expiration = { expiresIn: env.JWT_EXPIRES_IN };

    return jwt.sign(payload, secretKey, expiration);
};