const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Get Cart
router.get('/:userId', async (req, res) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart);
});

// Add to Cart
router.post('/', async (req, res) => {
    const { userId, productId } = req.body;
    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({ userId, items: [{ productId }] });
    } else {
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += 1;
        } else {
            cart.items.push({ productId });
        }
    }

    await cart.save();
    res.json(cart);
});

module.exports = router;
