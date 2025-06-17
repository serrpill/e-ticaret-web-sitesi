const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const auth = require('../middleware/auth');
const mockProducts = require('../data/mockProducts'); // Mock ürün verilerini import edin

// Yardımcı fonksiyon: Ürün ID'sine göre ürün detaylarını getir
const getProductDetails = (productId) => {
  const allProducts = Object.values(mockProducts).flat();
  return allProducts.find(p => p.id === productId);
};

// Get cart
router.get('/', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    
    if (!cart) {
      cart = new Cart({
        userId: req.user.id,
        items: [],
        total: 0
      });
      await cart.save();
    }
    
    res.json({
      success: true,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Sepet bilgileri alınamadı'
    });
  }
});

// Add to cart
router.post('/add', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    let cart = await Cart.findOne({ userId: req.user.id });
    
    if (!cart) {
      cart = new Cart({
        userId: req.user.id,
        items: [],
        total: 0
      });
    }
    
    const existingItem = cart.items.find(item => item.productId === productId);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const product = getProductDetails(productId); // Yardımcı fonksiyonu kullan
      
      if (!product) {
        return res.status(404).json({
          success: false,
          error: 'Ürün bulunamadı'
        });
      }

      cart.items.push({
        productId,
        quantity,
        product
      });
    }
    
    // Update total
    cart.total = cart.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
    
    cart.updatedAt = Date.now();
    await cart.save();
    
    res.json({
      success: true,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Ürün sepete eklenemedi'
    });
  }
});

// Update cart item
router.put('/update', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    const cart = await Cart.findOne({ userId: req.user.id });
    
    if (!cart) {
      return res.status(404).json({
        success: false,
        error: 'Sepet bulunamadı'
      });
    }
    
    const item = cart.items.find(item => item.productId === productId);
    
    if (!item) {
      return res.status(404).json({
        success: false,
        error: 'Ürün sepette bulunamadı'
      });
    }
    
    item.quantity = quantity;
    
    // Update total
    cart.total = cart.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
    
    cart.updatedAt = Date.now();
    await cart.save();
    
    res.json({
      success: true,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Sepet güncellenemedi'
    });
  }
});

// Remove from cart
router.delete('/remove', auth, async (req, res) => {
  try {
    const { productId } = req.body;
    
    const cart = await Cart.findOne({ userId: req.user.id });
    
    if (!cart) {
      return res.status(404).json({
        success: false,
        error: 'Sepet bulunamadı'
      });
    }
    
    cart.items = cart.items.filter(item => item.productId !== productId);
    
    // Update total
    cart.total = cart.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
    
    cart.updatedAt = Date.now();
    await cart.save();
    
    res.json({
      success: true,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Ürün sepetten çıkarılamadı'
    });
  }
});

// Clear cart
router.delete('/clear', auth, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.id });
    
    if (!cart) {
      return res.status(404).json({
        success: false,
        error: 'Sepet bulunamadı'
      });
    }
    
    cart.items = [];
    cart.total = 0;
    cart.updatedAt = Date.now();
    await cart.save();
    
    res.json({
      success: true,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Sepet temizlenemedi'
    });
  }
});

module.exports = router; 