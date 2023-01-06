import { Router } from "express";
import { getOrderByIdController } from "../controllers/getOrderByIdController.js";

const router = Router();

router.get("/orders/:id", getOrderByIdController);

export default router;