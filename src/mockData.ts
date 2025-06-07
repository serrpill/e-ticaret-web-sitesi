import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    description: 'Electronic devices and accessories'
  },
  {
    id: '2',
    name: 'Clothing',
    description: 'Fashion and apparel'
  },
  {
    id: '3',
    name: 'Books',
    description: 'Books and literature'
  },
  {
    id: '4',
    name: 'Home & Garden',
    description: 'Home decor and garden supplies'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    categoryId: '1',
    imageUrl: 'https://picsum.photos/400/300?random=1',
    stock: 50
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 299.99,
    categoryId: '1',
    imageUrl: 'https://picsum.photos/400/300?random=2',
    stock: 30
  },
  {
    id: '3',
    name: 'Cotton T-Shirt',
    description: 'Comfortable cotton t-shirt in various colors',
    price: 24.99,
    categoryId: '2',
    imageUrl: 'https://picsum.photos/400/300?random=3',
    stock: 100
  },
  {
    id: '4',
    name: 'Denim Jeans',
    description: 'Classic denim jeans with perfect fit',
    price: 79.99,
    categoryId: '2',
    imageUrl: 'https://picsum.photos/400/300?random=4',
    stock: 75
  },
  {
    id: '5',
    name: 'Best-Selling Novel',
    description: 'Award-winning fiction novel',
    price: 19.99,
    categoryId: '3',
    imageUrl: 'https://picsum.photos/400/300?random=5',
    stock: 200
  },
  {
    id: '6',
    name: 'Cookbook',
    description: 'Collection of gourmet recipes',
    price: 34.99,
    categoryId: '3',
    imageUrl: 'https://picsum.photos/400/300?random=6',
    stock: 150
  },
  {
    id: '7',
    name: 'Table Lamp',
    description: 'Modern design table lamp',
    price: 89.99,
    categoryId: '4',
    imageUrl: 'https://picsum.photos/400/300?random=7',
    stock: 40
  },
  {
    id: '8',
    name: 'Plant Pot',
    description: 'Ceramic pot for indoor plants',
    price: 29.99,
    categoryId: '4',
    imageUrl: 'https://picsum.photos/400/300?random=8',
    stock: 60
  }
]; 