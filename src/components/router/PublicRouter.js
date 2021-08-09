import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

import Auth from '../../contexts/Auth';

const PublicRoute = ({children}, props) => {
  const {userData} = useContext(Auth);
  let isLogged = userData === null ? false : true;

  if (isLogged) {
    if (userData.type === 0)
      return <Redirect to="/admin" />;
    else if (userData.type === 1)
      return <Redirect to="/my" />;
  } else {
    return <Route { ...props }>{ children }</Route>;
  }

};
PublicRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PublicRoute;