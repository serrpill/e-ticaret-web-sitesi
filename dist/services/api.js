import axios from 'axios';
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
    login: (credentials) => api.post('/api/users/login', credentials),
    register: (credentials) => api.post('/api/users/register', credentials),
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
};
export const products = {
    getAll: (categoryId) => api.get('/products', { params: { categoryId } }),
    getById: (id) => api.get(`/products/${id}`),
};
export const categories = {
    getAll: () => api.get('/categories'),
};
export const cart = {
    get: () => api.get('/cart'),
    addItem: (productId, quantity) => api.post('/cart/items', { productId, quantity }),
    removeItem: (productId) => api.delete(`/cart/items/${productId}`),
    updateQuantity: (productId, quantity) => api.patch(`/cart/items/${productId}`, { quantity }),
    mergeCarts: (localCart) => api.post('/cart/merge', localCart),
};
