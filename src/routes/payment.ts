import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  allCoupons,
  applyDiscount,
  createPaymentIntent,
  deleteCoupon,
  newCoupon,
} from "../controllers/payment.js";

const router = express.Router();

// route - /payment/create
router.post("/create", createPaymentIntent);

// route - /payment/coupon/new
router.get("/discount", applyDiscount);

// route - /payment/coupon/new
router.post("/createcoupen", adminOnly, newCoupon);

// route - /payment/coupon/all
router.get("/allcoupen", adminOnly, allCoupons);

// route - /payment/coupon/:id
router.delete("/:id", adminOnly, deleteCoupon);

export default router;
