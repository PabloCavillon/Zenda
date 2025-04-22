import AnimalMap from "@/components/AnimalMaps";
import axios from "axios";
import { useRouter } from "next/router";
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
    credits?: string;
    type?: string;
}

interface Curiosity {
    _id: string;
    text: string;
}

export default function AnimalDetailPage() {
    const { query } = useRouter();
    const [animal, setAnimal] = useState<Animal|null>(null);
    const [curiosities, setCuriosities] = useState<Curiosity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if(!query) return;

        const fetchAnimal = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/animals/${query.id}`)
                setAnimal(res.data);
            } catch (err) {
                console.error('❌ Error fetching animal:', err);
            }
        }

        const fetchCuriosities = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/api/curiosities/animal/${query.id}`);
                setCuriosities(res.data);
            } catch (err) {
                console.error('❌ Error fetching curiosities:', err);
            }
        }

        Promise.all([fetchAnimal(), fetchCuriosities()]).finally(() => setLoading(false));
    }, [query.id])

    if (loading) return <div className="text-center mt-10">🔄 Cargando...</div>;
    if (!animal) return <div className="text-center mt-10 text-red-600">❌ Animal no encontrado</div>;

    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">{animal.name}</h1>
            {animal.scientificName && <p className="italic text-gray-600 mb-4">{animal.scientificName}</p>}
        
            {animal.images && animal.images.length > 0 && (
                <img
                src={animal.images[0]}
                alt={animal.name}
                className="w-full h-64 object-cover rounded-md mb-4"
                />
            )}
    
            <div className="mb-6">
                <p><strong>Hábitat:</strong> {animal.habitat || 'Desconocido'}</p>
                <p><strong>Dieta:</strong> {animal.diet || 'Desconocida'}</p>
                <p><strong>Peligroso:</strong> {animal.dangerous ? 'Sí' : 'No'}</p>
                <p><strong>Conservación:</strong> {animal.conservationStatus}</p>
                {animal.credits && <p className="text-xs text-gray-400">📸 Créditos: {animal.credits}</p>}
            </div>
        
            {/* Lugar para el planisferio */}
            <section className="my-8">
                <h2 className="text-xl font-bold mb-2">🌍 Ubicación geográfica</h2>
                <AnimalMap coordinates={[20, 5]} /> {/* África Central de ejemplo */}
            </section>
    
            {/* Curiosidades */}
            <section>
                <h2 className="text-xl font-semibold mb-2">🧠 Curiosidades</h2>
                <ul className="list-disc list-inside space-y-1">
                {curiosities.length > 0 ? (
                    curiosities.map(c => (
                    <li key={c._id}>{c.text}</li>
                    ))
                ) : (
                    <p>No hay curiosidades disponibles.</p>
                )}
                </ul>
            </section>
        </main>
    );

}