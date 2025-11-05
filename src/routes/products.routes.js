import { Router } from "express";

const router = Router();

router.get("/", function () { console.log("get"); });
router.get("/:id", function () { console.log("get id"); });
router.post("/create", function () { console.log("create"); });
router.delete("/:id", function () { console.log("delete"); });

export default router;