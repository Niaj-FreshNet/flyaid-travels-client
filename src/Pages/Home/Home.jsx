import React from 'react';
import SearchPage from '../../Components/FlightApi/SearchPage/SearchPage';
import PopularDestinations from './PopularDestinations/PopularDestinations';
import Services from './Services/Services';
import HotDeals from './HotDeals/HotDeals';
import CarouselSlider from './Carousel/Carousel';

const Home = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mt-16">
            <div className="relative">
                <CarouselSlider />
                <div className="absolute inset-0 flex mx-auto justify-center items-center transform translate-x-0 translate-y-0 md:-translate-y-16">
                    <div className="w-full sm:w-3/4 lg:w-1/2 px-4">
                        <SearchPage />
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <HotDeals />
            </div>
            <div className="mt-4">
                <PopularDestinations />
            </div>
            <div className="mt-4">
                <Services />
            </div>
        </div>
    );
};

export default Home;
