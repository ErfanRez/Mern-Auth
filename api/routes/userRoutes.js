import express from "express";
import { updateUser, deleteUser } from "../controllers/userController.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = express.Router();

router.post("/update/:id", verifyUser, updateUser);
router.delete("/delete/:id", verifyUser, deleteUser);

export default router;
