import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateReservationUser = () => {
  const { dataReservation } = useContext(ReservationUser);
  if (!dataReservation.dateYYMMDD)
    return <Navigate to="/my/calendar" />;
  else {
    if (dataReservation.isBooked)
      return <Outlet />;
    else if (dataReservation.isUpdateBook)
      return <Navigate to="/my/update-book" />;
    else if (!dataReservation.isBooked)
      return <Navigate to="/my/book" />;
  }
};

export default ValidateReservationUser;