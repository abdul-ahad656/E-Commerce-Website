// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  image_url: {
    type: String
  },
  category: {
    type: String
  },
  stock: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
