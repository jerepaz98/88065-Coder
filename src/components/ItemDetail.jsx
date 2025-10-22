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
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{producto.nombre || 'Sin nombre'}</h2>
        <img 
          src={producto.imagen || 'https://via.placeholder.com/300'} 
          className="card-img-top" 
          alt={producto.nombre || 'Producto sin nombre'} 
        />
        <p className="card-text">Precio: ${producto.precio || 0}</p>
        <p className="card-text">Stock: {producto.stock || 0}</p>
        <p className="card-text">{producto.descripcion || 'Sin descripción'}</p>
        {!added ? (
          <ItemCount stock={producto.stock || 0} onAdd={onAdd} />
        ) : (
          <Link to="/cart" className="btn btn-success">Ir al carrito</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;