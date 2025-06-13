import axios from 'axios';
import { AuthResponse, LoginCredentials, RegisterCredentials, Product, Category, Cart } from '../types';

export const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (credentials: LoginCredentials) => 
    api.post<AuthResponse>('/api/users/login', credentials),
  register: (credentials: RegisterCredentials) => 
    api.post<AuthResponse>('/api/users/register', credentials),
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
};

export const products = {
  getAll: (categoryId?: string) => 
    api.get<Product[]>('/products', { params: { categoryId } }),
  getById: (id: string) => 
    api.get<Product>(`/products/${id}`),
};

export const categories = {
  getAll: () => 
    api.get<Category[]>('/categories'),
};

export const cart = {
  get: () => api.get<Cart>('/cart'),
  addItem: (productId: string, quantity: number) => 
    api.post('/cart/items', { productId, quantity }),
  removeItem: (productId: string) => 
    api.delete(`/cart/items/${productId}`),
  updateQuantity: (productId: string, quantity: number) => 
    api.patch(`/cart/items/${productId}`, { quantity }),
  mergeCarts: (localCart: Cart) => 
    api.post('/cart/merge', localCart),
}; 