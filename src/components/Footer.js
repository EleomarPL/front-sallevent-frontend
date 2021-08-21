import React, { useContext, useEffect, useState } from 'react';

import useRoom from '../hooks/useRoom';
import Auth from '../contexts/Auth';

const Footer = () => {
  const [infoFooter, setInfoFooter] = useState(null);
  const {getDataFooter} = useRoom();
  const {userData} = useContext(Auth);

  useEffect(() => {
    getDataFooter().then(response => {
      if (response)
        setInfoFooter(response);
    });
  }, []);
  if (userData !== null)
    return null;
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
          <span>{ infoFooter && `${infoFooter.street} ${infoFooter.municipality}` }</span>
          <span>{ infoFooter && infoFooter.state }</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>Contactenos:</span>
          <span>{ infoFooter && infoFooter.email }</span>
          <span>{ infoFooter && infoFooter.phone }</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;