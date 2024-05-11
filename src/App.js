import { Navbar } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./components/pages/HomePage/Home";
import ItemCard from "./components/ItemCard/ItemCard";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext";
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
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
