import { Fragment, useContext } from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../../contexts/Auth';

import '../../styles/styleNavigationAnyUser.css';

const NavigationAnyUser = ({isAdmin, routesNav}) => {
  const {userData} = useContext(Auth);

  return (
    <nav
      id="lateral-navigation"
      className="navbar navbar-expand-lg navbar-dark bg-dark align-items-start"
      style={ {borderStartEndRadius: '10px'} }
    >
      <div className="w-100 text-center" style={ {display: 'block'} }>
        <span className="fw-bold" style={ {color: 'white', fontSize: '1.3rem'} }>
          { userData.name && `¡Hola ${userData.name}!` }
        </span>
        { !isAdmin &&
          <div className="fw-bold pt-3" style={ {color: 'white', fontSize: '1.1rem'} }>
            { 'Reservaciones' }
          </div>
        }
        <BorderBottom />
        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2"
          aria-controls="navbarSupportedContent2" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav m-auto mb-2 mb-md-0 d-flex flex-column w-100">
            { routesNav &&
              routesNav.map(data =>
                <Fragment key={ data.path }>
                  <li className="link-options">
                    <NavLink
                      className="nav-link-personalized"
                      activeClassName="active-link-personalized"
                      to={ isAdmin ? '/admin' + data.path : '/my' + data.path }
                      exact
                    >
                      { data.text }
                    </NavLink>
                  </li>
                  { data.borderBottom &&
                    <BorderBottom></BorderBottom>
                  }
                </Fragment>
              )
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavigationAnyUser.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  routesNav: PropTypes.array.isRequired
};

const BorderBottom = () => {
  return <div className="w-100 border-bottom border-white border-2 pt-2 mb-3"></div>;
};

export default NavigationAnyUser;