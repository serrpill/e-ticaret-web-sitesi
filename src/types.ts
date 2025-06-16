export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: string;
  sportCategories: string[];
  price: number;
  imageUrl: string;
  brand: string;
  rating: number;
  subcategory: string;
  stock: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Category {
  id: string;
  name: string;
  // Diğer kategori özellikleri buraya eklenebilir
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
} 