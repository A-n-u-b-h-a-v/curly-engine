import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    category: {
      type: String,
      default: "General",
    },
    image: {
      type: String,
      default: "https://www.hydroscand.se/media/catalog/product/placeholder/default/image-placeholder-base.png",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
