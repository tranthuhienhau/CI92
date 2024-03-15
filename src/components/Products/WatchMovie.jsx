import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data.json'; // Import dữ liệu từ file data.json
import Comment from './InformationDetail/Comment';
import Information from './InformationDetail/Information';
import SimilarMovie from './InformationDetail/SimilarMovie';
import ReactPlayer from 'react-player';

const WatchMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Tìm kiếm sản phẩm theo id trong dữ liệu từ file data.json
    const foundProduct = data.data.find(item => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  const handleClick = () => {
    // Kích hoạt chế độ toàn màn hình khi người dùng click vào video
    const videoElement = document.querySelector('.background-video-detail');
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
      }
    }
  };

  return (
    <div className='bacground-detail'>
      {product && (
        <div key={product.id}>
          <div className='product-watch-all'>
            {/* Thêm sự kiện onClick để kích hoạt chế độ toàn màn hình */}
            <ReactPlayer 
              url={product.video} 
              controls 
              className='background-video-detail' 
              onClick={handleClick}
            />
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
