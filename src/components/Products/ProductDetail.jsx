import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data.json' // Import dữ liệu từ file data.json
import Comment from './InformationDetail/Comment'
import Information from './InformationDetail/Information'
import Similar from './InformationDetail/SimilarMovie'
import { NavLink } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate(); //hook từ React Router để điều hướng trang
  const { id } = useParams(); //lấy id của sản phẩm từ url
  const [product, setProduct] = useState(null);//để lưu trữ trạng thái sản phẩm hiện tại và hook
  const isLoggedIn = sessionStorage.getItem('login'); // Kiểm tra xem đã đăng nhập hay chưa

  useEffect(() => {
    // Tìm kiếm sản phẩm theo id trong dữ liệu từ file data.json
    const foundProduct = data.data.find(item => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  const handleClick = (itemId) => {
    if (!isLoggedIn) {
      navigate('/login'); // Nếu chưa đăng nhập, chuyển hướng sang trang đăng nhập
    } else {
      navigate(`/${itemId}`); // Nếu đã đăng nhập, cho phép xem phim
    }
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
            <div className='text_description'>
            <p className='movieName'>{product.movieName}</p>
            <p>{product.time}</p>
            <div className='tooltip'>
            <button className='btn-facebook' onClick={() => {window.location.href="https://www.facebook.com/"}}>Facebook</button>
            <button className='btn-bst'>+ Bộ sưu tập
           
            </button>
            </div>
            <p>TÁC GIẢ: {product.director} </p>
            <p>QUỐC GIA: {product.nation} </p>
            <p>KHỞI CHIẾU: {product.releaseDate} </p>
            <p className='description_p'>{product.description}</p>
            </div>
            ...
          </div>
          {/* Render các sản phẩm tương tự hoặc bình luận ở đây */}
        </>
      )}
    </div>
  );
};

export default ProductDetail;
