import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useReservation from '../../hooks/useReservation';
import SpinnerButtonLoading from '../common/SpinnerButtonLoading';
import { notifyInfo } from '../../consts/notifications';
import ReservationUser from '../../contexts/ReservationUser';


const ButtonBookDay = ({date}) => {
  const navigate = useNavigate();
  const { setDataReservation } = useContext(ReservationUser);
  const {verifyOpenRoom} = useReservation();
  const [isLoading, setIsLoading] = useState(false);

  const handleBook = () => {
    let dateSplit = date.split('-');
    let year = dateSplit[0];
    let month = ('0' + dateSplit[1]).slice(-2);
    let day = ('0' + dateSplit[2]).slice(-2);

    let _date = `${year}-${month}-${day}`;
    setIsLoading(true);
    verifyOpenRoom({
      dateYYMMDD: _date
    }).then(response => {
      setIsLoading(false);
      if (response !== null) {
        if (response.isOpen === 'N') {
          notifyInfo('El administrador ha marcado este día como día sin operación, con el fin de otorgar el mejor servicio');
        } else if (response.isBooked === 'Y') {
          notifyInfo('Ya han reservado este día en lo que usted verificaba');
        } else {
          window.localStorage.setItem('dataReservation', JSON.stringify({ dateYYMMDD: _date }));
          setDataReservation({ dateYYMMDD: _date, isBooked: false });
          navigate('/my/book');
        }
      }
    });
  };

  return (
    <button
      type="button"
      className="btn btn-dark btn-sm"
      onClick={ handleBook }
      disabled={ isLoading }
    >
      { isLoading &&
        <SpinnerButtonLoading />
      }
      Reservar este dia
    </button>
  );
};

ButtonBookDay.propTypes = {
  date: PropTypes.string.isRequired
};

export default ButtonBookDay;