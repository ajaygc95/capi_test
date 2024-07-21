import { Checkout, Navbar, Policy, WebHook, Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Ensures the container covers the full viewport height
`;

const MainContent = styled.main`
  flex: 1; // Allows main content to grow and take available space
  padding-bottom: 80px; // Space for the fixed footer
`;

function App() {
  return (
    <Router>
      <CartProvider>
        <GlobalStyle />
        <AppContainer>
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/products" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/webhooks" element={<WebHook />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </MainContent>
          <Footer />
        </AppContainer>
      </CartProvider>
    </Router>
  );
}

export default App;
