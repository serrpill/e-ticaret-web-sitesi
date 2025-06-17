import { Product } from '../types';

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Cart {
  userId: string;
  items: CartItem[];
  total: number;
  updatedAt: Date;
}

export interface CartResponse {
  success: boolean;
  data?: Cart;
  error?: string;
} 