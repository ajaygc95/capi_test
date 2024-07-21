import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Checkout, Navbar, Policy, WebHook, Footer } from "./components";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding-bottom: 80px;
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
            <ToastContainer
              position="top-center"
              hideProgressBar={false}
              newestOnTop={false}
              autoClose={500} // Duration in ms
              rtl={false}
              pauseOnFocusLoss={false} // Ensures toast does not stay when the user focuses away
              pauseOnHover={false} // Ensures toast auto-closes even if hovered
              draggable
              limit={3} // Limit the number of toasts
            />
          </MainContent>
          <Footer />
        </AppContainer>
      </CartProvider>
    </Router>
  );
}

export default App;
