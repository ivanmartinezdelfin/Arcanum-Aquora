import axios from 'axios';
import Alert from '../models/alert.model.js';
import sendEmail from './notification.service.js';

export const checkStockPrices = async () => {
    const alerts = await Alert.find();
    for (const alert of alerts) {
        const { data } = await axios.get(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${alert.symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
        );
        const currentPrice = parseFloat(data['Global Quote']['05. price']);
        if (currentPrice >= alert.targetPrice) {
            await sendEmail(alert.email, alert.symbol, currentPrice);
        }
    }
};