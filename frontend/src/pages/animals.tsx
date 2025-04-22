import AnimalCard from "@/components/AnimalCard";
import axios from "axios";
import { useEffect, useState } from "react";


interface Animal {
    _id: string;
    name: string;
    scientificName: string;
    habitat?: string;
    diet?: string;
    dangerous?: boolean;
    conservationStatus?: string;
    images?: string[];
}

export default function AnimalsPage() {
    
    const [animals, setAnimals] = useState<Animal[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:4000/api/animals")
            .then(res => {
                setAnimals(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('❌ Error fetching animals:', err);
                setLoading(false);
            })
    },[]);


    if (loading) 
        return (
            <div className="text-center mt-10">
                Cargando animales...
            </div>
        )

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">🐾 Lista de animales</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {animals.map(animal => (
                     <AnimalCard
                        key={animal._id}
                        id={animal._id}
                        name={animal.name}
                        scientificName={animal.scientificName}
                        habitat={animal.habitat}
                        diet={animal.diet}
                        dangerous={animal.dangerous}
                        conservationStatus={animal.conservationStatus}
                        image={animal.images?.[0]}
                    />
                ))}
            </div>
        </main>
    )
}