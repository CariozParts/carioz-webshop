# Carioz AutoParts WebShop

A comprehensive e-commerce platform for car parts with advanced features including user authentication, product management, search functionality, and order processing.

## Features

- User Authentication & Authorization
- Product Management
- Advanced Search & Filtering
- Shopping Cart
- Order Processing
- Payment Integration (Stripe)
- Admin Dashboard
- User Reviews & Ratings
- Wishlist
- Discount System
- Email Notifications
- Responsive Design

## Tech Stack

- Frontend: React + TypeScript
- Backend: Node.js + Express + TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Authentication: JWT + bcrypt
- Payment: Stripe
- Search: Elasticsearch
- UI: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- Elasticsearch
- Stripe Account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Fill in the required environment variables

4. Set up the database:
   ```bash
   cd backend
   npx prisma migrate dev
   ```

5. Start the development servers:
   ```bash
   # Start backend server
   cd backend
   npm run dev

   # Start frontend server
   cd frontend
   npm run dev
   ```

## Project Structure

```
carioz-webshop/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── prisma/
│   └── tests/
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── hooks/
    │   ├── services/
    │   └── utils/
    └── public/
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 