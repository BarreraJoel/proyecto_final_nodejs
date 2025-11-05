import { Router } from "express";

const router = Router();

router.post("/login", function () { console.log("login"); });

export default router;