import React from 'react'
import { useNavigate } from 'react-router-dom'
const SimilarMovie = ({item , onClick}) => {
  const navigate = useNavigate()
  return (
    <div className='similar'>
        <h2 className='title-similar-movies'>Phim tương tự</h2>
        <div className='similar-movie-all'>
            {item.map((item) => (
            <div className='similar-movies' key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
            <img className='img-similar-movies' src={item.image}/>
            <p className='name-similar-movies'>{item.movieName}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default SimilarMovie