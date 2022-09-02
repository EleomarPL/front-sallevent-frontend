import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Auth from '../../contexts/Auth';

const MyRouter = () => {
  const { userData } = useContext(Auth);
  let isLogged = userData === null ? false : true;

  if (isLogged) {
    if (userData.type === 0)
      return <Navigate to="/admin" />;
    return <Outlet />;
  } else
    return <Navigate to="/login" />;

};

export default MyRouter;