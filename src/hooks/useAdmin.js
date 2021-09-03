import { useContext } from 'react';

import {
  editDataAdmin as editDataAdminAxios,
  editPasswordAdmin as editPasswordAdminAxios,
  getUsers as getUserAxios,
  deleteUser as deleteUserAxios,
  editDataUser as editDataUserAxios
} from '../services/apis/admin';
import {notifySuccess, notifyError, notifyWarning} from '../consts/notifications';

import Auth from '../contexts/Auth';

const useAdmin = () => {
  const {userData, setUserData} = useContext(Auth);

  const editDataAdmin = async({name, lastName, motherLastName, phone, email, userName}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      let {data} = await editDataAdminAxios(
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
  const editPasswordAdmin = async({oldPassword, newPassword}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      await editPasswordAdminAxios(
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
  const getUsers = async({keyword}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      let {data} = await getUserAxios({ keyword, token});
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
  const editDataUser = async({idUser, name, lastName, motherLastName, phone, email, userName, password}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      let {data} = await editDataUserAxios(
        {
          name, lastName, motherLastName, phone, email, userName, token, idUser, password
        });
      notifySuccess('Tus datos se han actualizado correctamente ');
      return data;
    } catch ( err ) {
      if (err.message === 'Request failed with status code 409') {
        notifyWarning('Ingresa un diferente nombre de usuario');
      } else if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return null;
    }
  };
  const deleteUser = async({id}) => {
    const token = JSON.parse(window.localStorage.getItem('session'));
    try {
      let response = await deleteUserAxios({ id, token});
      if (response.status === 204) {
        notifySuccess('Usuario eliminado correctamente');
      }
      return true;
    } catch ( err ) {
      if (err.response.data.error === 'Token missing or invalid') {
        notifyWarning('Al parecer, perdiste los permisos, te recomiendo cerrar sesión');
      } else if (err.message === 'Network Error') {
        notifyError('No encontramos una conexión a internet');
      }
      return false;
    }
  };

  return {
    editDataAdmin,
    editPasswordAdmin,
    getUsers,
    deleteUser,
    editDataUser
  };
};

export default useAdmin;