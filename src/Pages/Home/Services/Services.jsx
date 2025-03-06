import React from 'react';
import ServiceCard from './ServiceCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const servicesData = [
  {
    icon: 'flight',
    title: 'Flight Booking',
    description: 'Book flights to any destination with ease and convenience.'
  },
  {
    icon: 'hotel',
    title: 'Hotel Reservations',
    description: 'Reserve the best hotels at competitive prices.'
  },
  {
    icon: 'car',
    title: 'Car Rentals',
    description: 'Rent cars at affordable rates from trusted providers.'
  },
  {
    icon: 'flight',
    title: 'International Travel',
    description: 'Get assistance with international travel arrangements.'
  },
  {
    icon: 'hotel',
    title: 'Holiday Packages',
    description: 'Enjoy curated holiday packages tailored to your needs.'
  }
];

const Services = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <SectionTitle 
      subHeading="Facilities"
      heading="Our Services"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
