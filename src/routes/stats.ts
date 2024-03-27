import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  getBarCharts,
  getDashboardStats,
  getLineCharts,
  getPieCharts,
} from "../controllers/stats.js";

const router = express.Router();

router.get("/stats", adminOnly, getDashboardStats);
router.get("/pi-charts", adminOnly, getPieCharts);
router.get("/bar-charts", adminOnly, getBarCharts);
router.get("/line-charts", adminOnly, getLineCharts);

export default router;
