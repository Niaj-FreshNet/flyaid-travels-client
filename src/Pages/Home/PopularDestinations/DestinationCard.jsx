import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const DestinationCard = ({ destination }) => {
  const { image, name, description, location } = destination;

  return (
    <div className="relative bg-gray-50 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-md hover:rounded-lg" />
      <div className="p-4 rounded-b-md">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex items-center mt-4 text-gray-500">
          <FaMapMarkerAlt className="mr-2" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
