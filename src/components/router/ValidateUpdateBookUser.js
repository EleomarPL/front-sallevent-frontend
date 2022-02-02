import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateUpdateBookUser = ({children}) => {
  const {dataReservation} = useContext(ReservationUser);
  if (!dataReservation.dateYYMMDD)
    return <Navigate to="/my/my-reservations" />;
  else {
    if (dataReservation.isUpdateBook)
      return children;
    else if (dataReservation.isBooked)
      return <Navigate to="/my/reservation" />;
    else if (!dataReservation.isBooked)
      return <Navigate to="/my/book" />;
  }
};

ValidateUpdateBookUser.propTypes = {
  children: PropTypes.node.isRequired
};

export default ValidateUpdateBookUser;