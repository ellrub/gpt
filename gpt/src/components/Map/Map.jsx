import React, { useState } from 'react';
import WorldMap, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

import "./Map.scss";
import leaderData from "../../data/features.json"

function Map() {
    const [lng, setLng] = useState(54.37585762735543);
    const [lat, setLat] = useState(24.45677614934833);

    return (
        <div>
            <WorldMap
                mapboxAccessToken='pk.eyJ1IjoicnViYmFkZXYiLCJhIjoiY2xiM2xkNXFxMDFlbjN2cGRxMW11dHQ0aSJ9.4RJbOwmSiqVqHwo1wttdCw'
                style={{
                    width: "100vw",
                    height: "50vw",
                }}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {leaderData.features.map((country) => (
                    <Marker 
                        key={country.id} 
                        latitude={country.geometry.coordinates[1]}
                        longitude={country.geometry.coordinates[0]}                        
                        >
                        <div>TESTING</div>
                    </Marker>
                ))}
            </WorldMap>
        </div>
    )
}

export default Map;
