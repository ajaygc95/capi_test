// src/components/Checkout/Checkout.element.js
import styled from "styled-components";
import { Button, Container } from "../../globalStyles";

export const MainContainer = styled(Container)`
  margin-top: 20px;
`;

export const CheckoutTitle = styled.h1``;

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  border: none;
  padding: 20px;
`;

export const InfoBox = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const UserInformationBox = styled.div`
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px; // add some margin at the bottom
`;
export const FormInput = styled.input`
  height: 50px;
  border: none;
  border-radius: 0;
  padding: 10px;
  width: 100%;
  background-color: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const TotalContainerBox = styled.div``;

export const TotalLine = styled.p`
  font-size: 24px; // increase font size
  align-self: flex-start;
`;

export const RighInfoContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // align items to the start and end
`;
export const TotalContainer = styled.div`
  align-self: flex-end;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px; // add some padding
  border-radius: 10px; // add rounded corners
`;
export const FormSubmitButton = styled(Button)`
  margin-top: 20px;
  padding: 20px;
  align-self: flex-end; // align to the end
  font-size: 1.5rem;
`;
