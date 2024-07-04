import React from 'react';
import './LandingPage.css';
import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h2>Welcome to Our Online Study Platform</h2>
      <div className="image-gallery">
        <img src={image1} alt="Study Image 1" />
        <img src={image2} alt="Study Image 2" />
        <img src={image3} alt="Study Image 3" />
        <img src={image4} alt="Study Image 4" />
      </div>
    </div>
  );
}

export default LandingPage;
