import {
  getDataFooter as getDataFooterAxios,
  getInfoRoom as getInfoRoomAxios,
  updateInfoRoom as updateInfoRoomAxios
} from '../services/apis/room';
import {notifyError, notifySuccess, notifyWarning} from '../consts/notifications';


const useRoom = () => {
  const getDataFooter = async() => {
    try {
      let {data} = await getDataFooterAxios();
      return data;
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      return null;
    }
  };
  const getInfoRoom = async() => {
    try {
      let {data} = await getInfoRoomAxios();
      return data;
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      return null;
    }
  };
  const updateInfoRoom = async({
    name, capacity, description, priceHour, street, state, municipality, suburb,
    sunday, monday, tuesday, wednesday, thursday, friday, saturday
  }) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      let {data} = await updateInfoRoomAxios(
        {
          name, capacity, description, priceHour, street, state, municipality, suburb,
          sunday, monday, tuesday, wednesday, thursday, friday, saturday, token
        });
      notifySuccess('Los datos del salón se han modificado exitosamente');
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
    getDataFooter,
    getInfoRoom,
    updateInfoRoom
  };
};

export default useRoom;