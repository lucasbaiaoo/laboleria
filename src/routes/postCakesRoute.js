import { Router } from "express";
import { postCakesController } from "../controllers/postCakesController.js";
import { cakeMiddleware } from "../middlewares/cakeMIddleware.js";

const router = Router();

router.post("/cakes", cakeMiddleware, postCakesController)

export default router;