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
      console.error(error);
    }
  };

  if (orderId) return <p>¡Compra realizada! ID de orden: {orderId}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Teléfono" onChange={handleChange} required />
      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;