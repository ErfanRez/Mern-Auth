import express from "express";
import {
  SignIn,
  SignUp,
  googleAuth,
  signOut,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);
router.post("/google", googleAuth);
router.get("/sign-out", signOut);

export default router;
