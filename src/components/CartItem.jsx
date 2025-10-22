import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5>{item.nombre || 'Sin nombre'}</h5>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.precio || 0}</p>
            <p>Subtotal: ${(item.precio || 0) * item.quantity}</p>
          </div>
          <button 
            className="btn btn-danger"
            onClick={() => removeItem(item.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;