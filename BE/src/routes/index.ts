import express = require("express");
import AuthController from "../controllers/authController";
import verifyToken from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/auth/signUp", AuthController.signUp);
router.post("/auth/login", AuthController.login);
router.get("/auth/check", verifyToken, AuthController.check);

export default router;
