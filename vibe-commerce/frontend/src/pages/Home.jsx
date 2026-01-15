import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProducts, addToCart } from "../api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
  }, []);

  const handleAdd = async (id) => {
    await addToCart(id, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} onAdd={handleAdd} />
        ))}
      </div>
    </motion.div>
  );
}
