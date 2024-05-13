// src/components/Cart/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import {
  MainContainer,
  CartHeader,
  CartItems,
  CartItem,
  ItemInfo,
  ItemImage,
  ItemDescription,
  ItemPrice,
  DeleteButton,
  QuantityInput,
  EmptyCartMessage,
  CartTotal,
  TotalLine,
  ButtonWrapper,
  CheckoutButton,
  ArrowIcon,
} from "./Cart.element";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <MainContainer>
      <CartHeader>Checkout Page</CartHeader>
      <CartItems>
        <CartItem>
          <ItemDescription>Product</ItemDescription>
          <ItemPrice>Price</ItemPrice>
          <ItemPrice>Quantity</ItemPrice>
          <ItemPrice>Subtotal</ItemPrice>
        </CartItem>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <CartItem key={index}>
              <ItemInfo>
                <ItemImage src={item.image} alt="item" />
                <ItemDescription>{item.description}</ItemDescription>
              </ItemInfo>
              <ItemPrice>${item.price}</ItemPrice>
              <QuantityInput
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <ItemPrice>${item.price * item.quantity}</ItemPrice>
              <DeleteButton onClick={() => removeFromCart(item.id)}>
                Delete
              </DeleteButton>
            </CartItem>
          ))
        ) : (
          <EmptyCartMessage>
            Your cart is empty. Keep shopping.
          </EmptyCartMessage>
        )}
      </CartItems>
      <CartTotal>
        <TotalLine>Subtotal: ${totalPrice}</TotalLine>
        <TotalLine>Tax: $0</TotalLine>
        <TotalLine>Other Charges: $0</TotalLine>
        <TotalLine>Total: ${totalPrice}</TotalLine>
      </CartTotal>
      <ButtonWrapper>
        <Link to="/checkout">
          <CheckoutButton primary disabled={cart.length === 0}>
            Checkout
            <ArrowIcon />
          </CheckoutButton>
        </Link>
      </ButtonWrapper>
    </MainContainer>
  );
}

export default Cart;
