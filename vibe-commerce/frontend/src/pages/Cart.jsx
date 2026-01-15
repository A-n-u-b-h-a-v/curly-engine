import { useEffect } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useCartOperations } from '../hooks/useCartOperations';

export default function Cart() {
  const { items, total } = useSelector(state => state.cart);
  const { fetchCart, removeItem } = useCartOperations();

  useEffect(() => {
    fetchCart();

  }, []);

  return (
    <div className="px-2 sm:px-4 md:px-6 py-6 sm:py-10 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
      <h2 className="text-2xl tracking-wide font-light mb-6 text-black">Your Cart</h2>
      {items.length === 0 ? (
        <p className="text-black font-light">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {items.map((item) => (
              <CartItem key={item._id} item={item} onRemove={removeItem} />
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center border-t pt-6 gap-4 sm:gap-0">
            <div>
              <div className="text-sm text-black">Subtotal</div>
              <div className="text-lg font-light">₹ {Number(total).toLocaleString('en-IN')}</div>
            </div>
            <Link
              to="/checkout"
              className="border border-black px-5 py-2 text-sm font-light hover:bg-gray-100 w-full sm:w-auto text-center"
            >
              Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
