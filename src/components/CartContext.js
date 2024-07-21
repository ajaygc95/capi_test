import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = Cookies.get("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
  }, [cart]);

  const addToCart = (item) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (index >= 0) {
        // If the item is already in the cart, update the quantity
        const updatedCart = [...currentCart];
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + 1,
        };
        return updatedCart;
      } else {
        // If the item is not in the cart, add it
        return [...currentCart, { ...item, quantity: 1 }];
      }
    });

    // Dismiss any existing toasts before showing a new one
    toast.dismiss();
    toast.success(`Added ${item.name} to cart.`);
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((currentCart) => {
      return currentCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  const getTotalCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, getTotalCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
