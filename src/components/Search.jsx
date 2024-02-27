import React, { useState } from 'react';

const Search = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Tìm kiếm trong mảng data dựa trên từ khóa
    const performSearch = () => {
        const results = data.data.filter(item =>
            item.movieName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div>
             <h1>Movie Search App</h1>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button onClick={performSearch}>Search</button>

            <div>
                {searchResults.map(item => (
                    <div key={item.id}>
                        <h2>{item.movieName}</h2>
                        <p>{item.description}</p>
                        <p>Episode: {item.episode}</p>
                        {/* Hiển thị hình ảnh nếu có đường dẫn */}
                        {item.image && <img src={item.image} alt={item.movieName} />}
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
