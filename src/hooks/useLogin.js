import { useContext } from 'react';

import {login as loginUser} from '../services/apis/login';
import {notifyError} from '../consts/notifications';

import Auth from '../contexts/Auth';

const useLogin = () => {
  const {setUserData} = useContext(Auth);

  const login = async({ username, password }) => {
    try {
      let {data} = await loginUser({ username, password });

      let dataUser = {
        name: data.name,
        lastName: data.lastName,
        motherLastName: data.motherLastName,
        phone: data.phone,
        email: data.email,
        userName: data.userName
      };
      window.localStorage.setItem('datauser', JSON.stringify(dataUser));
      window.localStorage.setItem('session', JSON.stringify(data.token));

      setUserData(dataUser);
    } catch ( err ) {
      if (err.message === 'Network Error')
        notifyError('No encontramos una conexión a internet');
      else
        notifyError('Error, vuelve a intentar, por favor');
    }
  };

  return {
    login
  };
};

export default useLogin;