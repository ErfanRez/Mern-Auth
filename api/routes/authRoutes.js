import express from "express";
import { SignIn, SignUp, googleAuth } from "../controllers/authController.js";

const router = express.Router();

router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);
router.post("/google", googleAuth);

export default router;
