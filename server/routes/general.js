import express from "express";
import { getUser, getDashboardStats, getAllUsers } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/user", getAllUsers);
router.get("/dashboard", getDashboardStats);

export default router;
