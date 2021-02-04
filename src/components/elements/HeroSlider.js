import React from 'react';
import {
  CarouselProvider, Slider, Slide,
  ButtonBack, ButtonNext, Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import loby from '../../assets/pexels-miguel-á-padriñán-255379.jpg';

const HeroSlider = () => (
  <CarouselProvider
    naturalSlideHeight={100}
    naturalSlideWidth={100}
    totalSlides={3}
  >
    <Slider>
      <Slide index={0}>
        {' '}
        <Image src="https://res.cloudinary.com/
        stealthman22/image/upload/v1586798769/new-portfolio/hero/scenic-photo-of-lake-surrounded-by-trees-1903702-m.jpg"
        />

      </Slide>
      <Slide index={1}>
        <div className="text-center">Slide2</div>
        {' '}
      </Slide>
      <Slide index={2}><div className="text-center">Slide3</div></Slide>
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);

export default HeroSlider;
