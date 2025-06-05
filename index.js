import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import alertRoutes from './routes/alert.routes.js';
import './utils/cron.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(cors());
app.use(express.json());
app.use('/api/alerts', alertRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

export default app; // Para prubeas

