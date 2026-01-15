import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  qty: { type: Number, default: 1, min: 1 },
  user: { type: String, default: "guest" },
});

export default mongoose.model("CartItem", cartItemSchema);
