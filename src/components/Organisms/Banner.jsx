import React from "react";
import { Link } from 'react-router-dom';

const Banner = ({ color, image, title, subtitle, home, poster, courseBanner }) => (
  <div className={`main-banner img-container l-block ${color}`}>
    <div className="ed grid">
      <img src={image.src} alt={image.alt} className="main-banner__img" />
      {
        home ? 
        <div className="ed-grid m-grid-2">
          <div className="main-banner__data s-center">
            <h1 className="main-banner__title">{title}</h1>
            <p>{subtitle}</p>
            <Link to='/course' className='button accent-color'>Ver cursos</Link>
          </div>
          <div className="img-container s-ratio-16-9">
            <img src={ poster } alt="Regalos"/>
          </div>
        </div>
       : 
        courseBanner ?
        <div className="ed-grid m-grid-2">
          <div className="main-banner__data s-center">
            <h1 className="main-banner__title">{title}</h1>
            <p>{subtitle}</p>
            <Link to='/course' className='button accent-color'>Ver cursos</Link>
          </div>
          <div className="img-container s-ratio-16-9">
            <img src={ poster } alt="Regalos"/>
          </div>
        </div>
        :
        <div className="main-banner__data s-center">
          <h1 className="main-banner__title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      }
    </div>
  </div>
);

export default Banner;
