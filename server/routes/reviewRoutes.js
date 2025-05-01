const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// Add Review
router.post('/', async (req, res) => {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
});

// Get Reviews for a Product
router.get('/:productId', async (req, res) => {
    const reviews = await Review.find({ productId: req.params.productId }).populate('userId');
    res.json(reviews);
});

module.exports = router;
