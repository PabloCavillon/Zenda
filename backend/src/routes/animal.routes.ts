import { Router } from 'express';
import {
  getAllAnimals,
  getAnimalById,
  createAnimal,
  deleteAnimal
} from '../controllers/animal.controller';

const router = Router();

router.get('/', getAllAnimals);
router.get('/:id', getAnimalById);
router.post('/', createAnimal);
router.delete('/:id', deleteAnimal);

export default router;