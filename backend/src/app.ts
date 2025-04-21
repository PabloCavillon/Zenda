import express from 'express';
import cors from 'cors';
import animalRoutes from './routes/animal.routes';
import curiosityRoutes from './routes/curiosity.routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/animals', animalRoutes);
app.use('/api/curiosities', curiosityRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;