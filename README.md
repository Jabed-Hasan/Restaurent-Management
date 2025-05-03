# 🍽️ Restaurant Ordering Platform

A full-stack web application where users can browse a restaurant menu, place orders, and manage them. Admins and users have access to full CRUD operations for menu items and orders. Built with MERN stack (MongoDB, Express.js, React, Node.js).

## 🔗 Live Site
> [Add your deployed link here]

## 🧰 Tech Stack

### Frontend:
- React
- React Router DOM
- Axios
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt.js

## ⚙️ Features

- 🔐 **User Authentication**: Register and login securely using JWT.
- 🛒 **Place Orders**: Users can browse food items, add them to cart, and place orders.
- 🧾 **CRUD Operations**: 
  - **Users**: Can manage their own orders (Create, Read, Update, Cancel).
  - **Admins**: Can manage all orders and menu items.
- 📦 **Order Status**: Track order status from "Placed" → "In Progress" → "Delivered".
- 📋 **Admin Panel**:
  - Add/Edit/Delete menu items.
  - View all orders and user info.
- 📱 **Responsive UI**: Works seamlessly across desktops and mobile devices.

## 📁 Folder Structure

```bash
client/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── App.jsx

server/
├── controllers/
├── models/
├── routes/
├── middlewares/
└── index.js
