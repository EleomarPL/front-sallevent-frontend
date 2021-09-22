import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import ReservationUser from '../../contexts/ReservationUser';

const ValidateReservationUser = ({children}) => {
  const {dataReservation} = useContext(ReservationUser);
  if (!dataReservation.dateYYMMDD)
    return <Redirect to="/my/calendar" />;
  else {
    if (dataReservation.isBooked)
      return <>{ children }</>;
    else if (dataReservation.isUpdateBook)
      return <Redirect to="/my/update-book" />;
    else if (!dataReservation.isBooked)
      return <Redirect to="/my/book" />;
  }
};

ValidateReservationUser.propTypes = {
  children: PropTypes.node.isRequired
};

export default ValidateReservationUser;