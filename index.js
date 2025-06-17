import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { connectDB } from './src/config/db.js';
import alertRoutes from './src/routes/alert.routes.js';
import './src/utils/cron.js';


connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/alerts', alertRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

export default app; // Para prubeas

