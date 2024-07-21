import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import {
  CartHeader,
  CartItems,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  CartTotal,
  TotalLine,
  ButtonWrapper,
  CheckoutButton,
  ArrowIcon,
  DeleteButton,
  QuantityInput,
  ItemInfo,
  ItemImage,
  ItemDescription,
  EmptyCartMessage,
  TableContainer,
  CartTotalContainer,
  StyledLink,
} from "./Cart.element";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    window.fbq("track", "InitiateCheckout", {
      value: totalPrice,
      currency: "USD",
      contents: cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        item_price: parseFloat(item.price),
      })),
      content_type: "product",
    });
  };

  return (
    <>
      <CartHeader>Cart</CartHeader>
      <CartItems>
        <TableContainer>
          {cart.length === 0 ? (
            <EmptyCartMessage>
              Your cart is empty. Keep shopping.
            </EmptyCartMessage>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>
                    <b>Product</b>
                  </TableCell>
                  <TableCell>
                    <b>Price</b>
                  </TableCell>
                  <TableCell>
                    <b>Quantity</b>
                  </TableCell>
                  <TableCell>
                    <b>Subtotal</b>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHeader>
              <tbody>
                {cart.map((item, index) => {
                  const price = parseFloat(item.price);
                  const subtotal = price * item.quantity;
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <ItemInfo>
                          <ItemImage
                            src={
                              item.image_url || "https://via.placeholder.com/50"
                            }
                            alt={item.name}
                            onError={(e) =>
                              (e.target.src = "https://via.placeholder.com/50")
                            }
                          />
                          <ItemDescription>{item.name}</ItemDescription>
                        </ItemInfo>
                      </TableCell>
                      <TableCell>${price.toFixed(2)}</TableCell>
                      <TableCell>
                        <QuantityInput
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                        />
                      </TableCell>
                      <TableCell>${subtotal.toFixed(2)}</TableCell>
                      <TableCell>
                        <DeleteButton onClick={() => removeFromCart(item.id)}>
                          Delete
                        </DeleteButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </tbody>
            </Table>
          )}
          <CartTotalContainer>
            {cart.length > 0 && (
              <CartTotal>
                <TotalLine>
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </TotalLine>
                <TotalLine>
                  <span>Tax:</span>
                  <span>$0.00</span>
                </TotalLine>
                <TotalLine>
                  <span>Other Charges:</span>
                  <span>$0.00</span>
                </TotalLine>
                <TotalLine>
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </TotalLine>
              </CartTotal>
            )}
          </CartTotalContainer>
        </TableContainer>
        <ButtonWrapper>
          <StyledLink
            to={{
              pathname: "/checkout",
              state: { totalPrice: totalPrice },
            }}
          >
            <CheckoutButton
              primary
              disabled={cart.length === 0}
              onClick={handleCheckout}
            >
              Checkout
              <ArrowIcon />
            </CheckoutButton>
          </StyledLink>
        </ButtonWrapper>
      </CartItems>
    </>
  );
}

export default Cart;
