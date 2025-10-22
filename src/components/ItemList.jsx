import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.length > 0 ? (
        productos.map(producto => (
          <Item key={producto.id} producto={producto} />
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </div>
  );
};

export default ItemList;