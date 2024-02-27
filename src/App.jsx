import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const instanceAxios = axios.create({
  baseURL: "https://fakestoreapi.com/products"
});

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const fetchProduct = async () => {
    try {
      const { data } = await instanceAxios.get();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleImageClick = (productId) => {
    setSelectedProductId(productId);
  };

  return (
    <div>
      <div className='btn'>
        <button onClick={fetchProduct} type='primary'>Fetch product</button>
      </div>
      {products.map(product => (
        <div key={product.id} className='product'>
          <img src={product.image} alt={product.title} onClick={() => handleImageClick(product.id)} />
          <div className='product-info'>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
      {selectedProductId && <p>Selected Product ID: {selectedProductId}</p>}
    </div>
  );
};

export default App;
