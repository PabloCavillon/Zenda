import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import {animalRoutes} from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || '';

app.use(cors());
app.use(express.json());

app.use('/api/animals', animalRoutes);
//app.use('/api/curiosities', curiositiesRoutes);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`)
        })
    })
    .catch((error) => {
        console.error('❌ Error connecting to MongoDB:', error);
    });