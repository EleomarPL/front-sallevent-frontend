
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Reservation = React.createContext({});

export const ReservationProvider = ({ children }) => {
  const [dataReservation, setDataReservation] = useState(JSON.parse(window.localStorage.getItem('dataReservation')) || null);
  return (
    <Reservation.Provider value={ { dataReservation, setDataReservation } }>
      { children }
    </Reservation.Provider>
  );
};

ReservationProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default Reservation;
