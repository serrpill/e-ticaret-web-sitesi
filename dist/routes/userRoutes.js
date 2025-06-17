import { Router } from 'express';
import { prisma } from '../lib/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = Router();
// Kullanıcı kayıt endpoint'i
const registerHandler = async (req, res, next) => {
    try {
        const { email, password, name } = req.body;
        // Eksik alan kontrolü
        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return; // İşlemi burada sonlandır
        }
        // Kullanıcının zaten var olup olmadığını kontrol et
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });
        if (existingUser) {
            res.status(409).json({ message: 'User with this email already exists' });
            return; // İşlemi burada sonlandır
        }
        // Şifreyi hashle
        const hashedPassword = await bcrypt.hash(password, 10);
        // Yeni kullanıcıyı oluştur
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });
        console.log('Yeni oluşturulan kullanıcı:', newUser);
        // JWT oluştur (isteğe bağlı, giriş işlemi için daha uygun)
        // const token = jwt.sign({ userId: newUser.id, role: newUser.role }, process.env.JWT_SECRET || 'supersecret', { expiresIn: '1h' });
        res.status(201).json({ message: 'User registered successfully', user: { id: newUser.id, email: newUser.email, name: newUser.name } });
    }
    catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
        next(error); // Hatanın Express hata işleme middleware'ine geçirilmesi
    }
};
router.post('/register', registerHandler);
// Kullanıcı giriş endpoint'i
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // Eksik alan kontrolü
        if (!email || !password) {
            res.status(400).json({ message: 'Email and password are required' });
            return;
        }
        // Kullanıcının var olup olmadığını kontrol et
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        // Şifreyi karşılaştır
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
        // JWT oluştur
        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET || 'your_jwt_secret_key', // Güvenli bir anahtar kullanın!
        { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token, user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    }
    catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
        next(error);
    }
});
export default router;
