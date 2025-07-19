import express from "express";
import { login, register } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Test route to verify backend routing
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Auth route is working!" });
});

export default router;