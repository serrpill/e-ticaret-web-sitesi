# E-Commerce Project

A modern e-commerce web application built with React, TypeScript, and Tailwind CSS.

## Features

- User authentication (register/login) with JWT
- Product listing with category filtering
- Shopping cart management
- Infinite scroll product loading
- Responsive design
- Modern UI components

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- React Router
- Jotai (State Management)
- Axios
- React Query
- React Intersection Observer

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
  ├── components/
  │   ├── auth/
  │   │   └── LoginForm.tsx
  │   ├── products/
  │   │   └── ProductList.tsx
  │   └── cart/
  │       └── Cart.tsx
  ├── services/
  │   └── api.ts
  ├── store/
  │   └── index.ts
  ├── types/
  │   └── index.ts
  ├── App.tsx
  └── main.tsx
```

## API Endpoints

The project includes the following API endpoints:

### Authentication
- POST /api/auth/login
- POST /api/auth/register

### Products
- GET /api/products
- GET /api/products/:id

### Categories
- GET /api/categories

### Cart
- GET /api/cart
- POST /api/cart/items
- PATCH /api/cart/items/:id
- DELETE /api/cart/items/:id
- POST /api/cart/merge

## Development

The project uses Vite for development and building. Available scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Security

- JWT-based authentication
- Password hashing with bcrypt
- Token-based session management
- DDoS protection measures

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 