import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import NodeCache from "node-cache";
import { config } from "dotenv";
import morgan from "morgan";
import Stripe from "stripe";
import cors from "cors";

import UserRoute from "./routes/user.js";
import ProductRoute from "./routes/product.js";
import OrderRoute from "./routes/order.js";
import PyamnetRoute from "./routes/payment.js";
import StatsRoute from "./routes/stats.js";

config({
  path: "./.env",
});

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";
connectDB(mongoURI);

export const stripe = new Stripe(stripeKey);
export const myCache = new NodeCache();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/user", UserRoute);
app.use("/product", ProductRoute);
app.use("/order", OrderRoute);
app.use("/payment", PyamnetRoute);
app.use("/dashboard", StatsRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
