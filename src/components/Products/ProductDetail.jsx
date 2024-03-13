import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data.json' // Import dữ liệu từ file data.json
import Comment from './InformationDetail/Comment'
import Information from './InformationDetail/Information'
import Similar from './InformationDetail/SimilarMovie'
const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Tìm kiếm sản phẩm theo id trong dữ liệu từ file data.json
    const foundProduct = data.data.find(item => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  const handleClick = (itemId) => {
    navigate(`/${itemId}`);
  };

  return (
    <div className='bacground-detail'>
      {product && (
        <>
          <img className='background-img-detail' src={product.background} />
          <div className='blurred-background'></div>
          <div className='product-detail-all'>
            <div className='btn-img-product-detail'>
              <img className='img-product-detail' src={product.image} />
              <button onClick={() => handleClick(product.id)} className='btn-play'>Xem phim</button>
            </div>
            {/* Render thông tin sản phẩm */}
            <p>{product.movieName}</p>
            <p>{product.description}</p>
            {/* Và các thông tin khác... */}
          </div>
          {/* Render các sản phẩm tương tự hoặc bình luận ở đây */}
        </>
      )}
    </div>
  );
};

export default ProductDetail;
