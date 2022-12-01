import React, { useState } from 'react';
import WorldMap, { Marker, Popup } from "react-map-gl";

import { FaMapMarkerAlt } from "react-icons/fa";

import "./Map.scss";
import markerData from "../../data/markerData.json"

function Map() {
    const [lng, setLng] = useState(10);
    const [lat, setLat] = useState(20);

    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <div className='worldmap'>
            <WorldMap
                mapboxAccessToken='pk.eyJ1IjoicnViYmFkZXYiLCJhIjoiY2xiM2xkNXFxMDFlbjN2cGRxMW11dHQ0aSJ9.4RJbOwmSiqVqHwo1wttdCw'
                mapStyle="mapbox://styles/rubbadev/clb3je7m6000b14n9tw6a4dvn"
                style={{
                    width: "100vw",
                    
                    height: "50vw",
                    maxHeight: "450px",
                    zoom: 1
                }}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                }}
            >
                { markerData.features.map((country) => (
                    <Marker 
                        key={country.id} 
                        latitude={country.geometry.coordinates[1]}
                        longitude={country.geometry.coordinates[0]}                        
                        >
                        <FaMapMarkerAlt
                            className='map__marker'
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedCountry(country)
                            }}
                        />
                    </Marker>
                ))}
                { selectedCountry ? (
                    <Popup 
                        latitude={selectedCountry.geometry.coordinates[1]}
                        longitude={selectedCountry.geometry.coordinates[0]}
                    >
                        <div>
                            <p>{selectedCountry.location}</p>
                        </div>
                    </Popup>
                ) : null }
            </WorldMap>
        </div>
    )
}

export default Map;
