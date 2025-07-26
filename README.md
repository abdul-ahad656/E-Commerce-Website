# E-Commerce-Website

# 🛒 MERN Stack E-Commerce App

This is a full-stack E-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js). It supports user authentication, product listing, cart management, and order tracking.

---

## 🚀 Features

- 🔐 User Registration and Login (JWT-based auth)
- 🛍️ Product Listing and Detail View
- 🧺 Add to Cart and Update Quantity
- 📦 Place Orders and View Order History
---

## 🧑‍💻 Tech Stack

| Frontend | Backend |
|----------|---------|
| React + Tailwind CSS | Node.js + Express |
| React Router DOM | MongoDB + Mongoose |
| Axios | JWT Authentication |
| CORS + dotenv |

---

## 🛠️ Folder Structure

project/
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── utils/ # auth.js, cart.js helpers
│ │ └── App.js
│
├── backend/ # Node.js Backend
│ ├── models/ # Mongoose Schemas
│ ├── routes/ # API Routes
│ ├── controllers/
│ ├── config/
│ └── server.js
│
└── README.md


---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/abdul-ahad656/E-Commerce-Website.git
cd E-Commerce-Website

2. Backend Setup
cd backend
npm install

Create a .env file:
PORT=3000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret

Run the backend:
node server.js

3. Frontend Setup
cd frontend
npm install

Create a .env file:
REACT_APP_BACKEND_URL=http://localhost:3000

Run the frontend:
npm run dev

🌐 API Routes Overview
Auth
POST /api/auth/register
POST /api/auth/login

Products
GET /api/products
GET /api/products/:id

Cart
GET /api/cart/:userId
POST /api/cart/add
DELETE /api/cart/remove/:itemId

Orders
POST /api/orders
GET /api/orders/:userId

🔒 Authentication Strategy
Uses JWT tokens stored in localStorage
Utility functions in utils/auth.js handle storing and retrieving user tokens
axios calls automatically include tokens when needed
