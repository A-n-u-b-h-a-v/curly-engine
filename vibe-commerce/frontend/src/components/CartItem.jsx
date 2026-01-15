import { useCartOperations } from "../hooks/useCartOperations";
import { getUnitPrice } from "../utils/price";

export default function CartItem({ item, onRemove }) {
  const { updateQuantity } = useCartOperations();

  const product = (item && item.productId) ? item.productId : { name: 'Unknown product', image: '', price: 0, _id: null };
  const unit = getUnitPrice(product.price);
  const totalPrice = (unit * item.qty).toLocaleString('en-IN');
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-2 sm:p-4 border border-black mb-3 gap-2 sm:gap-0" role="listitem">
      <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#e3e7ea] border border-black flex items-center justify-center aspect-square min-w-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain min-w-0"
          />
        </div>
        <div>
          <p className="font-light text-sm sm:text-base">{product.name}</p>
          <div className="flex items-center gap-1 sm:gap-2 mt-2" role="group" aria-label="Item quantity">
            <button
              onClick={() => updateQuantity(item._id, Math.max(1, item.qty - 1), product._id)}
              className="w-8 h-8 flex items-center justify-center bg-white hover:bg-gray-100 border border-black disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={item.qty <= 1}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="text-sm w-8 text-center" aria-label="Current quantity">{item.qty}</span>
            <button
              onClick={() => updateQuantity(item._id, Math.min(99, item.qty + 1), product._id)}
              className="w-8 h-8 flex items-center justify-center bg-white hover:bg-gray-100 border border-black disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={item.qty >= 99}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row sm:flex-col items-end gap-2 w-full sm:w-auto justify-between sm:items-end">
        <span className="font-light text-sm sm:text-base" aria-label="Total price">
          ₹ {totalPrice}
        </span>
        <button
          onClick={() => onRemove(item._id)}
          className="border border-black px-4 py-2 text-sm font-light hover:bg-gray-100 w-full sm:w-auto"
          aria-label={`Remove ${product.name} from cart`}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
