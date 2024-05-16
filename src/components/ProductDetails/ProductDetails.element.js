import styled from "styled-components";
import { Container, Button } from "../../globalStyles";

export const MainContainer = styled(Container)`
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Make ProductImage and ProductInfo the same height */
  margin-top: 2rem;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 50%;
  object-fit: cover;
  border-radius: 10px;
`;

export const ProductDetailsContainer = styled.div``;

export const ProductInfo = styled.div`
  padding: 20px;
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: lightgray;
  border-radius: 10px;
`;
export const ProductPrice = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  align-self: flex-end;
`;

export const ButtonContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const ProductDescription = styled.p`
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled(Button)`
  width: 100%;
  padding: 20px;
  font-size: 1.5rem;
  border-radius: 0;
`;
