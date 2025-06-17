import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        console.log('MONGODB_URI:', process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('Error conectando MongoDB:', error);
        process.exit(1);
    }
};