import cron from 'node-cron';
import { checkStockPrices } from '../services/stock.services.js';

cron.schedule('*/15 * * * *', checkStockPrices); //Cada 15 minutos