import React, { createContext, useState, useEffect } from "react";

//create context for cart
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);
  // item amout state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });
  // update item amout
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);
  //ADD CART
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if have item in cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // console.log(cartItem);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount + 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    // console.log(cartItem);
  };
  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  //clean cart
  const clearCart = () => {
    setCart([]);
  };
  //increase amount
  const increaseAmout = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    addToCart(cartItem, id);
  };
  //decrease amount
  const decreaseAmout = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: cartItem.amount - 1,
          };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmout,
        decreaseAmout,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
