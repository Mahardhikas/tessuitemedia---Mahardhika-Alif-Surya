import React, {useState, useEffect} from 'react';
import bannerImage from '../assets/banner-image.jpg';

const Banner = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolling(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`banner ${isScrolling ? 'is-scrolling' : ''}`}>
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
