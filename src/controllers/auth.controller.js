import { loginUser } from "../services/auth.service.js";

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const token = await loginUser(email, password);

        if (!token) {
            throw new Error("No se pudo iniciar sesión");
        }

        return res.status(200).json({
            success: true,
            message: "Login exitoso!",
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};