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
    login: (credentials) => api.post('/auth/login', credentials),
    register: (credentials) => api.post('/auth/register', credentials),
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
    addItem: (productId, quantity) => api.post('/cart/add', { productId, quantity }),
    updateItem: (productId, quantity) => api.put('/cart/update', { productId, quantity }),
    removeItem: (productId) => api.delete(`/cart/remove/${productId}`),
    clear: () => api.delete('/cart/clear')
};
