import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import ProptTypes from 'prop-types';

import ReservationUser from '../../contexts/ReservationUser';

const ButtonBackBook = ({text, to}) => {
  const history = useHistory();
  const {setDataReservation} = useContext(ReservationUser);

  const handleBackBook = () => {
    window.localStorage.removeItem('dataReservation');
    setDataReservation({
      dateYYMMDD: '',
      isBooked: false
    });
    history.push(to);
  };
  return (
    <button
      type="button"
      className="btn btn-dark btn-sm"
      onClick={ handleBackBook }
    >
      { text }
    </button>
  );
};

ButtonBackBook.propTypes = {
  text: ProptTypes.string.isRequired,
  to: ProptTypes.string.isRequired
};

export default ButtonBackBook;