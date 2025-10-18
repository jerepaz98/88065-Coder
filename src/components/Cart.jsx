import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) return <p>Carrito vacío</p>;

  return (
    <div>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
      <p>Total: ${totalPrice}</p>
      <button onClick={clearCart}>Vaciar carrito</button>
      <CheckoutForm />
    </div>
  );
};

export default Cart;