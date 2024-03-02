import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError('Error fetching product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Product Detail</h2>
            {product && (
                <div>
                    <h3>{product.title}</h3>
                    <p>Category: {product.category}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    <img src={product.image} alt={product.title} />
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
