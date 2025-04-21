import { Request, Response } from "express";
import Curiosity from "../models/Curiosity";


export const getCuriosities = async (_req: Request, res: Response) => {
    const curiosities = await Curiosity.find().populate('animalId', 'name');
    res.json(curiosities)
}

export const getCuriositiesByAnimal = async (req: Request, res: Response) => {
    const {animalId} = req.params;
    const curiosities = await Curiosity.find({animalId});
    res.json(curiosities);
}

export const createCuriosity = async (req: Request, res: Response) => {
    try {
        const newCuriosity = new Curiosity(req.body);
        const saved = await newCuriosity.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({message: 'Error creating curiosity', error: err});
    }
}

export const deleteCuriosity = async (req: Request, res: Response) => {
    const {id} = req.params;
    await Curiosity.findByIdAndDelete(id);
    res.status(204).send();
}

export const getCuriosityById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const curiosity = await Curiosity.findById(id);
        if (!curiosity) {
            res.status(404).json({ message: 'Curiosity not found' });
            return
        } 
        res.json(curiosity);
    } catch (err) {
        console.error('❌ Error en getCuriosityById:', err);
        res.status(500).json({ message: 'Server error', error: err });
    }
};