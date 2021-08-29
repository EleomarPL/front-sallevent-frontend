import {
  getDateReservationWithStatus as axiosGetDateReservationWithStatus,
  getReservations,
  createReservation as createReservationAxios,
  deleteReservation as deleteReservationUser,
  getOnlyReservation as getOnlyReservationAxios,
  getReservationWithServices
} from '../services/apis/reservation';
import {notifyError, notifyWarning, notifySuccess} from '../consts/notifications';


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
  const createReservation = async({listSelectedServices, timeStart, timeEnd, typeEvent, dateYYMMDD}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await createReservationAxios({listSelectedServices, timeStart, timeEnd, typeEvent, dateYYMMDD, token});
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
  const deleteReservation = async({idReservation}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await deleteReservationUser({idReservation, token});
      notifySuccess('Reservación eliminada correctamente');
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
  const getOnlyReservation = async({idReservation}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await getOnlyReservationAxios({idReservation, token});
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
  const getReservation = async({idReservation}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));

    try {
      let {data} = await getReservationWithServices({idReservation, token});
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
    getReservationsUser,
    createReservation,
    deleteReservation,
    getOnlyReservation,
    getReservation
  };
};

export default useReservation;