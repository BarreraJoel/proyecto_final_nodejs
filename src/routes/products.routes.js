import { Router } from "express";
import { create, destroy, getAll, getById } from "../controllers/product.controller.js";
import isAuthenticated from "../middlewares/auth/isAuthenticated.middleware.js";

const router = Router();

router.use(isAuthenticated);

router.get("/", getAll);
router.get("/:id", getById);
router.post("/create", create);
router.delete("/:id", destroy);

export default router;