import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const usersResponse = await axios.get('http://localhost:5000/api/admin/users');
            const productsResponse = await axios.get('http://localhost:5000/api/admin/products');
            const ordersResponse = await axios.get('http://localhost:5000/api/admin/orders');

            setUsers(usersResponse.data);
            setProducts(productsResponse.data);
            setOrders(ordersResponse.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h2>Users</h2>
            {users.map(user => (
                <div key={user._id}>{user.name}</div>
            ))}
            <h2>Products</h2>
            {products.map(product => (
                <div key={product._id}>{product.name}</div>
            ))}
            <h2>Orders</h2>
            {orders.map(order => (
                <div key={order._id}>Order ID: {order._id}</div>
            ))}
        </div>
    );
};

export default AdminDashboard;
