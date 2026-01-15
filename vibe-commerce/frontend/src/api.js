import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const getProducts = () => axios.get(`${API_BASE}/products`);
export const getCart = () => axios.get(`${API_BASE}/cart`);
export const addToCart = (productId, qty) =>
  axios.post(`${API_BASE}/cart`, { productId, qty });
export const deleteCartItem = (id) => axios.delete(`${API_BASE}/cart/${id}`);
export const checkout = (data) => axios.post(`${API_BASE}/cart/checkout`, data);
export const updateCartItem = (id, qty) => axios.patch(`${API_BASE}/cart/${id}`, { qty });
