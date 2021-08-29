import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateWithoutUserReservation = ({children}) => {
  const {dataReservation} = useContext(ReservationUser);
  if (dataReservation.dateYYMMDD) {
    if (dataReservation.isBooked)
      return <Redirect to="/my/reservation" />;
    else if (dataReservation.isUpdateBook)
      return <Redirect to="/my/update-book" />;
    else if (!dataReservation.isBooked)
      return <Redirect to="/my/book" />;
  } else
    return <>{ children }</>;
};
ValidateWithoutUserReservation.propTypes = {
  children: PropTypes.node.isRequired
};

export default ValidateWithoutUserReservation;