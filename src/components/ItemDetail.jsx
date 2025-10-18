import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(producto, quantity);
    setAdded(true);
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      {!added ? (
        <ItemCount stock={producto.stock} onAdd={onAdd} />
      ) : (
        <Link to="/cart">Ir al carrito</Link>
      )}
    </div>
  );
};

export default ItemDetail;