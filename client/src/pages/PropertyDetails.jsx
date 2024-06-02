import React from 'react'
import { useParams } from 'react-router-dom'

const PropertyDetails = () => {
    const {id} = useParams()
  return (
    <div className='bg-blue-900 font-semibold text-white m-4 p-5 w-fit text-2xl font-sans'>Property: {id}</div>
  )
}

export default PropertyDetails

