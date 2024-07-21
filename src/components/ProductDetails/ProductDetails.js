import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  PageTitle,
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
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://capicore.azurewebsites.net/api/products/${id}/`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) {
    return (
      <MainContainer>
        <ClipLoader size={150} color={"#123abc"} loading={loading} />
      </MainContainer>
    );
  }

  if (error) {
    return <div>Error loading product: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <MainContainer>
      <PageTitle>Product Details</PageTitle>
      <ProductContainer>
        <ProductImage src={product.image_url} alt={product.name} />
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
