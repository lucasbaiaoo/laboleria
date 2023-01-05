import { Router } from "express";
import { cakeMiddleware } from "../middlewares/cakeMIddleware.js";
import { postCakesController } from "../controllers/postCakesController.js";

const router = Router();

router.post("/cakes", cakeMiddleware, postCakesController);

export default router;