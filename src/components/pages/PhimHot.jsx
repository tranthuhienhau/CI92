import React, { useState, useEffect } from 'react';
import data from '../../data.json'; // Import data from JSON file
import { useNavigate } from 'react-router-dom';

const PhimHot = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [randomWeekMovie, setRandomWeekMovie] = useState(null);
  const [randomMonthMovie, setRandomMonthMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Khởi tạo phim ngẫu nhiên cho tuần và tháng khi component được render
    setRandomWeekMovie(getRandomItem(data.data));
    setRandomMonthMovie(getRandomItem(data.data));
  }, []);

  // Hàm lấy một mục ngẫu nhiên từ mảng dữ liệu
  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (movieId) => {
    navigate(`/product/${movieId}`); // Điều hướng đến trang productDetail với ID của phim
  };

  return (
    <div className="phim-hot" style={{ marginTop: '100px' }}>
      <h1 className='title-phimHot'>TOP PHIM ĐƯỢC XEM NHIỀU NHẤT</h1>
      <div className="buttons">
        <button
          className={activeTab === 'day' ? 'active' : ''}
          onClick={() => handleTabClick('day')}
        >
          Ngày
        </button>
        <button
          className={activeTab === 'week' ? 'active' : ''}
          onClick={() => handleTabClick('week')}
        >
          Tuần
        </button>
        <button
          className={activeTab === 'month' ? 'active' : ''}
          onClick={() => handleTabClick('month')}
        >
          Tháng
        </button>
      </div>
      <div className="data">
        {activeTab === 'day' && (
          <ul>
            {data.data.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.movieName} onClick={() => handleImageClick(item.id)} />
                <p>{item.movieName}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='week-month-container'>
        {activeTab === 'week' && randomWeekMovie && (
          <ul>
            <li>
              <img src={randomWeekMovie.image} alt={randomWeekMovie.movieName} onClick={() => handleImageClick(randomWeekMovie.id)} />
              <p>{randomWeekMovie.movieName}</p>
            </li>
          </ul>
        )}
        {activeTab === 'month' && randomMonthMovie && (
          <ul>
            <li>
              <img src={randomMonthMovie.image} alt={randomMonthMovie.movieName} onClick={() => handleImageClick(randomMonthMovie.id)} />
              <p>{randomMonthMovie.movieName}</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default PhimHot;
