import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Auth from '../../contexts/Auth';

const PublicRoute = () => {
  const { userData } = useContext(Auth);
  let isLogged = userData === null ? false : true;

  if (isLogged) {
    if (userData.type === 0)
      return <Navigate to="/admin" />;
    else if (userData.type === 1)
      return <Navigate to="/my" />;
  } else {
    return <Outlet />;
  }

};

export default PublicRoute;