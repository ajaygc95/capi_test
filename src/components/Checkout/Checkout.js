import React, { useContext } from "react";
import {
  CheckoutContainer,
  CheckoutTitle,
  InfoContainer,
  UserInformationBox,
  FormContainer,
  FormLabel,
  FormInput,
  CardDetailsBox,
  RighInfoContainer,
  TotalContainer,
  TotalDetails,
  TotalLabel,
  TotalValue,
  FormSubmitButton,
  MainContainer,
} from "./Checkout.element";
import { CartContext } from "./../CartContext"; // Import your CartContext

function Checkout() {
  const { cart } = useContext(CartContext); // Access cart from CartContext

  // Calculate the subtotal, tax, and total
  const calculateSubtotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.07; // Assuming 7% tax rate
  const total = subtotal + tax;

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
              <FormInput type="text" name="birthDate" />
            </FormContainer>
            <FormContainer>
              <FormLabel>Phone Number</FormLabel>
              <FormInput type="tel" name="phoneNumber" />
            </FormContainer>
          </UserInformationBox>
          <CardDetailsBox>
            <h2>Card Information</h2>
            <FormContainer>
              <FormLabel>Name on Card</FormLabel>
              <FormInput type="text" name="cardNumber" />
            </FormContainer>
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
          </CardDetailsBox>
        </InfoContainer>
        <RighInfoContainer>
          <TotalContainer>
            <TotalDetails>
              <TotalLabel>Subtotal:</TotalLabel>
              <TotalValue>${subtotal.toFixed(2)}</TotalValue>
            </TotalDetails>
            <TotalDetails>
              <TotalLabel>Tax:</TotalLabel>
              <TotalValue>${tax.toFixed(2)}</TotalValue>
            </TotalDetails>
            <TotalDetails>
              <TotalLabel>Total:</TotalLabel>
              <TotalValue>${total.toFixed(2)}</TotalValue>
            </TotalDetails>
            <FormSubmitButton type="submit">Place Order</FormSubmitButton>
          </TotalContainer>
        </RighInfoContainer>
      </CheckoutContainer>
    </MainContainer>
  );
}

export default Checkout;



