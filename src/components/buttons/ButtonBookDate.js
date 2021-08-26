import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';


const ButtonBookDay = ({date}) => {
  const history = useHistory();
  const {setDataReservation} = useContext(ReservationUser);

  const handleBook = () => {
    window.localStorage.setItem('dataReservation', JSON.stringify({ dateYYMMDD: date }));
    setDataReservation({ dateYYMMDD: date, isBooked: false });
    history.push('/my/book');
  };

  return (
    <button
      type="button"
      className="btn btn-dark btn-sm"
      onClick={ handleBook }
    >
      Reservar este dia
    </button>
  );
};

ButtonBookDay.propTypes = {
  date: PropTypes.string.isRequired
};

export default ButtonBookDay;