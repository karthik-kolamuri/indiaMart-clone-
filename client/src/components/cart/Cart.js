import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        const fetchCart = async () => {
            if (user) {
                const response = await axios.get(`http://localhost:5000/api/cart/${user._id}`);
                setCart(response.data);
            }
        };
        fetchCart();
    }, [user]);

    return (
        <div>
            <h1>Your Cart</h1>
            {cart ? (
                <>
                    {cart.items.map(item => (
                        <div key={item.productId}>
                            <p>Product ID: {item.productId}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
