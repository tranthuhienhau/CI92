import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../data.json';

const Container = styled.div`
    max-width: 800px;
    margin: 100px auto;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 30px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const FilterButton = styled.button`
    cursor: pointer;
    padding: 8px;
    margin-right: 10px;
    font-size: 18px;
    color: #fff;
    background-color: ${props => props.active ? '#007bff' : '#0B1E30'};
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const ProductContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    div {
        flex: 0 0 calc(33.33% - 20px);
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;

        img {
            width: 100%;
            height: 250px;
            border-radius: 5px;
        }

        p {
            font-size: 16px;
            margin-top: 10px;
        }
    }
`;

const Loading = styled.div`
    font-size: 20px;
    color: #333;
`;

const PhimHot = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('Ngày');

    useEffect(() => {
        fetchProducts(activeFilter.toLowerCase());
    }, [activeFilter]);

    const fetchProducts = (filter) => {
        setLoading(true);
        // Simulate fetching data from data.json
        setTimeout(() => {
            const filteredProducts = data.data.filter(product => product.releaseDate === filter);
            setProducts(filteredProducts);
            setLoading(false);
        }, 1000); // Simulate delay for loading
    };

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <Container>
            <Title>TOP PHIM ĐƯỢC XEM NHIỀU NHẤT</Title>
            <FilterContainer>
                <FilterButton 
                    onClick={() => handleFilterClick('Ngày')} 
                    active={activeFilter === 'Ngày'}
                >
                    Ngày
                </FilterButton>
                <FilterButton 
                    onClick={() => handleFilterClick('Tuần')} 
                    active={activeFilter === 'Tuần'}
                >
                    Tuần
                </FilterButton>
                <FilterButton 
                    onClick={() => handleFilterClick('Tháng')} 
                    active={activeFilter === 'Tháng'}
                >
                    Tháng
                </FilterButton>
            </FilterContainer>
            {loading ? (
                <Loading>Loading...</Loading>
            ) : (
                <ProductContainer>
                    {products.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.movieName} />
                            <p>{product.movieName}</p>
                            <p>{product.releaseDate}</p>
                        </div>
                    ))}
                </ProductContainer>
            )}
        </Container>
    );
};

export default PhimHot;
