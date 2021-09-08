import {
  sendMessageContact,
  deleteMessageContact as deleteMessageContactAxios,
  getAllMessagesContact as getAllMessagesContactAxios
} from '../services/apis/contact';
import {notifySuccess, notifyError, notifyWarning} from '../consts/notifications';

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
  const deleteMessageContact = async({ idMessageContact }) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      await deleteMessageContactAxios({ idMessageContact, token });
      notifySuccess('Mensaje eliminado');
      return true;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      else
        notifyError('Error, vuelve a intentar, por favor');
      return false;
    }
  };
  const getAllMessagesContact = async() => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      const {data} = await getAllMessagesContactAxios({ token });
      return data;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      else
        notifyError('Error, vuelve a intentar, por favor');
      return null;
    }
  };

  return {
    createMessageContact,
    deleteMessageContact,
    getAllMessagesContact
  };
};

export default useContact;