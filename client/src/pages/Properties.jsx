import React, { useState } from 'react';
import { data } from '../assets/propertyData';
import PropertyCard from '../components/Property';
import Sidebar from '../components/Sidebar';
import { Range, getTrackBackground } from 'react-range';

// const Properties = () => {
//     const [selectedState, setSelectedState] = useState('');
//     const [selectedCity, setSelectedCity] = useState('');
//     const [selectedRegion, setSelectedRegion] = useState('');

//     const availableCities = data.states.find((state) => state.name === selectedState);
//     const availableRegions = availableCities?.cities.find((city) => city.name === selectedCity);
//     const pro = (availableRegions?.regions.find((val) => val?.name === selectedRegion));
//     console.log(pro);
//     return (
//         <div id="container" className="p-4">
//             <div className='flex justify-evenly'>
//                 <div className="mb-4">
//                     <label className="block mb-2">States</label>
//                     <select
//                         className="border p-2 w-full"
//                         value={selectedState}
//                         onChange={(e) => {
//                             setSelectedState(e.target.value);
//                             setSelectedCity('');
//                             setSelectedRegion('');
//                         }}
//                     >
//                         <option>--Choose State--</option>
//                         {data.states.map((state, index) => (
//                             <option value={state.name} key={index}>
//                                 {state.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="block mb-2">Cities</label>
//                     <select
//                         className="border p-2 w-full"
//                         value={selectedCity}
//                         onChange={(e) => {
//                             setSelectedCity(e.target.value);
//                             setSelectedRegion('');
//                         }}
//                     >
//                         <option>--Choose City--</option>
//                         {availableCities?.cities.map((city, index) => (
//                             <option value={city.name} key={index}>
//                                 {city.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div className="mb-4">
//                     <label className="block mb-2">Regions</label>
//                     <select
//                         className="border p-2 w-full"
//                         value={selectedRegion}
//                         onChange={(e) => setSelectedRegion(e.target.value)}
//                     >
//                         <option>--Choose Region--</option>1
//                         {availableRegions?.regions.map((region, index) => (
//                             <option value={region.name} key={index}>
//                                 {region.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             <div className="flex mt-14 m-4 gap-32 lg: ml-16">
//                 <div className='w-1/4 shadow-slate-500 shadow-md border-black border-1.5'>
//                      <Sidebar />
//                 </div>

//                 <div className='min-h-screen flex flex-col justify-around items-center shadow-slate-500 shadow-md w-3/4'>
//                     <div className=''>
                    
//                         {selectedRegion ? (
//                             <div className="">                    
//                                 <h2 className="text-2xl font-bold mb-4">Properties in {selectedRegion}</h2>
//                             </div>
//                             ) :
//                             (
//                                 <p className="text-lg text-gray-600">Please select a city and region to view properties.</p>
//                             )
//                         }
//                     </div>
//                     <div className=''>
//                         {pro?.properties.map((property) => (                        
//                             <PropertyCard p={property} />
//                         ))}
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };


const MIN = 0;
const MAX = 1000000;
const Pro = () => {


  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [priceRange, setPriceRange] = useState([MIN, MAX]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
    setSelectedRegion('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedRegion('');
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const getStates = () => data.states.map((state) => state.name);

  const getCities = () => {
    if (!selectedState) return [];
    return data.states.find((state) => state.name === selectedState).cities.map((city) => city.name);
  };

  const getRegions = () => {
    if (!selectedCity) return [];
    const cities = data.states.find((state) => state.name === selectedState).cities;
    return cities.find((city) => city.name === selectedCity).regions.map((region) => region.name);
  };

  const getProperties = () => {
    let properties = [];
    if (selectedRegion) {
      const regions = data.states.find((state) => state.name === selectedState).cities.find((city) => city.name === selectedCity).regions;
      properties = regions.find((region) => region.name === selectedRegion).properties;
    } else if (selectedCity) {
      const cities = data.states.find((state) => state.name === selectedState).cities;
      properties = cities.find((city) => city.name === selectedCity).regions.flatMap((region) => region.properties);
    } else if (selectedState) {
      properties = data.states.find((state) => state.name === selectedState).cities.flatMap((city) => city.regions.flatMap((region) => region.properties));
    } else {
      properties = data.states.flatMap((state) => state.cities.flatMap((city) => city.regions.flatMap((region) => region.properties)));
    }
    return properties.filter((property) => property.price >= priceRange[0] && property.price <= priceRange[1]);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Property Listings</h1>
      <div className="flex flex-col items-center mb-8 w-full md:w-2/3 lg:w-1/2">
        <div className="mb-4 w-full">
          <label htmlFor="state" className="block mb-2">State:</label>
          <select id="state" value={selectedState} onChange={handleStateChange} className="w-full border p-2 rounded">
            <option value="">--Select a state--</option>
            {getStates().map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        {selectedState && (
          <div className="mb-4 w-full">
            <label htmlFor="city" className="block mb-2">City:</label>
            <select id="city" value={selectedCity} onChange={handleCityChange} className="w-full border p-2 rounded">
              <option value="">--Select a city--</option>
              {getCities().map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        )}
        {selectedCity && (
          <div className="mb-4 w-full">
            <label htmlFor="region" className="block mb-2">Region:</label>
            <select id="region" value={selectedRegion} onChange={handleRegionChange} className="w-full border p-2 rounded">
              <option value="">--Select a region-- </option>
              {getRegions().map((region) => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        )}
        <div className="mb-4 w-full">
          <label className="block mb-2">Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}</label>
          <Range
            values={priceRange}
            step={500}
            min={MIN}
            max={MAX}
            onChange={(values) => setPriceRange(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '6px',
                  width: '100%',
                  background: getTrackBackground({
                    values: priceRange,
                    colors: ['#ccc', '#0bc5ea', '#ccc'],
                    min: MIN,
                    max: MAX,
                  }),
                }}
                className="rounded-md"
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '24px',
                  width: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#0bc5ea',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0px 2px 6px #aaa',
                }}
              >
                <div
                  style={{
                    height: '16px',
                    width: '5px',
                    backgroundColor: '#fff',
                  }}
                />
              </div>
            )}
          />
        </div>
      </div>

             <div className="flex mt-14 m-4 gap-32 lg: ml-16">
                 <div className='w-1/4 shadow-slate-500 shadow-md border-black border-1.5'>
                      <Sidebar />
                 </div>

                 <div className='min-h-screen flex flex-col justify-around items-center shadow-slate-500 shadow-md w-3/4'>
                     <div className=''>
                    
                         {selectedState ? (
                             <div className="">                    
                                 <h2 className="text-2xl font-bold mb-4">Properties in {selectedState}</h2>
                             </div>
                             ) :
                             (
                                 <p className="text-lg text-gray-600">Please select a city and region to view properties.</p>
                             )
                         }
                     </div>
                     <div className="flex-col justify-center">
                        {getProperties().map((property, index) => (
                            <div>                          
                                <PropertyCard k={index+1} p={property} />
                            </div>
                        ))}
                    </div>
                 </div>
             </div>





      
    </div>
  );
};

export default Pro;

