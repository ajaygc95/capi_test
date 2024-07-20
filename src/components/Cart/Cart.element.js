import styled from "styled-components";
import { Button } from "../../globalStyles";
import { FaArrowRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const CartHeader = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

export const CartItems = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CartTotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const EmptyCartMessage = styled.div`
  background-color: green;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
  opacity: 0.5;
  font-size: 1.2rem;
`;

export const Table = styled.table`
  width: 100%;
  background-color: #f5f5f5;
  border-collapse: collapse;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const TableHeader = styled.thead`
  background-color: #ddd;
  font-weight: bold;
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const CartTotal = styled.div`
  padding: 15px;
  background-colore: #f0f0f0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: auto;
  margin-right: 0;
`;

export const TotalLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  margin: 5px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin: 20px auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const CheckoutButton = styled(Button)`
  padding: 15px;
  width: 300px;
  background-color: ${({ disabled }) => (disabled ? "gray" : "#008080")};
  color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 0; /* Square button */
  display: flex;
  align-items: center;
  justify-content: end;
  text-align: center;
  font-size: 2rem;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "gray" : "#004d4d")};
  }
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
