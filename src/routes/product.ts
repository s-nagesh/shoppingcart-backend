import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  createProduct,
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getLatestProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/createproduct", singleUpload, createProduct);

router.get("/latest", getLatestProduct);

router.get("/categories", getAllCategories);

router.get("/admin-products", adminOnly, getAdminProducts);

router.get("/getallproduct", getAllProducts);

router
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default router;
