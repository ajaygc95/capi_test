// src/components/Cart/Cart.element.js
import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartHeader = styled.h1`
  margin-bottom: 20px;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 0.5fr;
  gap: 10px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const ItemDescription = styled.p`
  margin: 0;
`;

export const ItemPrice = styled.p`
  margin: 0;
`;

export const EmptyCartMessage = styled.p`
  margin: auto;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

export const TotalLine = styled.h2`
  width: 100%;
  text-align: right;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const CheckoutButton = styled(Button)`
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? "gray" : "#4B59F7")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const ArrowIcon = styled(FaArrowRight)`
  margin-left: 10px;
`;

export const DeleteButton = styled(MdDelete)`
  font-size: 2rem;
  color: red;

  &:hover {
    cursor: pointer;
  }
`;
export const QuantityInput = styled.input`
  width: 50px;
`;
