import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [infoFooter, setInfoFooter] = useState(null);

  useEffect(() => {

  }, []);

  return (
    <footer className="container-fluid bg-dark text-white py-2">
      <div className="d-flex flex-wrap justify-content-around align-items-center">
        <div>
          <picture>
            <source
              srcSet={ require('../img/home/logo.webp').default }
              className="fas fa-link"
              height="50px"
              style={ {paddingRight: '1rem'} }
            />
            <img
              className="fas fa-link"
              height="50px"
              style={ {paddingRight: '1rem'} }
              src={ require('../img/home/logo.png').default }
              alt="Logo "
            />
          </picture>
          <span>SallEvent</span>
        </div>
        <div className="d-flex flex-column align-items-center pb-2">
          <span>Dirección:</span>
          <span>Santo Domingo de Morelos</span>
          <span>Oaxaca</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>Contactenos:</span>
          <span>eleomarpedrolorenzo@gmail.com</span>
          <span>9581306284</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;