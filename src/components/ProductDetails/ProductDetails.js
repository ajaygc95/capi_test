import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductDetailsContainer,
  ButtonContainer,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  AddToCartButton,
  MainContainer,
} from "./ProductDetails.element";
import { CartContext } from "../CartContext";
import { itemData } from "../ItemCard/ItemData";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = itemData.find((item) => item.id === Number(id)); // find product in itemData

  const handleAddToCart = () => {
    addToCart(product);
    window.fbq("track", "AddToCart", {
      value: product.price,
      currency: "USD",
      content_ids: [product.id],
      content_type: "product",
    });
  };

  useEffect(() => {
    if (product) {
      // Send "ViewContent" event to Facebook Pixel
      window.fbq("track", "ViewContent", {
        content_ids: [product.id],
        content_type: "product",
        value: product.price,
        currency: "USD",
      });
    }
  }, [product]);

  if (!product) return <div>Product not found</div>;

  return (
    <MainContainer>
      <ProductTitle>Product Details</ProductTitle>
      <ProductContainer>
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo>
          <ProductDetailsContainer>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductDetailsContainer>
          <ButtonContainer>
            <AddToCartButton primary onClick={handleAddToCart}>
              Add to Cart
            </AddToCartButton>
          </ButtonContainer>
        </ProductInfo>
      </ProductContainer>
    </MainContainer>
  );
}

export default ProductDetails;
