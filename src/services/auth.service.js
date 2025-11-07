import { getAllUser } from "../models/user.model.js";
import { generateToken } from "../utils/token-generator.js";

export async function loginUser(email, password) {
    const users = await getAllUser();
    const userFilter = users.filter(user => user.email == email && user.password == password);

    if (userFilter.length == 0) {
        throw new Error("Las credenciales no son correctas");
    }

    const token = generateToken(userFilter[0]);
    return token;
};