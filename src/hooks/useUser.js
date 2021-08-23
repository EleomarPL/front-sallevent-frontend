import { useContext } from 'react';

import {createUser, editDataUser as editDataUserAxios, editPasswordUser as editPasswordUserAxios} from '../services/apis/user';
import {notifySuccess, notifyError, notifyWarning} from '../consts/notifications';

import Auth from '../contexts/Auth';

const useUser = () => {
  const {userData, setUserData} = useContext(Auth);

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
  const editDataUser = async({name, lastName, motherLastName, phone, email, userName}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      let {data} = await editDataUserAxios(
        {
          name, lastName, motherLastName, phone, email, userName, token
        });
      let dataUser = {
        ...userData,
        name: data.name,
        lastName: data.lastName,
        motherLastName: data.motherLastName,
        phone: data.phone,
        email: data.email,
        userName: data.userName
      };
      setUserData(dataUser);
      window.localStorage.setItem('datauser', JSON.stringify(dataUser));
      notifySuccess('Tus datos se han actualizado correctamente ');
      return true;
    } catch ( err ) {
      if (err.message === 'Request failed with status code 409') {
        notifyWarning('Ingresa un diferente nombre de usuario');
      } else if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return false;
    }
  };
  const editPasswordUser = async({oldPassword, newPassword}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      await editPasswordUserAxios(
        {
          oldPassword, newPassword, token
        });
      notifySuccess('Tu contraseña se ha actualizado correctamente ');
      return true;
    } catch ( err ) {
      if (err.message === 'Request failed with status code 401') {
        notifyWarning('Tu contraseña actual no es valida');
      } else if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return false;
    }
  };

  return {
    createNewUser,
    editDataUser,
    editPasswordUser
  };
};

export default useUser;