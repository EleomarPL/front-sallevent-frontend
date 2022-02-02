import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../../contexts/Auth';

const MyRouter = ({children}) => {
  const { userData } = useContext(Auth);
  let isLogged = userData === null ? false : true;

  if (isLogged) {
    if (userData.type === 0)
      return <Navigate to="/admin" />;
    return children;
  } else
    return <Navigate to="/login" />;

};
MyRouter.propTypes = {
  children: PropTypes.node.isRequired
};

export default MyRouter;