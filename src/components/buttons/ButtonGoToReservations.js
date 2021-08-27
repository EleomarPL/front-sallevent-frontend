import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';

const ButtonGoToReservations = () => {
  const {setDataReservation} = useContext(ReservationUser);
  const history = useHistory();

  const handleRedirection = () => {
    window.localStorage.removeItem('dataReservation');
    setDataReservation({ dateYYMMDD: '', isBooked: false });
    history.push('/my/my-reservations');
  };

  return (
    <button
      type="button"
      className="btn btn-dark btn-sm"
      onClick={ handleRedirection }
    >
      Ver la lista
    </button>
  );
};

export default ButtonGoToReservations;