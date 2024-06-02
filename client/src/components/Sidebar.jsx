import React from 'react'
import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
const MIN = 0;
const MAX = 1000000;
const Sidebar = () => {


  const [values, setValues] = useState([MIN, MAX]);

  

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Property Listings</h1>
      <div className="flex flex-col items-center mb-8 w-full md:w-2/3 lg:w-1/2">
        <div className="mb-4 w-full">
          <label className="block mb-2">Price Range: ${values[0].toLocaleString()} - ${values[1].toLocaleString()}</label>
          <Range
            values={values}
            step={50000}
            min={MIN}
            max={MAX}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '6px',
                  width: '100%',
                  background: getTrackBackground({
                    values,
                    colors: ['#ccc', '#0bc5ea', '#ccc'],
                    min: MIN,
                    max: MAX
                  })
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
                  boxShadow: '0px 2px 6px #aaa'
                }}
              >
                <div
                  style={{
                    height: '16px',
                    width: '5px',
                    backgroundColor: '#fff'
                  }}
                />
              </div>
            )}
          />
        </div>
      </div>
      {/* <div className="flex flex-wrap justify-center">
        {filteredProperties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div> */}
    </div>
  );
};


export default Sidebar