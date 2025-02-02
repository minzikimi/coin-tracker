import React from 'react';
import Carousel from './Carousel';
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className='banner-text-container'>
        <h1>Your Crypto, Your Control: Track, Analyze, Succeed</h1>
        <p>Navigate the Crypto Landscape with Precision and Confidence</p>
      </div>
      <Carousel />
    </div>
  )
}

export default Banner;