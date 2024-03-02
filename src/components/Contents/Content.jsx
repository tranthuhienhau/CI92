import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`;

const ProductSlider = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding-bottom: 20px;
`;

const ProductItem = styled.div`
    flex: 0 0 auto;
    margin-right: 20px;
    text-align: center;
`;

const ProductImage = styled.img`
    max-width: 200px;
    height: 350px;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const Category = styled.p`
    margin-top: 10px;
    font-weight: bold;
`;

const LoadingIndicator = styled.div`
    text-align: center;
    font-style: italic;
    color: #888;
`;

const ErrorText = styled.div`
    text-align: center;
    color: red;
`;

const Content = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <LoadingIndicator>Loading...</LoadingIndicator>;
    }

    if (error) {
        return <ErrorText>{error}</ErrorText>;
    }

    return (
        <Container>
            <Title>Products</Title>
            <ProductSlider>
                {products.map(product => (
                    <ProductItem key={product.id}>
                       <Link to={`/product/${product.id}`} onClick={(e) => e.preventDefault()}>
                        <ProductImage src={product.image} alt={product.title} />
                        </Link>

                        <Category>{product.category}</Category>
                    </ProductItem>
                ))}
            </ProductSlider>
        </Container>
    );
};

export default Content;
