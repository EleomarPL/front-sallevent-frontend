import {
  getDataFooter as getDataFooterAxios,
  getInfoRoom as getInfoRoomAxios
} from '../services/apis/room';
import {notifyError} from '../consts/notifications';


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

  return {
    getDataFooter,
    getInfoRoom
  };
};

export default useRoom;