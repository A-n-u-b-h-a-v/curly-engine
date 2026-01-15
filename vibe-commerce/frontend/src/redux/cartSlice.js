import { createSlice } from '@reduxjs/toolkit';
import { toNumber } from '../utils/price';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
    itemCount: 0
  },
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
      state.itemCount = action.payload.reduce((total, item) => total + (item.qty || 0), 0);
      state.total = action.payload.reduce((total, item) => {
          const product = item.productId;
          const price = product ? toNumber(product.price) : 0;
        return total + (price * (item.qty || 0));
      }, 0);
    },
    addItemOptimistic: (state, action) => {

  const incomingProdId = action.payload.productId && (action.payload.productId._id || action.payload.productId);

        const existing = state.items.find(it => {
          const itPid = it.productId && (it.productId._id || it.productId);
          return String(itPid) === String(incomingProdId);
        });

      if (existing) {
        existing.qty = (existing.qty || 0) + (action.payload.qty || 0);
      } else {
        state.items.push(action.payload);
      }

      state.itemCount = state.items.reduce((sum, it) => sum + (it.qty || 0), 0);
      state.total = state.items.reduce((sum, it) => {
        const product = it.productId;
        const price = product ? toNumber(product.price) : 0;
        return sum + (price * (it.qty || 0));
      }, 0);
    },
    removeItemOptimistic: (state, action) => {
      const itemToRemove = state.items.find(item => item._id === action.payload);
      if (itemToRemove) {
        state.itemCount -= itemToRemove.qty;
        state.items = state.items.filter(item => item._id !== action.payload);
          state.total = state.items.reduce((total, it) => {
            const product = it.productId;
            const price = product ? toNumber(product.price) : 0;
            return total + (price * (it.qty || 0));
          }, 0);
      }
    },
    updateQuantityOptimistic: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(item => item._id === id);
      if (item) {
        state.itemCount = state.itemCount - item.qty + qty;
        item.qty = qty;
          state.total = state.items.reduce((total, it) => {
            const product = it.productId;
            const price = product ? toNumber(product.price) : 0;
            return total + (price * (it.qty || 0));
          }, 0);
      }
    }
  }
});

export const { 
  setCartItems, 
  addItemOptimistic, 
  removeItemOptimistic,
  updateQuantityOptimistic 
} = cartSlice.actions;

export default cartSlice.reducer;