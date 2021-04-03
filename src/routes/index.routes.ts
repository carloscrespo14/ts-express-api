import { Router } from "express";
import { jwtValidator } from "../middlewares/jwtValidator";
import { indexWelcome } from "../controllers/index.controller";

const router = Router();

router.get('/', jwtValidator, indexWelcome)

export default router;
