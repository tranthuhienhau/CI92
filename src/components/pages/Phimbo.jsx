import React, { useState } from 'react';
import data from '../../data.json';
import { useNavigate } from 'react-router-dom';

const Phimbo = ({ defaultMovieType }) => {
  const [filter, setFilter] = useState({
    movieType: defaultMovieType !== undefined ? defaultMovieType : '0', // Thiết lập giá trị mặc định cho movieType nếu defaultMovieType được truyền vào
    category: '',
    nation: '',
    releaseYear: ''
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const filteredMovies = data.data.filter(movie => {
    return (
      (filter.movieType === '' || parseInt(movie.id) % 2 === parseInt(filter.movieType)) &&
      (filter.category === '' || movie.category === filter.category) &&
      (filter.nation === '' || movie.nation === filter.nation) &&
      (filter.releaseYear === '' || movie.releaseDate.includes(filter.releaseYear))
    );
  });

  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      <h2> Movie </h2>
      <div className='filter'>
        <label>
          Movie Type:
          <select name="movieType" onChange={handleFilterChange} value={filter.movieType}>
            <option value="">All</option>
            <option value="1">Single</option>
            <option value="0">Series</option>
          </select>
        </label>
        <label>
          Category:
          <select name="category" onChange={handleFilterChange} value={filter.category}>
            <option value="">All</option>
            <option value="marvel">Marvel</option>
            <option value="cartoon">Cartoon</option>
            <option value="horrified">Horrified</option>
            <option value="mentality">Mentality</option>
          </select>
        </label>
        <label>
          Nation:
          <select name="nation" onChange={handleFilterChange} value={filter.nation}>
            <option value="">All</option>
            <option value="Mỹ">Mỹ</option>
            <option value="Nhật Bản">Nhật Bản</option>
            <option value="Việt Nam">Việt Nam</option>
          </select>
        </label>
        <label>
          Release Year:
          <input
            type="text"
            name="releaseYear"
            placeholder="YYYY"
            value={filter.releaseYear}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <ul className='items_phimbo'>
        {filteredMovies.map(movie => (
          <li className='item_phimbo' key={movie.id} onClick={() => navigate(`/product/${movie.id}`)}>
            <img src={movie.image} alt={movie.movieName}  className='img_phimbo'/>
            <h3 className='title_phimbo'>{movie.movieName}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phimbo;
