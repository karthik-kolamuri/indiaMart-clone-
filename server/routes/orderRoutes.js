const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create Order
router.post('/', async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
});

// Get User Orders
router.get('/:userId', async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
});

module.exports = router;
