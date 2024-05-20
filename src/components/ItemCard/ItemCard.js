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
import { ClipLoader } from "react-spinners";

function ItemCard() {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://capicore.azurewebsites.net/api/products/")
      .then((response) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    axios
      .post("http://127.0.0.1:8000/api/cart/", item)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    window.fbq("track", "AddToCart", {
      value: item.price,
      currency: "USD",
      content_ids: [item.id],
      content_type: "product",
    });
  };

  if (loading) {
    return (
      <MainContainer>
        <ClipLoader size={150} color={"#123abc"} loading={loading} />
      </MainContainer>
    );
  }
  if (error) return <div>Error loading items: {error.message}</div>;
  return (
    <MainContainer>
      <h1>Shop</h1>
      <ItemsContainer>
        {items.map((item) => (
          <ItemContainer key={item.id}>
            <Link to={`/product/${item.id}`}>
              <ItemImage src={item.image_url} alt="item" />
              <ItemDescription>{item.name}</ItemDescription>
              <ItemPrice>${item.price}</ItemPrice>
            </Link>
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
