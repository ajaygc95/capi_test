import { Checkout, Navbar, Policy, WebHook } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./components/pages/HomePage/Home";
import ItemCard from "./components/ItemCard/ItemCard";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <Router>
      <CartProvider>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/webhooks" element={<WebHook />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
