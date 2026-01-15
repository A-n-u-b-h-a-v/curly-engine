import express from "express";
import Product from "../models/Product.js";

export const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
