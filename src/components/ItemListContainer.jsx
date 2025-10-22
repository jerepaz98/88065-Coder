import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebase';
import ItemList from '../components/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = categoriaId 
      ? query(collection(db, 'productos'), where('categoria', '==', categoriaId))
      : collection(db, 'productos');

    getDocs(productosRef)
      .then(snapshot => {
        setProductos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
      .catch(error => console.error('Error al obtener productos:', error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="container">
      <h1>{greeting || 'Productos'}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p>No hay productos disponibles en esta categoría</p>
      )}
    </div>
  );
};

export default ItemListContainer;