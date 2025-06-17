import axios from 'axios';
import { LoginCredentials, RegisterCredentials, Product, Category, Cart, User } from '../types';

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

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
    api.post<ApiResponse<{ token: string; user: User }>>('/auth/login', credentials),
  register: (credentials: RegisterCredentials) => 
    api.post<ApiResponse<{ user: User }>>('/auth/register', credentials),
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
  get: () => api.get<ApiResponse<Cart>>('/cart'),
  addItem: (productId: string, quantity: number) => 
    api.post<ApiResponse<Cart>>('/cart/add', { productId, quantity }),
  updateItem: (productId: string, quantity: number) => 
    api.put<ApiResponse<Cart>>('/cart/update', { productId, quantity }),
  removeItem: (productId: string) => 
    api.delete<ApiResponse<Cart>>(`/cart/remove/${productId}`),
  clear: () => api.delete<ApiResponse<Cart>>('/cart/clear')
}; 