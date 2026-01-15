import { useLocation, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartItems } from '../redux/cartSlice';
import { useEffect } from 'react';

export default function Receipt() {
  const location = useLocation();
  const dispatch = useDispatch();
  const receipt = location.state?.receipt;

  useEffect(() => {
    dispatch(setCartItems([]));
  }, [dispatch]);

  if (!receipt) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <div className="max-w-md mx-auto mt-12">
      <div className="bg-white border p-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-medium mb-1">Order Confirmed</h2>
          <p className="text-sm text-black">Thank you for your purchase</p>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between mb-3 text-sm text-black">
            <span>Order Time</span>
            <span>{new Date().toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-3 text-sm text-black">
            <span>Name</span>
            <span>{receipt.name}</span>
          </div>
          <div className="flex justify-between mb-3 text-sm text-black">
            <span>Email</span>
            <span>{receipt.email}</span>
          </div>
          <div className="flex justify-between mb-1 text-sm font-medium">
            <span>Total</span>
            <span>₹ {Number(receipt.total).toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-black mb-4">A confirmation email has been sent to {receipt.email}</p>
          <a href="/" className="text-sm font-medium border border-black px-4 py-2">Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}