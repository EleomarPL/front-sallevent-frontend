import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Auth from '../../contexts/Auth';

const AdminRouter = () => {
  const { userData } = useContext(Auth);
  let isLogged = userData === null ? false : true;

  if (isLogged) {
    if (userData.type === 1)
      return <Navigate to="/my" />;
    else if (userData.type === 0)
      return <Outlet />;
  } else
    return <Navigate to="/login" />;

};

export default AdminRouter;