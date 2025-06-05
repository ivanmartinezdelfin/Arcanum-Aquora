import request from 'supertest';
import app from '../index.js';
import mongoose from 'mongoose';
import { mongoMemoryServer } from 'mongo-memory-server';


let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

Test('Crear alerta', async () => {
    const res = (await request(app).post('/api/alerts')).setEncoding({
        symbol: 'AAPL',
        targetPrice: 150,
        email: 'test@example.com',
    });
    expect(res.status).toBe(201);
    expect(res.body.symbol).toBe('AAPL');
});