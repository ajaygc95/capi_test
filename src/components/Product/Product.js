import React, { useContext, useEffect, useState } from "react";
import CircleDivider from "../CircleDivider/CircleDivider";
import {
  ItemsContainer,
  ItemContainer,
  ItemLink,
  ItemImage,
  ItemPrice,
  ItemDescription,
  AddToCartButton,
} from "./Product.element";
import { CartContext } from "../CartContext";
import { ClipLoader } from "react-spinners";
import { productData } from "../pages/HomePage/Data";

function Product() {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fire the Facebook Pixel page view event when this component mounts
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }

    // Simulate loading delay for data fetching
    setTimeout(() => {
      setItems(productData);
      setLoading(false);
    }, 100);
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  if (loading) {
    return (
      <ItemsContainer>
        <ClipLoader size={150} color={"#123abc"} loading={loading} />
      </ItemsContainer>
    );
  }
  if (error) return <div>Error loading items: {error.message}</div>;

  return (
    <>
      <CircleDivider />
      <ItemsContainer>
        {items.map((item) => (
          <ItemContainer key={item.id}>
            <ItemLink to={`/product/${item.id}`}>
              <ItemImage src={item.image_url} alt={item.name} />
              <ItemDescription>{item.name}</ItemDescription>
              <ItemPrice>${item.price}</ItemPrice>
            </ItemLink>
            <AddToCartButton onClick={() => handleAddToCart(item)}>
              Add to Cart
            </AddToCartButton>
          </ItemContainer>
        ))}
      </ItemsContainer>
    </>
  );
}

export default Product;
