import Link from "next/link";

interface Props {
    id: string;
    name: string;
    scientificName: string;
    habitat?: string;
    diet?: string;
    dangerous?: boolean;
    conservationStatus?: string;
    image?: string;
}

export default function AnimalCard({
    id,
    name,
    scientificName,
    habitat,
    diet,
    dangerous,
    conservationStatus,
    image
}: Props) {
    return (
        <Link href={`/animals/${id}`}>
            <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
                {image ? (
                    <img 
                    src={image}
                    alt={name}
                    className="w-full h-40 object-cover rounded-md mb-3"
                    />
                ):(
                    <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center mb-3 text-gray-500">
                        Sin imagen
                    </div>
                )}
                <h2 className="text-lg font-bold">{name}</h2>
                {scientificName && <p className="italic text-sm text-gray-600">{scientificName}</p>}
                <p><strong>Hábitat:</strong> {habitat || 'Desconocido'}</p>
                <p><strong>Dieta:</strong> {diet || 'Desconocida'}</p>
                <p><strong>Peligroso:</strong> {dangerous ? 'Sí' : 'No'}</p>
                <p><strong>Estado:</strong> {conservationStatus}</p>
            </div>
        </Link>
    )    
}