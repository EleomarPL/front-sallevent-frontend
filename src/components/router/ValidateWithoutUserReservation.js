import {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateWithoutUserReservation = ({children}) => {
  const { dataReservation } = useContext(ReservationUser);
  if (dataReservation.dateYYMMDD) {
    if (dataReservation.isBooked)
      return <Navigate to="/my/reservation" />;
    else if (dataReservation.isUpdateBook)
      return <Navigate to="/my/update-book" />;
    else if (!dataReservation.isBooked)
      return <Navigate to="/my/book" />;
  } else
    return children;
};
ValidateWithoutUserReservation.propTypes = {
  children: PropTypes.node.isRequired
};

export default ValidateWithoutUserReservation;