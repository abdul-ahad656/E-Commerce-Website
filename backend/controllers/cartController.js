// controllers/cartController.js
import CartItem from '../models/CartItem.js';

// Add item to cart
export const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const existingItem = await CartItem.findOne({ userId, productId });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const cartItem = new CartItem({ userId, productId, quantity });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add to cart' });
  }
};

// Get user cart items
export const getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const items = await CartItem.find({ userId }).populate('productId');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

// Remove an item from cart
export const removeFromCart = async (req, res) => {
  const { itemId } = req.params;

  try {
    await CartItem.findByIdAndDelete(itemId);
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove item' });
  }
};
