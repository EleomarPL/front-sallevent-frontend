import {
  getDateReservationWithStatus as axiosGetDateReservationWithStatus,
  getReservations
} from '../services/apis/reservation';
import {notifyError, notifyWarning} from '../consts/notifications';


const useReservation = () => {
  const getDateReservationWithStatus = async() => {
    try {
      let {data} = await axiosGetDateReservationWithStatus();
      return data;
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      return null;
    }
  };
  const getReservationsUser = async() => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await getReservations({token});
      return data;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return null;
    }
  };

  return {
    getDateReservationWithStatus,
    getReservationsUser
  };
};

export default useReservation;