import {getAllServices as getAllServicesAxios} from '../services/apis/service';
import {notifyError} from '../consts/notifications';


const useService = () => {
  const getAllServices = async() => {
    try {
      let {data} = await getAllServicesAxios();
      return data;
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      else
        notifyError('Error, vuelve a intentar, por favor');
      return [];
    }
  };

  return {
    getAllServices
  };
};

export default useService;