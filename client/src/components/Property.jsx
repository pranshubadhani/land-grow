import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
const PropertyCard = ({ k, p }) => {
  // const k = useParams()
  console.log(k);
  return (
    <div className="flex items-center justify-around bg-slate-400 border rounded-lg shadow-2xl overflow-hidden m-4 lg:w-100  transform transition-all hover:scale-105">
      <div className='shadow-lg p-5'>
        <img
          className='rounded-2xl w-48 object-cover'
          src={p.images && p.images.length > 0 ? p.images[0].url : ''}
          alt={p.images && p.images.length > 0 ? p.images[0].description : 'No Image Available'}
        />
      </div>
      <div className="p-6 w-2/3">
        <h3 className="text-xl font-bold mb-2"><Link to={`/property/${p.id}`}>{p.name}</Link></h3>
        <p className="text-gray-700 mb-2">{p.description}</p>
        <p className="text-gray-600"><strong>Owner:</strong> {p.owner.name}</p>
        <p className="text-gray-600"><strong>Contact:</strong> {p.owner.contact}</p>
        <p className="text-gray-600"><strong>Type:</strong> {p.type}</p>
        <p className="text-gray-600"><strong>Price:</strong> ₹{p.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
