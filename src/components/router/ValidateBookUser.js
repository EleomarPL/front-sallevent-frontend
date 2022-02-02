import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateBookUser = ({children}) => {
  const { dataReservation } = useContext(ReservationUser);
  if (!dataReservation.dateYYMMDD)
    return <Navigate to="/my/calendar" />;
  else {
    if (dataReservation.isBooked)
      return <Navigate to="/my/reservation" />;
    else if (dataReservation.isUpdateBook)
      return <Navigate to="/my/update-book" />;
    else
      return children;
  }
};

ValidateBookUser.propTypes = {
  children: PropTypes.node.isRequired
};

export default ValidateBookUser;