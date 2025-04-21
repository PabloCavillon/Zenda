import { Document, model, Schema } from "mongoose";

export interface IAnimal extends Document {
    name: string;
    scientificName: string;
    habitat?: string;
    diet?: string;
    dangerous?: boolean;
    conservationStatus: 'Extinct' | 'Endangered' | 'Vulnerable' | 'Least Concern' | 'Unknown';
    images: string[];
    credits?: string;
    createdAt: Date;
    type: 'REAL' | 'MYTHICAL';
}

const animalSchema = new Schema<IAnimal>(
    {
        name: { type: String, required: true },
        scientificName: { type: String },
        habitat: { type: String },
        diet: { type: String },
        dangerous: { type: Boolean, default: false },
        conservationStatus: {
            type: String,
            enum: ['Extinct', 'Endangered', 'Vulnerable', 'Least Concern', 'Unknown'],
            default: 'Unknown'
        },
        images: { type: [String], default: [] },
        credits: { type: String },
        type: {
            type: String,
            enum: ['REAL', 'MYTHICAL'],
            default: 'REAL'
        },
        createdAt: { type: Date, default: Date.now }
    },
    { 
        versionKey: false 
    }
);

export default model<IAnimal>('Animal', animalSchema);