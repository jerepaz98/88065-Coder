import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productoRef = doc(db, 'productos', itemId);

    getDoc(productoRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          setProducto({ id: snapshot.id, ...snapshot.data() });
        } else {
          setProducto(null);
        }
      })
      .catch(error => {
        console.error('Error al obtener el producto:', error);
        setProducto(null);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div className="container mt-4">
      {loading ? (
        <p>Cargando producto...</p>
      ) : producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;