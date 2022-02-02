import { useContext } from 'react';
import {useNavigate} from 'react-router-dom';

import ReservationUser from '../../contexts/ReservationUser';

const ButtonGoToReservations = () => {
  const {setDataReservation} = useContext(ReservationUser);
  const navigate = useNavigate();

  const handleRedirection = () => {
    window.localStorage.removeItem('dataReservation');
    setDataReservation({ dateYYMMDD: '', isBooked: false });
    navigate('/my/my-reservations');
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