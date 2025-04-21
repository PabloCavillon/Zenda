
import { Request, Response } from 'express';
import Animal from '../models/Animal';

export const getAllAnimals = async (_req: Request, res: Response) => {
    const animals = await Animal.find().sort({createdAt: -1});
    res.json(animals);
}

export const getAnimalById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        console.log('📦 Buscando animal con ID:', id);
        const animal = await Animal.findById(id);
    
        if (!animal) {
            res.status(404).json({ message: 'Animal not found' });
            return 
        }
    
        res.json(animal);
      } catch (err) {
        console.error('❌ Error en getAnimalById:', err);
        res.status(500).json({ message: 'Server error', error: err });
      }
  };

export const createAnimal = async (req: Request, res: Response) => {
    try {
        const newAnimal = new Animal(req.body);
        const saved = await newAnimal.save();
        res.status(201).json(saved); 
    } catch (err) {
        res.status(400).json({message: 'Error creating animal', error: err});
    }
}

export const deleteAnimal = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      console.log('🗑 Eliminando animal con ID:', id);
      await Animal.findByIdAndDelete(id);
      res.status(204).send();
    } catch (err) {
      console.error('❌ Error en deleteAnimal:', err);
      res.status(500).json({ message: 'Server error', error: err });
    }
  };