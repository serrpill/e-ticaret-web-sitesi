const API_URL = import.meta.env.VITE_API_URL;;
export const cartApi = {
    async getCart() {
        try {
            const response = await fetch(`${API_URL}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            return {
                success: false,
                error: 'Sepet bilgileri alınamadı'
            };
        }
    },
    async addToCart(product, quantity = 1) {
        try {
            const response = await fetch(`${API_URL}/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: product.id, quantity }),
            });
            const data = await response.json();
            return data;
        }
        catch (error) {
            return {
                success: false,
                error: 'Ürün sepete eklenemedi'
            };
        }
    },
    async updateCartItem(productId, quantity) {
        try {
            const response = await fetch(`${API_URL}/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId, quantity }),
            });
            const data = await response.json();
            return data;
        }
        catch (error) {
            return {
                success: false,
                error: 'Sepet güncellenemedi'
            };
        }
    },
    async removeFromCart(productId) {
        try {
            const response = await fetch(`${API_URL}/remove`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId }),
            });
            const data = await response.json();
            return data;
        }
        catch (error) {
            return {
                success: false,
                error: 'Ürün sepetten çıkarılamadı'
            };
        }
    },
    async clearCart() {
        try {
            const response = await fetch(`${API_URL}/clear`, {
                method: 'DELETE',
            });
            const data = await response.json();
            return data;
        }
        catch (error) {
            return {
                success: false,
                error: 'Sepet temizlenemedi'
            };
        }
    }
};
