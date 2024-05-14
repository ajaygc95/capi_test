// src/components/ItemCard/ItemCard.js
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  MainContainer,
  ItemsContainer,
  ItemContainer,
  ItemImage,
  ItemPrice,
  ItemDescription,
  AddToCartButton,
  GoToCartButton,
  ButtonWrapper,
} from "./ItemCard.element";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemCard() {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://54.176.122.21:8000/api/products/")
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading items: {error.message}</div>;

  return (
    <MainContainer>
      <h1>Shop</h1>
      <ItemsContainer>
        {items.map((item) => (
          <ItemContainer key={item.id}>
            <ItemImage src={item.image_url} alt="item" />
            <ItemDescription>{item.name}</ItemDescription>
            <ItemPrice>${item.price}</ItemPrice>

            <AddToCartButton onClick={() => addToCart(item)}>
              Add to Cart
            </AddToCartButton>
          </ItemContainer>
        ))}
      </ItemsContainer>
      <ButtonWrapper>
        <Link to="/cart">
          <GoToCartButton primary>Go to Cart</GoToCartButton>
        </Link>
      </ButtonWrapper>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        autoClose={500}
      />
    </MainContainer>
  );
}

export default ItemCard;
