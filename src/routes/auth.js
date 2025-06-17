const express = require('express');
const router = express.Router();
const User = require('../models/user'); // varsa mongoose modeli

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Kullanıcı bulunamadı' });

    // Şifre kontrolü (gerçek projede bcrypt ile karşılaştırılır)
    if (user.password !== password)
      return res.status(401).json({ message: 'Hatalı şifre' });

    res.json({ user }); // Token yoksa bile şimdilik kullanıcıyı döner
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

module.exports = router;
