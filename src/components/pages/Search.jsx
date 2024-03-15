import React, { useState } from 'react';
import data from '../../data.json';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import ProductDetail from '../Products/ProductDetail';
import { useNavigate } from 'react-router-dom';
const SearchContainer = styled.div`
    margin-top: 100px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 ;
    box-sizing: border-box;
    
`;

const ResultsContainer = styled.div`
    margin-top: 20px;
`;

const ResultItem = styled.div`
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
`;

const MovieTitle = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 16px;
    margin-bottom: 10px;
`;

const Image = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 4px;
    margin-top: 10px;
`;

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const handleChange = (event) => {
        setSearchTerm(event.target.value);

        // Tìm kiếm kết quả dựa trên giá trị nhập vào
        const results = data.data.filter(item =>
            item.movieName.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.description.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <SearchContainer>
            <Title>Movie Search App</Title>
            <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
            />

            {/* Hiển thị kết quả tìm kiếm */}
            <ResultsContainer>
                {searchResults.map(item => (
                    <ResultItem key={item.id}>
                        <MovieTitle>{item.movieName}</MovieTitle>
                       
                        <p>Episode: {item.episode}</p>
                        {item.image && <Image src={item.image} alt={item.movieName}  onClick={() => navigate(`/product/${item.id}`)}/>}
                       
                    </ResultItem>
                ))}
            </ResultsContainer>
        </SearchContainer>
    );
};

export default Search;
