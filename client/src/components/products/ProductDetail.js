import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`http://localhost:5000/api/products/${id}`);
            setProduct(response.data);
        };
        const fetchReviews = async () => {
            const response = await axios.get(`http://localhost:5000/api/reviews/${id}`);
            setReviews(response.data);
        };
        fetchProduct();
        fetchReviews();
    }, [id]);

    return (
        <div>
            {product && (
                <>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <h2>Reviews</h2>
                    {reviews.map(review => (
                        <div key={review._id}>
                            <p>{review.comment}</p>
                            <p>Rating: {review.rating}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default ProductDetail;
