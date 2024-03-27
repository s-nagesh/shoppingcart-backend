import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  allCoupons,
  applyDiscount,
  createPaymentIntent,
  //   createPaymentIntent,
  deleteCoupon,
  newCoupon,
} from "../controllers/payment.js";

const router = express.Router();

// route - /api/v1/payment/create
router.post("/create", createPaymentIntent);

// route - /api/v1/payment/coupon/new
router.get("/discount", applyDiscount);

// route - /api/v1/payment/coupon/new
router.post("/createcoupen", adminOnly, newCoupon);

// route - /api/v1/payment/coupon/all
router.get("/allcoupen", adminOnly, allCoupons);

// route - /api/v1/payment/coupon/:id
router.delete("/:id", adminOnly, deleteCoupon);

export default router;
