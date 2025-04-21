import { Router } from "express";
import { 
    createCuriosity, 
    deleteCuriosity, 
    getCuriosities, 
    getCuriositiesByAnimal, 
    getCuriosityById
} from "../controllers/curiosity.controller";

const router = Router();

router.get('/', getCuriosities);
router.get('/animal/:animalId', getCuriositiesByAnimal);
router.get('/:id', getCuriosityById);
router.post('/', createCuriosity);
router.delete('/:id', deleteCuriosity);

export default router;