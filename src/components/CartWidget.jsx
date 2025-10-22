import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/cart" className="cart-widget">
      <img 
        src="/cart-icon.png" 
        alt="Carrito" 
        onError={(e) => { e.target.src = 'https://via.placeholder.com/24'; }} 
      />
      {totalQuantity > 0 && <span>{totalQuantity}</span>}
    </Link>
  );
};

export default CartWidget;