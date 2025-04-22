
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';


interface Props {
    coordinates?: [number, number]; //[lng, lat]
}

export default function AnimalMap({coordinates}: Props) {

    return (
        <div className="border rounded-md overflow-hidden">
            <ComposableMap  projection="geoEqualEarth" width={800} height={400}>
                <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: any[] }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} fill="#e5e5e5" stroke="#fff" />
                    ))
                }
                </Geographies>

                {coordinates && (
                    <Marker coordinates={coordinates}>
                    <circle r={5} fill="#F53" />
                    </Marker>
                )}
            </ComposableMap>
        </div>
    )
}