import { Router } from "express";
import { orderMiddleware } from "../middlewares/orderMiddleware.js";
import { postOrdersController } from "../controllers/postOrdersController.js";

const router = Router();

router.post("/order", orderMiddleware, postOrdersController);

export default router;