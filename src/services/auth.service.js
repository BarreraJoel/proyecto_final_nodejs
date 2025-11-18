import { generateToken } from "../utils/token-generator.js";

export async function loginUser(email, password) {
    const userHard = { email: "test@mail.com", password: "123456" };
    if (userHard.email != email || userHard.password != password) {
        return false;
    }
    const userId = 1;
    const token = generateToken({ email: userHard.email, id: userId });
    return token;
};