import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateUpdateBookUser = () => {
  const { dataReservation } = useContext(ReservationUser);
  if (!dataReservation.dateYYMMDD)
    return <Navigate to="/my/my-reservations" />;
  else {
    if (dataReservation.isUpdateBook)
      return <Outlet />;
    else if (dataReservation.isBooked)
      return <Navigate to="/my/reservation" />;
    else if (!dataReservation.isBooked)
      return <Navigate to="/my/book" />;
  }
};

export default ValidateUpdateBookUser;