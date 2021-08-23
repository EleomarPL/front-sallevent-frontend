import axios from 'axios';

const baseAPI = 'http://localhost:4000/api/user';


export const createUser = async({ name, lastName, motherLastName, phone, email, userName, password }) => {
  
  let response = await axios.post(`${baseAPI}/create-user`,
    {
      name, lastName, motherLastName, phone, email, userName, password
    });
  return response;
};
export const editDataUser = async({ name, lastName, motherLastName, phone, email, userName, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.post(`${baseAPI}/edit-data-user`,
    {
      name, lastName, motherLastName, phone, email, userName
    },
    config
  );
  return response;
};
export const editPasswordUser = async({ oldPassword, newPassword, token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  let response = await axios.post(`${baseAPI}/edit-password-user`,
    { oldPassword, newPassword },
    config
  );
  return response;
};