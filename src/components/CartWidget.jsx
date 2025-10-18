import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/cart">
      <img src="cart-icon.png" alt="Carrito" />
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;