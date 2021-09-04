import {
  getAllServices as getAllServicesAxios,
  quotationReservation as quotationReservationAxios,
  searchServices as searchServicesAxios,
  createService as createServiceAxios,
  updateService as updateServiceAxios
}
  from '../services/apis/service';
import {notifyError, notifySuccess, notifyWarning} from '../consts/notifications';


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
  const searchServices = async({keyword}) => {
    try {
      let {data} = await searchServicesAxios({keyword});
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
  const createService = async({ name, price, detail }) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      let {data} = await createServiceAxios({ name, price, detail, token });
      notifySuccess('Servicio creado correctamente');
      return data;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Request failed with status code 409') {
        notifyWarning('Ingresa un diferente nombre de servicio');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return null;
    }
  };
  const updateService = async({ name, price, detail, idService}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      let {data} = await updateServiceAxios({ name, price, detail, token, idService });
      notifySuccess('Servicio actualizado correctamente');
      return data;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Request failed with status code 409') {
        notifyWarning('Ingresa un diferente nombre de servicio');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return null;
    }
  };
  return {
    getAllServices,
    quotationReservation,
    searchServices,
    createService,
    updateService
  };
};

export default useService;