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
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ItemContainer = styled.div`
  flex: 0 0 calc((100% - 40px) / 3); /* Initially show 3 items per row */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 992px) {
    flex: 0 0 calc((100% - 30px) / 2); /* On screens smaller than 992px, show 2 items per row */
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 100%; /* On screens smaller than 768px, show 1 item per row */
  }

  &:nth-child(odd) {
    margin-right: 5px;
    margin-left: 5px;
  }

  &:nth-child(even) {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  max-width: 300px; /* Limit the maximum width of the image */
  height: auto; /* Maintain aspect ratio */
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
