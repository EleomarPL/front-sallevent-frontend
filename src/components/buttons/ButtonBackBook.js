import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';

const ButtonBackBook = () => {
  const history = useHistory();
  const {setDataReservation} = useContext(ReservationUser);

  const handleBackBook = () => {
    window.localStorage.removeItem('dataReservation');
    setDataReservation({
      dateYYMMDD: '',
      isBooked: false
    });
    history.push('/my/calendar');
  };
  return (
    <button
      type="button"
      className="btn btn-dark btn-sm"
      onClick={ handleBackBook }
    >
      Regresar
    </button>
  );
};

export default ButtonBackBook;