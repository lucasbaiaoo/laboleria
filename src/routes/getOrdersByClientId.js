import { Router } from "express";
import { getOrderByClientIdController } from "../controllers/getOrdersByClientId.js";


const router = Router();

router.get("/clients/:id/orders", getOrderByClientIdController);

export default router;