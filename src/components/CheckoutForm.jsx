import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { CartContext } from '../context/CartContext';

const CheckoutForm = () => {
  const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      items: cart,
      total: totalPrice,
      date: new Date()
    };
    try {
      const docRef = await addDoc(collection(db, 'ordenes'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al generar la orden:', error);
    }
  };

  if (orderId) return <p className="alert alert-success">¡Compra realizada! ID de orden: {orderId}</p>;

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <input 
          name="name" 
          placeholder="Nombre" 
          onChange={handleChange} 
          required 
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input 
          name="email" 
          placeholder="Email" 
          type="email" 
          onChange={handleChange} 
          required 
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input 
          name="phone" 
          placeholder="Teléfono" 
          onChange={handleChange} 
          required 
          className="form-control"
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={cart.length === 0}
      >
        Confirmar compra
      </button>
      {cart.length === 0 && <p className="mt-2 text-danger">El carrito está vacío</p>}
    </form>
  );
};

export default CheckoutForm;