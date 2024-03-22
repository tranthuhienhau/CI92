import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; 
import data from '../../data.json'; 
import ProductDetail from '../Products/ProductDetail';
import WatchMovie from '../Products/WatchMovie';

const Container = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`;

const ProductSlider = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding-bottom: 20px;
`;

const ProductItem = styled.div`
    text-align: center;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 300px;
   
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const MovieName = styled.p`
    margin-top: 10px;
    font-weight: bold;
    text-align: center;
`;

const Loading = styled.div`
    font-size: 20px;
    color: #333;
`;

const Content = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        // Gán dữ liệu từ data.json vào state
        setProducts(data.data);
        setLoading(false);
    }, []);

    if (loading) {
        return <Loading>Loading...</Loading>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
            <Title>PHIM ĐƯỢC ĐỀ CỬ</Title>
            <ProductSlider>
                {products.map(product => (
                    <ProductItem key={product.id}>
                        {/* Thay đổi onClick để sử dụng useNavigate để điều hướng khi click */}
                        <ProductImage src={product.image} alt={product.movieName} onClick={() => navigate(`/product/${product.id}`)} /> 
                        <MovieName>{product.movieName}</MovieName>
                    </ProductItem>
                ))}
            </ProductSlider>
            <ProductDetail/>
            <WatchMovie/>
        </Container>
    );
};

export default Content;
