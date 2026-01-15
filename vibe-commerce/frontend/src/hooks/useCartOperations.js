import { useDispatch, useSelector } from 'react-redux';
import { setCartItems, addItemOptimistic, removeItemOptimistic, updateQuantityOptimistic } from '../redux/cartSlice';
import { getCart, addToCart as apiAddToCart, deleteCartItem as apiDeleteCartItem, updateCartItem as apiUpdateCartItem } from '../api';

export function useCartOperations() {
  const dispatch = useDispatch();

  const fetchCart = async () => {
    try {
      const response = await getCart();
      dispatch(setCartItems(response.data.items));
    } catch (error) {
      throw error;
     }
   };

  const reduxItems = useSelector((state) => state.cart.items);
  
  const addToCart = async (productOrId, qty = 1) => {
    let productId = productOrId;
    let optimisticProduct = null;
    if (typeof productOrId === 'object' && productOrId !== null) {
      productId = productOrId._id;
      optimisticProduct = productOrId;
    }

    const optimisticItem = {
      _id: Date.now().toString(),
      productId: optimisticProduct ? optimisticProduct : { _id: productId },
      qty
    };

    dispatch(addItemOptimistic(optimisticItem));

    try {
      await apiAddToCart(productId, qty);
      fetchCart();
    } catch (error) {
      fetchCart();
    }
  };

  const removeItem = async (id) => {
    dispatch(removeItemOptimistic(id));

    try {
      await apiDeleteCartItem(id);
      fetchCart();
    } catch (error) {
      fetchCart();
    }
  };

  const updateQuantity = async (id, qty, productId) => {
    if (qty < 1) return;

    dispatch(updateQuantityOptimistic({ id, qty }));

    try {
      await apiUpdateCartItem(id, qty);
      fetchCart();
    } catch (err) {
      try {
        const existing = reduxItems.find(it => String(it._id) === String(id) || (it.productId && (it.productId._id || it.productId) === productId));
        if (productId && existing) {
          const diff = qty - (existing.qty || 0);
          if (diff > 0) {
            await apiAddToCart(productId, diff);
          }
        } else if (productId && !existing) {
          await apiAddToCart(productId, qty);
        }
      } catch (error) {
        throw new Error(`Failed to update cart item quantity: ${error.message}`);
      } finally {
        fetchCart();
      }
    }
  };

  return {
    fetchCart,
    addToCart,
    removeItem,
    updateQuantity
  };
}