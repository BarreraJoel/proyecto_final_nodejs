import { Router } from "express";
import authRoutes from "./auth.routes.js";
import productsRoutes from "./products.routes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/products", productsRoutes);

export default router;