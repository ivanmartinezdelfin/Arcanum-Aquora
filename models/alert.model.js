import { Schema, model } from 'mongoose';

const alertSchema = new Schema({
    symbol: { type: String, required: true },
    targetPrice: { type: Number, required: true },
    email: { type: String, required: true },
});

export default model('Alert', alertSchema); 