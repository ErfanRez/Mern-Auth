import express from "express";
import { SignUp } from "../controllers/authController.js";

const router = express.Router();

router.post("/sign-up", SignUp);

export default router;
