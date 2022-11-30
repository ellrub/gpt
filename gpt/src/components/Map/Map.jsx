import React, { useState } from 'react';
import WorldMap, { Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from "react-icons/fa";

import "./Map.scss";
import leaderData from "../../data/features.json"

function Map() {
    const [lng, setLng] = useState(7);
    const [lat, setLat] = useState(25);

    return (
        <div>
            <WorldMap
                mapboxAccessToken='pk.eyJ1IjoicnViYmFkZXYiLCJhIjoiY2xiM2xkNXFxMDFlbjN2cGRxMW11dHQ0aSJ9.4RJbOwmSiqVqHwo1wttdCw'
                mapStyle="mapbox://styles/rubbadev/clb3je7m6000b14n9tw6a4dvn"
                style={{
                    width: "100vw",
                    height: "50vw",
                }}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                }}
            >
                {leaderData.features.map((country) => (
                    <Marker 
                        key={country.id} 
                        latitude={country.geometry.coordinates[1]}
                        longitude={country.geometry.coordinates[0]}                        
                        >
                        <FaMapMarkerAlt />
                    </Marker>
                ))}
            </WorldMap>
        </div>
    )
}

export default Map;
