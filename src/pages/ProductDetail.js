import React from 'react';
import { useParams } from 'react-router-dom';
import mockProducts from '../mockProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
