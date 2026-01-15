import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Checkout() {
  const [form, setForm] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const { total } = useSelector(state => state.cart);

  const handleSubmit = (e) => {
    e.preventDefault();
    const receiptData = {
      ...form,
      total,
      timestamp: new Date().toISOString()
    };
    navigate("/receipt", { state: { receipt: receiptData } });
  };

  return (
    <div className="max-w-md mx-auto py-12 px-6">
      <div className="bg-white border p-6">
        <h2 className="text-xl font-medium text-black mb-4">Checkout</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border-b border-black focus:outline-none text-black"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border-b border-black focus:outline-none text-black"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between text-sm text-black">
              <span>Subtotal</span>
              <span>₹ {Number(total).toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full border border-black px-4 py-2 text-sm font-medium hover:bg-gray-100"
          >
            Complete Checkout
          </button>
        </form>
      </div>
    </div>
  );
}
