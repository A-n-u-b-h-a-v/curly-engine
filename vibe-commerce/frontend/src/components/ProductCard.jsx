import { useCartOperations } from "../hooks/useCartOperations";
import { formatPrice } from "../utils/price";

export default function ProductCard({ product }) {
  const { addToCart } = useCartOperations();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    
    <div className="group flex flex-col items-center text-center cursor-default w-full max-w-xs sm:max-w-sm">
      <div className="relative w-full flex justify-center items-center overflow-hidden border bg-[#e3e7ea] border-black aspect-square min-w-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 min-w-0"
        />
      </div>
      <div className="mt-3 px-2 sm:px-4 w-full">
  <h2 className="text-sm tracking-wide text-black font-light truncate w-full max-w-60 mx-auto">
          {product.name}
        </h2>
        <p className="text-black text-sm mt-2 font-medium">{formatPrice(product.price)}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-3 text-xs tracking-widest bg-black text-white px-6 py-2 hover:bg-gray-800 transition-all duration-300 border border-black cursor-pointer w-full sm:w-auto opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
      >
        ADD TO CART
      </button>
    </div>
  );
}
