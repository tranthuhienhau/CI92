import React, { useState } from 'react';
import data from '../../data.json';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import Product from '../Products/Product';
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
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
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

const Search = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showPreviousSearches, setShowPreviousSearches] = useState(false);
    const [previousSearches, setPreviousSearches] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        const results = data.data.filter(item =>
            item.movieName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);

        // Lưu kết quả tìm kiếm trước đó
        setPreviousSearches(prevSearches => [...prevSearches, searchTerm]);
    };

    const handleInputClick = () => {
        // Hiển thị hoặc ẩn kết quả tìm kiếm trước đó khi click vào ô input
        setShowPreviousSearches(true);
    };

    const handleInputBlur = () => {
        // Ẩn kết quả tìm kiếm trước đó khi ô input mất focus
        setShowPreviousSearches(false);
    };

    return (
        <SearchContainer>
            <Title>Movie Search App</Title>
            <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                onClick={handleInputClick}
                onBlur={handleInputBlur}
            />
            <Button onClick={handleSearch}>Search</Button>

            {/* Hiển thị các kết quả tìm kiếm trước đó */}
            {showPreviousSearches && previousSearches.length > 0 && (
                <ResultsContainer>
                    <Title>Previous Searches</Title>
                    {previousSearches.map((search, index) => (
                        <div key={index}>{search}</div>
                    ))}
                </ResultsContainer>
            )}

            {/* Hiển thị kết quả tìm kiếm */}
            <ResultsContainer>
                {searchResults.map(item => (
                    <ResultItem key={item.id}>
                        <MovieTitle>{item.movieName}</MovieTitle>
                        <Description>{item.description}</Description>
                        <p>Episode: {item.episode}</p>
                        {item.image && <Image src={item.image} alt={item.movieName} />}
                        {item.video && <ReactPlayer url={item.video} controls />}
                    </ResultItem>
                ))}
            </ResultsContainer>
        </SearchContainer>
    );
};

export default Search;
