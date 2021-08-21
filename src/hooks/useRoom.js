import {getDataFooter as getDataFooterAxios} from '../services/apis/room';
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

  return {
    getDataFooter
  };
};

export default useRoom;