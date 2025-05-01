const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');
const router = express.Router();

// Get All Users
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Get All Products
router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get All Orders
router.get('/orders', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

module.exports = router;
