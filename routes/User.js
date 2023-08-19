import express from "express";
import { login, logout, register, users } from "../controllers/User.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/all", users);

router.get("/logout", logout);

export default router;
