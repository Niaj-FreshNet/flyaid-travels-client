import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import DestinationCard from './DestinationCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const destinationsData = [
  {
    image: 'https://i.ibb.co.com/NSpS5Jm/nikolett-emmert-SBz-CTSMpy-GQ-unsplash.jpg',
    name: 'Paris',
    description: 'The city of lights.',
    location: 'France'
  },
  {
    image: 'https://i.ibb.co.com/VgYnY96/norbert-braun-Pe-Zmop-P4k-Y4-unsplash.jpg',
    name: 'New York',
    description: 'The city that never sleeps.',
    location: 'USA'
  },
  {
    image: 'https://i.ibb.co.com/HtQvfv3/kelvin-zyteng-Ncmd8u-Le8-H0-unsplash.jpg',
    name: 'Tokyo',
    description: 'The heart of Japan.',
    location: 'Japan'
  },
  {
    image: 'https://i.ibb.co.com/K2swD0j/nikolett-emmert-JYAHO2-J-jg-unsplash.jpg',
    name: 'Tokyo',
    description: 'The heart of Japan.',
    location: 'Japan'
  },
  {
    image: 'https://i.ibb.co.com/mcBRzGz/world-wanderer-ZGX0y-OB5-So-U-unsplash.jpg',
    name: 'Tokyo',
    description: 'The heart of Japan.',
    location: 'Japan'
  },
];

const PopularDestinations = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <div>
        <SectionTitle
          subHeading="Places you may like"
          heading="Popular Destinations"
        />
      </div>
      <Swiper
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2.5, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 40 },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {destinationsData.map((destination, index) => (
          <SwiperSlide key={index}>
            <DestinationCard destination={destination} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularDestinations;
