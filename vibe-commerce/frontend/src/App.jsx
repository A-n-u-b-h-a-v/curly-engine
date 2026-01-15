import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Receipt from "./pages/Receipt";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/receipt" element={<Receipt />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}
