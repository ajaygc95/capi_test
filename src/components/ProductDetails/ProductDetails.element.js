import styled from "styled-components";
import { Container, Button } from "../../globalStyles";

export const MainContainer = styled(Container)`
  margin-top: 20px;
  width: 80%;
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 2rem;
`;

export const ProductImage = styled.img`
  width: 50%;
  object-fit: cover;
`;

export const ProductTitle = styled.h1`
  padding: 10px;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const ProductDetailsContainer = styled.div``;

export const ProductInfo = styled.div`
  padding: 20px;
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(
    139,
    192,
    198,
    0.5
  ); /* Adjusted color with alpha channel for transparency */
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
  background-color: teal;

  &:hover {
    background-color: #004d4d; // Match your app's hover color
  }
`;
