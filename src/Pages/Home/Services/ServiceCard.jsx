import React from 'react';
import { FaPlane, FaHotel, FaCarAlt } from 'react-icons/fa';

const icons = {
  flight: <FaPlane className="text-4xl text-blue-600" />,
  hotel: <FaHotel className="text-4xl text-blue-600" />,
  car: <FaCarAlt className="text-4xl text-blue-600" />
};

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;


  return (
    <div className="bg-gray-50 rounded-lg border-t-2 border-r-2 border-t-gray-100 border-r-white shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="p-4 bg-blue-100 rounded-full">
          {icons[icon]}
        </div>
        <h3 className="ml-4 text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
