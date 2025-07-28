// routes/orderRoutes.js
import express from 'express';
import {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/user/:userId', getUserOrders);
router.get('/', getAllOrders); // For admin
router.put('/:orderId', updateOrderStatus); // Admin update

export default router;
