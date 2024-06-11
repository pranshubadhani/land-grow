import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../assets/propertyData'

const PropertyDetails = () => {
  const { id } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const findProperty = (data, id) => {
    for (const state of data.states) {
      for (const city of state.cities) {
        for (const region of city.regions) {
          for (const property of region.properties) {
            if (property.id === parseInt(id)) {
              return property
            }
          }
        }
      }
    }
    return null
  }

  const property = findProperty(data, id)

  if (!property) {
    return <div className='bg-red-900 font-semibold text-white m-4 p-5 w-fit text-2xl font-sans'>Property not found</div>
  }

  const images = property.images || []
  const currentImage = images[currentImageIndex]

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className='bg-gray-100 min-h-screen p-8'>
      <div className='bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto'>
        <h1 className='text-4xl mb-4 text-gray-800'>{property.name}</h1>
        <div className='text-lg mb-2 text-gray-600'>Type: {property.type}</div>
        <div className='text-lg mb-2 text-gray-600'>Price: ${property.price}</div>
        <div className='text-lg mb-2 text-gray-600'>Address: {property.location?.address}</div>

        {images.length > 0 && (
          <div className='relative mt-6 border-2'>
            <div className='main-image mb-4'>
              <img src={currentImage.url} alt={currentImage.description} className='w-full h-80 object-contain rounded-md' />
              <p className='text-sm text-gray-600'>{currentImage.description}</p>
            </div>
            <button
              className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
              onClick={handlePrevClick}
            >
              &#8592;
            </button>
            <button
              className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full'
              onClick={handleNextClick}
            >
              &#8594;
            </button>
          </div>
        )}

        <div className='mt-6'>
          <h2 className='text-2xl mb-4 text-gray-800'>Description</h2>
          <p className='text-lg text-gray-600'>{property.description}</p>
        </div>

        {property.nearby_facilities && property.nearby_facilities.length > 0 && (
          <div className='mt-6'>
            <h2 className='text-2xl mb-4 text-gray-800'>Nearby Facilities</h2>
            <ul className='list-disc list-inside text-lg text-gray-600'>
              {property.nearby_facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        )}

        <div className='mt-6'>
          <h2 className='text-2xl mb-4 text-gray-800'>Owner Information</h2>
          <div className='text-lg text-gray-600'>Name: {property.owner.name}</div>
          <div className='text-lg text-gray-600'>Contact: {property.owner.contact}</div>
          {property.owner.phone && <div className='text-lg text-gray-600'>Phone: {property.owner.phone}</div>}
        </div>

        {property.location && (
          <div className='mt-6'>
            <h2 className='text-2xl mb-4 text-gray-800'>Location</h2>
            <iframe
              title="property-location"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDwPJF76KZVJ1qShES9F-Fa1x5FHZkV1y4&q=Eiffel+Tower,Paris+France`}>
            </iframe>
          </div>
        )}

        {property.floor_plan_url && (
          <div className='mt-6'>
            <h2 className='text-2xl mb-4 text-gray-800'>Floor Plan</h2>
            <a href={property.floor_plan_url} target="_blank" rel="noopener noreferrer" className='text-blue-600 underline'>View Floor Plan</a>
          </div>
        )}
      </div>
    </div>
  )
}

export default PropertyDetails