// src/components/ItemCard/ItemCard.js
import React, { useContext } from "react";
import { itemData } from "./ItemData";
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
  const { addToCart, message } = useContext(CartContext);

  return (
    <MainContainer>
      <h1>Shop</h1>
      <ItemsContainer>
        {itemData.map((item) => (
          <ItemContainer key={item.id}>
            <ItemImage src={item.image} alt="item" />
            <ItemPrice>${item.price}</ItemPrice>
            <ItemDescription>{item.name}</ItemDescription>
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
