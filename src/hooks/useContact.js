import {sendMessageContact} from '../services/apis/contact';
import {notifySuccess, notifyError} from '../consts/notifications';

const useContact = () => {
  const createMessageContact = async({ fullName, email, phone, text }) => {
    try {
      await sendMessageContact({ fullName, email, phone, text });
      notifySuccess('Mensaje enviado');
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      else
        notifyError('Error, vuelve a intentar, por favor');
    }
  };

  return {
    createMessageContact
  };
};

export default useContact;