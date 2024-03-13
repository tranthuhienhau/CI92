import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ item }) => {
  const navigate = useNavigate();

  const onClick = (itemId) => {
    navigate(`/${itemId}`);
  };

  return (
    <div className='item-product-all product-search'>
      {item.map((item) => (
        <div key={item.id} className='item-product' onClick={() => onClick(item.id)}>
          <img className='img-item' src={item.image} alt={item.movieName} />
          <p className='movieName'>{item.movieName}</p>
          <p className='views'>Lượt xem: {item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default Product;
