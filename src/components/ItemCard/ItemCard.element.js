import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
export const MainContainer = styled(Container)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 20px;
`;
export const Message = styled.p`
  color: green;
  margin-bottom: 20px;
`;
export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const ItemContainer = styled.div`
  flex: 0 0 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ItemDescription = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;

export const AddToCartButton = styled(Button)`
  background-color: teal;
  border-radius: 0;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

export const CartIconContainer = styled.div`
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;
export const GoToCartButton = styled(Button)`
  border-radius: 0;
  font-size: 1.3rem;
  padding: 20px;
  margin-top: 20px;
  background-color: teal;
`;
