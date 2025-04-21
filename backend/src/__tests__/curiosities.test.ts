import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import Curiosity from '../models/Curiosity';

jest.setTimeout(15000);

const mockCuriosity = {
  animalId: '000000000000000000000000', // usamos ObjectId fake
  text: 'Las jirafas tienen la misma cantidad de vértebras que los humanos.',
};

let createdId: string;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || '');
});

afterAll(async () => {
  await Curiosity.deleteMany({ text: mockCuriosity.text });
  await mongoose.disconnect();
});

describe('Zenda API - Curiosities', () => {
  it('GET /api/curiosities → should return 200 and array', async () => {
    const res = await request(app).get('/api/curiosities');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/curiosities → should create new curiosity', async () => {
    const res = await request(app).post('/api/curiosities').send(mockCuriosity);
    console.log('🧪 Curiosity creada:', res.body)
    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe(mockCuriosity.text);
    createdId = res.body._id;
  });

  it('GET /api/curiosities/:id → should return the created curiosity', async () => {
    const res = await request(app).get(`/api/curiosities/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(createdId);
    expect(res.body.text).toBe(mockCuriosity.text);
  });

  it('DELETE /api/curiosities/:id → should delete the curiosity', async () => {
    const res = await request(app).delete(`/api/curiosities/${createdId}`);
    expect(res.statusCode).toBe(204);
  });

  it('GET /api/curiosities/:id after delete → should return 404', async () => {
    const res = await request(app).get(`/api/curiosities/${createdId}`);
    expect(res.statusCode).toBe(404);
  });
});
