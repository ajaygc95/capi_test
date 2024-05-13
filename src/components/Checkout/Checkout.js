// src/components/Checkout/Checkout.js
import React from "react";
import {
  CheckoutContainer,
  InfoContainer,
  UserInfo,
  CardInfo,
  TotalPrice,
  CheckoutForm,
  FormLabel,
  FormInput,
  FormSubmitButton,
  CheckoutTitle,
  MainContainer,
  FormContainer,
  TotalContainer,
  TotalLine,
  UserInformationBox,
  RighInfoContainer,
  TotalContainerBox,
} from "./Checkout.element";

function Checkout() {
  return (
    <MainContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutContainer>
        <InfoContainer>
          <UserInformationBox>
            <h2>User Information</h2>
            <FormContainer>
              <FormLabel>First Name</FormLabel>
              <FormInput type="text" name="firstName" />
            </FormContainer>
            <FormContainer>
              <FormLabel>Last Name</FormLabel>
              <FormInput type="text" name="lastName" />
            </FormContainer>
            <FormContainer>
              <FormLabel>Email</FormLabel>
              <FormInput type="email" name="email" />
            </FormContainer>
            <FormContainer>
              <FormLabel>Address</FormLabel>
              <FormInput type="text" name="address" />
            </FormContainer>
            <FormContainer>
              <FormLabel>Birth Date</FormLabel>
              <FormInput type="text" name="address" />
            </FormContainer>
            <FormContainer>
              <FormLabel>Phone Number</FormLabel>
              <FormInput type="number" name="address" />
            </FormContainer>
          </UserInformationBox>
          <UserInformationBox>
            <h2>Card Information</h2>
            <FormContainer>
              <FormLabel>Card Number</FormLabel>
              <FormInput type="text" name="cardNumber" />
            </FormContainer>
            <FormContainer>
              <FormLabel>Expiry Date</FormLabel>
              <FormInput type="text" name="expiryDate" />
            </FormContainer>
            <FormContainer>
              <FormLabel>CVV</FormLabel>
              <FormInput type="text" name="cvv" />
            </FormContainer>
          </UserInformationBox>
        </InfoContainer>
        <RighInfoContainer>
          <TotalContainer>
            <TotalLine>Subtotal: $100</TotalLine>
            <TotalLine>Tax: $0</TotalLine>
            <TotalLine>Total: $100</TotalLine>
            <FormSubmitButton type="submit">Confirm Pay</FormSubmitButton>
          </TotalContainer>
        </RighInfoContainer>
      </CheckoutContainer>
    </MainContainer>
  );
}

export default Checkout;
