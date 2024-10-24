import React, { useState } from 'react';
import mockProducts from '../mockProducts';
import './ProductList.css';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState(''); 


  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortCriteria === 'price') {
      return a.price - b.price;
    } else if (sortCriteria === 'stock') {
      return a.stock - b.stock;
    }
    return 0;
  });

  return (
    <div className="product-list-container">
      <h2>Listado de Productos</h2>
      
      {}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {}
      <select
        value={sortCriteria}
        onChange={(e) => setSortCriteria(e.target.value)}
        className="sort-dropdown"
      >
        <option value="">Ordenar por</option>
        <option value="price">Precio</option>
        <option value="stock">Stock</option>
      </select>

      <div className="product-grid">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <p>Código: {product.code}</p>
            </div>
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
