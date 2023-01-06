import { Router } from "express";
import { getOrdersController } from "../controllers/getOrdersController.js";

const router = Router();

router.get("/orders", getOrdersController);

export default router;