import React from 'react';
import bannerImage from '../assets/banner-image.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <div className="parallax-container">
        <img src={bannerImage} alt="Banner" className="parallax-image" />
        <div className="banner-text">
          <h1>Ideas</h1>
          <p>Where All Our Great Things Begin</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
