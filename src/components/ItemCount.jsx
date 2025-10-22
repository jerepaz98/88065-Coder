import React, { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => count > 1 && setCount(count - 1);
  const increment = () => count < stock && setCount(count + 1);

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-secondary me-2" onClick={decrement}>-</button>
      <span className="mx-2">{count}</span>
      <button className="btn btn-outline-secondary ms-2" onClick={increment}>+</button>
      <button 
        className="btn btn-primary ms-3" 
        onClick={() => onAdd(count)} 
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
      {stock === 0 && <p className="mt-2 text-danger">Producto sin stock</p>}
    </div>
  );
};

export default ItemCount;