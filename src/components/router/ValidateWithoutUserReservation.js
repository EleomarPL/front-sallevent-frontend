import {useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateWithoutUserReservation = () => {
  const { dataReservation } = useContext(ReservationUser);
  if (dataReservation.dateYYMMDD) {
    if (dataReservation.isBooked)
      return <Navigate to="/my/reservation" />;
    else if (dataReservation.isUpdateBook)
      return <Navigate to="/my/update-book" />;
    else if (!dataReservation.isBooked)
      return <Navigate to="/my/book" />;
  } else
    return <Outlet />;
};

export default ValidateWithoutUserReservation;