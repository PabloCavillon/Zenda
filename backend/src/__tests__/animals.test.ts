import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });

import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import Animal from '../models/Animal';

jest.setTimeout(15000);

const mockAnimal = {
  name: 'Test Animal',
  scientificName: 'Testus Animalus',
  habitat: 'Test Habitat',
  diet: 'Test Diet',
  dangerous: false,
  conservationStatus: 'Unknown',
  images: ['https://example.com/image.jpg'],
  credits: 'Test Credits'
};

let createdId: string;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || '');
});

afterAll(async () => {
  await Animal.deleteMany({ name: 'Test Animal' });
  await mongoose.disconnect();
});

describe('Zenda API - Animals', () => {
  it('GET /api/animals → should return 200 and array', async () => {
    const res = await request(app).get('/api/animals');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/animals → should create new animal', async () => {
    const res = await request(app).post('/api/animals').send(mockAnimal);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(mockAnimal.name);
    createdId = res.body._id;
  });

  it('GET /api/animals/:id → should return the created animal', async () => {
    const res = await request(app).get(`/api/animals/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(createdId);
    expect(res.body.name).toBe(mockAnimal.name);
  });

  it('DELETE /api/animals/:id → should delete the animal', async () => {
    const res = await request(app).delete(`/api/animals/${createdId}`);
    expect(res.statusCode).toBe(204);
  });

  it('GET /api/animals/:id after delete → should return 404', async () => {
    const res = await request(app).get(`/api/animals/${createdId}`);
    expect(res.statusCode).toBe(404);
  });
});
