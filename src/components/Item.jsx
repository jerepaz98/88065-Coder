import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img 
          src={producto.imagen || 'https://via.placeholder.com/200'} 
          className="card-img-top" 
          alt={producto.nombre || 'Producto sin nombre'} 
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre || 'Sin nombre'}</h5>
          <p className="card-text">Precio: ${producto.precio || 0}</p>
          <Link to={`/item/${producto.id}`} className="btn btn-primary">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;