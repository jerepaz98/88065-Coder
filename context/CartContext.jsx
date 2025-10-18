import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agrega un producto al carrito
  const addItem = (item, quantity) => {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      setCart(cart.map(i => 
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Remueve un producto del carrito
  const removeItem = (itemId) => {
    setCart(cart.filter(i => i.id !== itemId));
  };

  // Vacía el carrito
  const clearCart = () => setCart([]);

  // Calcula la cantidad total de unidades
  const totalQuantity = cart.reduce((acc, i) => acc + i.quantity, 0);

  // Calcula el precio total
  const totalPrice = cart.reduce((acc, i) => acc + i.precio * i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};