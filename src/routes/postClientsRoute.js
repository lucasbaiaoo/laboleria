import { Router } from "express";
import { clientMiddleware } from "../middlewares/clientMiddleware.js";
import { postClientsController } from "../controllers/postClientsController.js";

const router = Router();

router.post("/clients", clientMiddleware, postClientsController);

export default router;