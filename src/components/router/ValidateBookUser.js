import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateBookUser = () => {
  const { dataReservation } = useContext(ReservationUser);
  if (!dataReservation.dateYYMMDD)
    return <Navigate to="/my/calendar" />;
  else {
    if (dataReservation.isBooked)
      return <Navigate to="/my/reservation" />;
    else if (dataReservation.isUpdateBook)
      return <Navigate to="/my/update-book" />;
    else
      return <Outlet />;
  }
};

export default ValidateBookUser;