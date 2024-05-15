import React, { useContext, useState } from "react";
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
import { itemData } from "./ItemData";

function ItemCard() {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState(itemData); // use itemData directly

  const handleAddToCart = (item) => {
    addToCart(item);
    window.fbq("track", "AddToCart", {
      value: item.price,
      currency: "USD",
      content_ids: [item.id],
      content_type: "product",
    });
  };

  return (
    <MainContainer>
      <h1>Shop</h1>
      <ItemsContainer>
        {items.map((item) => (
          <ItemContainer key={item.id}>
            <ItemImage src={item.image} alt="item" />
            <ItemDescription>{item.name}</ItemDescription>
            <ItemPrice>${item.price}</ItemPrice>

            <AddToCartButton onClick={() => handleAddToCart(item)}>
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
