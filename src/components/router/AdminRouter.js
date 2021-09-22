import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../../contexts/Auth';

const AdminRouter = ({children}, props) => {
  const {userData} = useContext(Auth);
  let isLogged = userData === null ? false : true;

  if (isLogged) {
    if (userData.type === 1)
      return <Redirect to="/my" />;
    else if (userData.type === 0)
      return <Route { ...props }>{ children }</Route>;
  } else {
    return <Redirect to="/login" />;
  }

};
AdminRouter.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdminRouter;