import { useContext } from 'react';
import { login as loginUser } from '../services/apis/login';
import { notifyError, notifyInfo } from '../consts/notifications';
import Auth from '../contexts/Auth';

const useLogin = () => {
  const { setUserData } = useContext(Auth);

  const login = async({ userName, password }) => {
    try {
      let {data} = await loginUser({ userName, password });

      let dataUser = {
        name: data.name,
        lastName: data.lastName,
        motherLastName: data.motherLastName,
        phone: data.phone,
        email: data.email,
        userName: data.userName,
        type: data.type
      };
      window.localStorage.setItem('datauser', JSON.stringify(dataUser));
      window.localStorage.setItem('session', JSON.stringify(data.token));

      return dataUser;
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      else if (err.response.data.error === 'Invalid user or password')
        notifyInfo('Usuario o contraseña invalido');
      else
        notifyError('Error, vuelve a intentar, por favor');
      
      return null;
    }
  };
  const logout = () => {
    window.localStorage.clear();
    setUserData(null);
  };

  return {
    login,
    logout
  };
};

export default useLogin;