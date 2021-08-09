import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

import Auth from '../../contexts/Auth';

const MyRouter = ({children}, props) => {
  const {userData} = useContext(Auth);
  let isLogged = userData === null ? false : true;

  if (isLogged) {
    if (userData.type === 0)
      return <Redirect to="/admin" />;
    return <Route { ...props }>{ children }</Route>;
  } else {
    return <Redirect to="/login" />;
  }

};
MyRouter.propTypes = {
  children: PropTypes.node.isRequired
};

export default MyRouter;