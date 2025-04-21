
import { Request, Response } from 'express';
import Animal from '../models/Animal';

export const getAllAnimals = async (_req: Request, res: Response) => {
    const animals = await Animal.find().sort({createdAt: -1});
    res.json(animals);
}

export const getAnimalById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    if (!animal) return res.status(404).json({ message: 'Animal not found' });
    res.json(animal);
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
    const {id} = req.params;
    await Animal.findByIdAndDelete(id);
    res.status(204).send();
}