import express from "express";
import {
  allOrders,
  createOrder,
  deleteOrder,
  getSingleOrder,
  myOrder,
  processOrder,
} from "../controllers/order.js";
import { adminOnly } from "../middlewares/auth.js";

const router = express.Router();

router.post("/createorder", createOrder);

router.get("/myorder", myOrder);

router.get("/all", adminOnly, allOrders);

router
  .route("/:id")
  .get(getSingleOrder)
  .put(adminOnly, processOrder)
  .delete(adminOnly, deleteOrder);

export default router;
