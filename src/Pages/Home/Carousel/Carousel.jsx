import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'; // Import the custom CSS

import img1 from '../../../assets/beach.jpg';
import img2 from '../../../assets/beachtree.jpg';
import img3 from '../../../assets/airview.jpg';
import img4 from '../../../assets/airplane.jpg';

const CarouselSlider = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={true}
            showArrows={true}
            showStatus={false}
            stopOnHover={true}
            transitionTime={1500}
            interval={8000}
        >
            <div>
                <img src={img1} alt="Beach" />
            </div>
            <div>
                <img src={img2} alt="Beach Tree" />
            </div>
            <div>
                <img src={img3} alt="Air View" />
            </div>
            <div>
                <img src={img4} alt="Airplane" />
            </div>
        </Carousel>
    );
};

export default CarouselSlider;
