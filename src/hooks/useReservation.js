import {getDateReservationWithStatus as axiosGetDateReservationWithStatus} from '../services/apis/reservation';
import {notifyError} from '../consts/notifications';


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

  return {
    getDateReservationWithStatus
  };
};

export default useReservation;