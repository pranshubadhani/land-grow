import React, { useState } from 'react';
import { data } from '../assets/propertyData';

const Properties = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const availableCities = data.states.find((state) => state.name === selectedState);
    const availableRegions = availableCities?.cities.find((city) => city.name === selectedCity);

    return (
        <div id="container" className="p-4">
            <div className='flex justify-evenly'>
                <div className="mb-4">
                    <label className="block mb-2">States</label>
                    <select
                        className="border p-2 w-full"
                        value={selectedState}
                        onChange={(e) => {
                            setSelectedState(e.target.value);
                            setSelectedCity('');
                            setSelectedRegion('');
                        }}
                    >
                        <option>--Choose State--</option>
                        {data.states.map((state, index) => (
                            <option value={state.name} key={index}>
                                {state.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Cities</label>
                    <select
                        className="border p-2 w-full"
                        value={selectedCity}
                        onChange={(e) => {
                            setSelectedCity(e.target.value);
                            setSelectedRegion('');
                        }}
                    >
                        <option>--Choose City--</option>
                        {availableCities?.cities.map((city, index) => (
                            <option value={city.name} key={index}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Regions</label>
                    <select
                        className="border p-2 w-full"
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                    >
                        <option>--Choose Region--</option>
                        {availableRegions?.regions.map((region, index) => (
                            <option value={region} key={index}>
                                {region}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {selectedRegion ? (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Properties in {selectedRegion}</h2>
                    <ul className="list-disc list-inside">
                        {/* Sample data for properties, replace with actual property data */}
                        <li>Property 1 in {selectedRegion}</li>
                        <li>Property 2 in {selectedRegion}</li>
                        <li>Property 3 in {selectedRegion}</li>
                    </ul>
                </div>
            ) :
                (
                    <p className="text-lg text-gray-600">Please select a city and region to view properties.</p>
                )}
        </div>
    );
};

export default Properties;
