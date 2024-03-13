import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data.json'; // Import dữ liệu từ file data.json
import Comment from './InformationDetail/Comment';
import Information from './InformationDetail/Information';
import SimilarMovie from './InformationDetail/SimilarMovie';

const WatchMovie = () => {
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
        <div key={product.id}>
          <div className='product-watch-all'>
            <video controls className='background-video-detail' src={product.background}/>
            <Information item={product}/>
          </div>
          {/* Render các sản phẩm tương tự hoặc bình luận ở đây */}
          {/* Ví dụ: */}
          <SimilarMovie item={data.data.filter(item => item.category === product.category && item.id !== product.id)} onClick={handleClick}/>
          <Comment item={[product]} />
        </div>
      )}
    </div>
  );
};

export default WatchMovie;
