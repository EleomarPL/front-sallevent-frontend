import {createUser} from '../services/apis/user';
import {notifySuccess, notifyError, notifyWarning} from '../consts/notifications';

const useUser = () => {

  const createNewUser = async({ name, lastName, motherLastName, phone, email, userName, password }) => {
    try {
      await createUser(
        {
          name, lastName, motherLastName, phone, email, userName, password
        });
      notifySuccess(`¡Felicidades! "${name}" has sido registrado exitosamente. Por favor inicia sesión`);
      return true;
    } catch ( err ) {
      if (err.message === 'Request failed with status code 409') {
        notifyWarning('Ingresa un diferente nombre de usuario');
      }
      if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return false;
    }
  };

  return {
    createNewUser
  };
};

export default useUser;