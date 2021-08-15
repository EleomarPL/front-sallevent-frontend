import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Auth from '../contexts/Auth';
import useLogin from '../hooks/useLogin';

const Header = () => {
  const {logout} = useLogin();

  const {userData} = useContext(Auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
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
          SallEvent
        </NavLink>
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { userData === null ?
            <>

              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/"
                    exact
                  >
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/services"
                  >
                    Servicios
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/contact"
                  >
                    Contacto
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/register"
                  >
                    Registrarse
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/login"
                  >
                    Acceder
                  </NavLink>
                </li>
              </ul>
            </>
            :
            <ul className="navbar-nav mb-2 mb-lg-0" style={ {marginLeft: 'auto'} }>
              <li>
                <button
                  className="nav-link border-0"
                  style={ {background: 'transparent', color: '#ffffffd9'} }
                  type="button"
                  onClick={ logout }
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          }
          
        </div>
      </div>
    </nav>
  );
};

export default Header;