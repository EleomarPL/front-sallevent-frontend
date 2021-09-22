import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const Reservation = createContext({});

export const ReservationProvider = ({ children }) => {
  let getDataFromLocalStorage = JSON.parse(window.localStorage.getItem('dataReservation'));
  let initialityData = {
    dateYYMMDD: '',
    isBooked: false
  };
  const [dataReservation, setDataReservation] = useState(getDataFromLocalStorage || initialityData);
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
