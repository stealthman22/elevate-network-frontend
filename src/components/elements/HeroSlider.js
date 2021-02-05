import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AwesomeSliderStyles from './styles/hero.module.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const morningArray = [
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308021/new-portfolio/hero/sunset-view-of-mountains-733100.jpg',
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308022/new-portfolio/hero/purple-petal-flower-surrounded-by-green-plants-during-66288.jpg',
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',
];

const HeroSlider = () => (
  <div className="hero-ctn">
    <AutoplaySlider
      play
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      cssModule={AwesomeSliderStyles}
    >
      <div data-src={morningArray[0]} className="slide-img">
        <h1 className="slide-content">SLIDE 1</h1>
      </div>
      <div data-src={morningArray[1]} className="slide-img">
        {' '}
        <h1>SLIDE 1</h1>
        {' '}
      </div>
      <div data-src={morningArray[2]} className="slide-img">
      SLIDE 3
      </div>
    </AutoplaySlider>
  </div>
);

export default HeroSlider;
