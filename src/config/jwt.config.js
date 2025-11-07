import { env } from "process";

export const jwtConfig = {
    secretKey: env.JWT_SECRET_KEY,
    expiresIn: env.JWT_EXPIRES_IN,
};