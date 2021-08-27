import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';


const ButtonBookDay = ({date}) => {
  const history = useHistory();
  const {setDataReservation} = useContext(ReservationUser);

  const handleBook = () => {
    let dateSplit = date.split('-');
    let year = dateSplit[0];
    let month = ('0' + dateSplit[1]).slice(-2);
    let day = ('0' + dateSplit[2]).slice(-2);

    let _date = `${year}-${month}-${day}`;
    window.localStorage.setItem('dataReservation', JSON.stringify({ dateYYMMDD: _date }));
    setDataReservation({ dateYYMMDD: _date, isBooked: false });
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