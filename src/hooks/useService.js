import {getAllServices as getAllServicesAxios, quotationReservation as quotationReservationAxios}
  from '../services/apis/service';
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
  const quotationReservation = async({listServices, timeStart, timeEnd}) => {
    try {
      let {data} = await quotationReservationAxios({listServices, timeStart, timeEnd});
      return data;
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      else
        notifyError('Error, vuelve a intentar, por favor');
      return null;
    }
  };

  return {
    getAllServices,
    quotationReservation
  };
};

export default useService;