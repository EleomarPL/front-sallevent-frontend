import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateUpdateBookUser = ({children}) => {
  const {dataReservation} = useContext(ReservationUser);
  if (!dataReservation.dateYYMMDD)
    return <Redirect to="/my/my-reservations" />;
  else {
    if (dataReservation.isUpdateBook)
      return <>{ children }</>;
    else
      return <Redirect to="/my/reservation" />;
  }
};

ValidateUpdateBookUser.propTypes = {
  children: PropTypes.node.isRequired
};

export default ValidateUpdateBookUser;