import express from "express";
import CartItem from "../models/CartItem.js";
import { toNumber } from "../utils/priceUtils.js";

export const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
  try {
    const items = await CartItem.find({ user: "guest" }).populate("productId");
    const total = items.reduce((sum, i) => {
      const price = toNumber(i.productId?.price);
      return sum + (price * (i.qty || 0));
    }, 0);
    res.json({ items, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

cartRouter.post("/", async (req, res) => {
  try {
    const { productId, qty } = req.body;
    if (!productId || !qty)
      return res.status(400).json({ error: "productId and qty are required" });

    const existing = await CartItem.findOne({ productId, user: "guest" });
    if (existing) {
      existing.qty += qty;
      await existing.save();
      return res.json({ message: "Quantity updated" });
    }

    await CartItem.create({ productId, qty, user: "guest" });
    res.json({ message: "Item added to cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

cartRouter.patch('/:id', async (req, res) => {
  try {
    const { qty } = req.body;
    if (typeof qty !== 'number' || qty < 1) return res.status(400).json({ error: 'qty must be a number >= 1' });

    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Cart item not found' });

    item.qty = qty;
    await item.save();
    const populated = await item.populate('productId');
    res.json({ message: 'Quantity set', item: populated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

cartRouter.delete("/:id", async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

cartRouter.post("/checkout", async (req, res) => {
  try {
    const { name, email } = req.body;
    const items = await CartItem.find({ user: "guest" }).populate("productId");
    const total = items.reduce((sum, i) => {
      const price = toNumber(i.productId?.price);
      return sum + (price * (i.qty || 0));
    }, 0);
    await CartItem.deleteMany({ user: "guest" });
    res.json({
      receipt: { name, email, total, timestamp: new Date().toISOString() },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
