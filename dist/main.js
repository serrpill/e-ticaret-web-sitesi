import express from 'express';
import { testDatabaseConnection } from './lib/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
// Gelen her isteği logla
app.use((req, _res, next) => {
    console.log(`Incoming request: ${req.method} ${req.originalUrl}`);
    next();
});
app.use('/api/users', userRoutes);
app.get('/', (res) => {
    res.send('API is running...');
});
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    // Test database connection
    const isConnected = await testDatabaseConnection();
    if (!isConnected) {
        console.error('Failed to connect to database. Please check your configuration.');
    }
});
