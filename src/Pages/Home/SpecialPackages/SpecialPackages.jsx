import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PackageCard from './PackageCard';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import your package images
import img1 from '../../../assets/Popular/1.jpg';
import img2 from '../../../assets/Popular/2.jpg';
import img3 from '../../../assets/Popular/3.jpg';
import img4 from '../../../assets/Popular/4.jpg';
import img5 from '../../../assets/Popular/5.jpg';


const packages = [
  {
    image: img1,
    title: 'Romantic Paris Getaway',
    description: 'Experience the romance of Paris with our special package.',
    price: '$1999',
  },
  {
    image: img2,
    title: 'Adventure in the Alps',
    description: 'Explore the Alps with our thrilling adventure package.',
    price: '$2599',
  },
  {
    image: img3,
    title: 'Beach Paradise in Maldives',
    description: 'Relax on the pristine beaches of Maldives.',
    price: '$2999',
  },
  {
    image: img3,
    title: 'Beach Paradise in Maldives',
    description: 'Relax on the pristine beaches of Maldives.',
    price: '$2999',
  },
  {
    image: img3,
    title: 'Beach Paradise in Maldives',
    description: 'Relax on the pristine beaches of Maldives.',
    price: '$2999',
  },
];

const SpecialPackages = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Special Packages
      </Typography>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={false}
        useKeyboardArrows={true}
        autoPlay={false}
        centerMode={true}
        centerSlidePercentage={80}
        dynamicHeight
      >
        {packages.map((pkg, index) => (
          <div key={index}>
            <PackageCard
              image={pkg.image}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
            />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default SpecialPackages;